// app/api/contact/route.ts
export const runtime = "nodejs"; // we’ll use Node later for SMTP

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
      // handles application/x-www-form-urlencoded or multipart/form-data
      const form = await req.formData();
      data = entriesToObject(form.entries() as any);
    }

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const message = (data.message || "").trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { status: 400 });
    }

    // For now we only verify it reaches Vercel. (Email send comes next.)
    console.log("Contact submission:", data);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  } catch (err) {
    console.error("Contact route error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
}
