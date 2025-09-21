// api/contact.js
import nodemailer from "nodemailer";

// Robust body parser for Vercel Node functions
async function getJsonBody(req) {
  try {
    // If Vercel already parsed (sometimes happens), use it
    if (req.body && typeof req.body === "object") return req.body;

    // Otherwise read the raw stream
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString("utf8") || "{}";
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = await getJsonBody(req);
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields (name, email, message)" });
  }

  // Validate minimal email shape
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,           // smtp.gmail.com
      port: Number(process.env.SMTP_PORT),   // 465
      secure: Number(process.env.SMTP_PORT) === 465, // SSL if 465
      auth: {
        user: process.env.SMTP_USER,         // kevin@... or frank@...
        pass: process.env.SMTP_PASS,         // App Password
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,           // should match the authenticated user unless "Send as" is configured
      to: process.env.MAIL_TO,               // kevin@fjsantolaw.com
      subject: `Website Contact — ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "(not provided)"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "(not provided)"}</p>
          <hr>
          <pre style="white-space:pre-wrap;font:inherit">${message}</pre>
        </div>
      `,
    });

    return res.status(200).json({ ok: true, id: info.messageId || null });
  } catch (err) {
    // Expose a friendly error, details go to Vercel Function logs
    console.error("Email error:", err?.response || err?.message || err);
    return res.status(500).json({ error: "SMTP send failed" });
  }
}
