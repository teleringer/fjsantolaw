// app/api/contact/route.ts
import { Resend } from "resend";
export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Turnstile verify helper ---
async function verifyTurnstile(token: string, ip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) throw new Error("TURNSTILE_SECRET_KEY missing");

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });

  if (!res.ok) throw new Error(`Turnstile verify HTTP ${res.status}`);
  const json = await res.json() as { success: boolean; "error-codes"?: string[] };
  return json.success ? { ok: true } : { ok: false, codes: json["error-codes"] ?? [] };
}

function entriesToObject(entries: Iterable<[string, FormDataEntryValue]>) {
  const obj: Record<string, string> = {};
  for (const [k, v] of entries) obj[k] = typeof v === "string" ? v : "";
  return obj;
}

function getRecipientList(): string[] {
  const raw = process.env.MAIL_TO || "frank@fjsantolaw.com";
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
}

export async function POST(req: Request) {
  try {
    const ct = req.headers.get("content-type") || "";

    let data: Record<string, string> = {};
    if (ct.includes("application/json")) {
      data = await req.json();
    } else {
      const form = await req.formData();
      data = entriesToObject(form.entries() as any);
    }

    // Turnstile token can arrive as the auto-inserted form input
    // 'cf-turnstile-response' OR a JSON field you send manually, e.g. 'turnstileToken'.
    const tsToken =
      (data["cf-turnstile-response"] || data["turnstileToken"] || "").toString().trim();

    if (!tsToken) {
      return Response.json({ ok: false, error: "Turnstile token missing" }, { status: 400 });
    }

    // Verify with Cloudflare before proceeding
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const ts = await verifyTurnstile(tsToken, ip);
    if (!ts.ok) {
      return Response.json(
        { ok: false, error: "Turnstile verification failed", codes: (ts as any).codes },
        { status: 403 },
      );
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
      return Response.json({ ok: false, error: "RESEND_API_KEY missing" }, { status: 500 });
    }
    if (!process.env.MAIL_FROM) {
      return Response.json({ ok: false, error: "MAIL_FROM not set" }, { status: 500 });
    }

    const from = process.env.MAIL_FROM!; // e.g. frank@fjsantolaw.com
    const toList = getRecipientList();   // frank@..., (optional kevin@...)

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

    // 1) Send to inbox (Frank + optional Kevin)
    const { data: result, error } = await resend.emails.send({
      from: `Frank J. Santomauro <${from}>`,
      to: toList,
      subject: `New contact form — ${subject}`,
      replyTo: email,
      text:
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { ok: false, error: error.message || "Email send failed" },
        { status: 500 },
      );
    }

    // 2) Auto-reply to the visitor (non-blocking)
    try {
      const ackText =
        `Hi ${name},\n\n` +
        `Thanks for contacting the Law Offices of Frank J. Santomauro.\n` +
        `We received your message about "${subject}". A team member will follow up soon.\n\n` +
        `— Law Offices of Frank J. Santomauro\n(570) 342-7787\nfjsantolaw.com`;

      await resend.emails.send({
        from: `Law Offices of Frank J. Santomauro <${from}>`,
        to: [email],
        subject: "We received your message",
        replyTo: toList[0],
        text: ackText,
        html: `<pre style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;white-space:pre-wrap">${ackText}</pre>`,
      });
    } catch (ackErr) {
      console.warn("Resend auto-reply error:", ackErr);
    }

    return Response.json(
      { ok: true, id: result?.id },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  } catch (err: any) {
    console.error("Contact route error:", err);
    return Response.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return new Response("OK /api/contact");
}
