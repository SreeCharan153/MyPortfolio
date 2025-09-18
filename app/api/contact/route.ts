import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log("Incoming contact form data:", { name, email, subject, message });
    console.log("Env values:", {
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      apiKeySet: !!process.env.RESEND_API_KEY,
    });

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: process.env.RESEND_TO as string,
      subject: subject || "New Contact Form Submission",
      replyTo: email,
      html: `
        <h3>New Message from ${name}</h3>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p>${message}</p>
      `,
    });

    console.log("Resend result:", result);

    if (result.error) {
      console.error("Resend API returned error:", result.error);
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
