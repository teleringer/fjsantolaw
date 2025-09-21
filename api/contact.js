// api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name = "", email = "", phone = "", message = "" } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields (name, email, message)" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true, // 465 = SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,                 // e.g., frank@fjsantolaw.com
      to: process.env.MAIL_TO,                     // kevin@fjsantolaw.com
      subject: `Website Contact — ${name}`,
      replyTo: email,                              // so Kevin can reply to the visitor
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "(not provided)"}</p>
          <hr>
          <p style="white-space:pre-wrap">${message}</p>
        </div>`,
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
