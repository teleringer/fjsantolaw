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

    const to = process.env.MAIL_TO || "kevin@fjsantolaw.com";
    const from = process.env.MAIL_FROM || "frank@fjsantolaw.com";

    // Send the email via Resend
    const { data: result, error } = await resend.emails.send({
      from: `Frank J. Santomauro <${from}>`,
      to: [to],
      subject: `New contact form — ${subject}`,
      reply_to: email,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Subject: ${subject}\n\n` +
        `${message}`
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ ok: false, error: "Email send failed" }, { status: 500 });
    }

    return Response.json({ ok: true, id: result?.id }, { status: 200, headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
