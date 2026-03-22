import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";
import { sendTelegram } from "@/lib/send-telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, comment } = body;

    // Server-side validation
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!phone || !/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }
    if (!service) {
      return NextResponse.json({ error: "Invalid service" }, { status: 400 });
    }

    const data = { name, phone, service, comment: comment || "" };

    // Send email (primary — must succeed)
    await sendEmail(data);

    // Send Telegram (best-effort — fire and forget)
    sendTelegram(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
