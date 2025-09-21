// app/api/contact/route.ts
import { Resend } from "resend";
export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function entriesToObject(entries: Iterable<[string, FormDataEntryValue]>) {
  const obj: Record<string, string> = {};
  for (const [k, v] of entries) obj[k] = typeof v === "string" ? v : "";
  return obj;
}

export async function POST(req: Request) {
  try {
    const ct = req.headers.get("content-type") || "";
    let data: any = {};
    if (ct.includes("application/json")) {
      data = await req.json();
    } else {
      const form = await req.formData();
      data = entriesToObject(form.entries() as any);
    }

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const phone = (data.phone || "").trim();
    const subject = (data.subject || "").trim() || "General Inquiry";
    const message = (data.message || "").trim();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ ok: false, error: "RESEND_API_KEY missing in environment" }, { status: 500 });
    }
    if (!process.env.MAIL_FROM) {
      return Response.json({ ok: false, error: "MAIL_FROM not set" }, { status: 500 });
    }

    const to = process.env.MAIL_TO || "kevin@fjsantolaw.com";
    const from = process.env.MAIL_FROM!; // e.g. no-reply@mail.fjsantolaw.com

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap">${message}</pre>
      </div>
    `;

    // 1) Send to Kevin (admin/inbox)
    const { data: adminResult, error: adminError } = await resend.emails.send({
      from: `Frank J. Santomauro <${from}>`,
      to: [to],
      subject: `New contact form — ${subject}`,
      replyTo: email, // NOTE: camelCase
      text:
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`,
      html
    });

    if (adminError) {
      console.error("Resend admin send error:", adminError);
      return Response.json({ ok: false, error: adminError.message || "Email send failed" }, { status: 500 });
    }

    // 2) Auto-reply to the visitor (non-blocking: do not fail if this errors)
    try {
      const ackText =
        `Hi ${name},\n\n` +
        `Thanks for contacting the Law Offices of Frank J. Santomauro.\n` +
        `We received your message about "${subject}". A team member will follow up soon.\n\n` +
        `— Law Offices of Frank J. Santomauro\n` +
        `(570) 342-7787\n` +
        `fjsantolaw.com`;

      await resend.emails.send({
        from: `Law Offices of Frank J. Santomauro <${from}>`, // from = no-reply@mail.fjsantolaw.com
        to: [email],                                          // visitor’s email
        subject: "We received your message",
        replyTo: process.env.MAIL_TO,                         // replies go to Kevin
        text: ackText,
        html: `<pre style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;white-space:pre-wrap">${ackText}</pre>`
      });
    } catch (ackErr) {
      // Log and continue — don’t block the main success path
      console.warn("Resend auto-reply error:", ackErr);
    }

    return Response.json(
      { ok: true, id: adminResult?.id },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (err: any) {
    console.error("Contact route error:", err);
    return Response.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}

// Optional probe for quick checks
export async function GET() {
  return new Response("OK /api/contact");
}
