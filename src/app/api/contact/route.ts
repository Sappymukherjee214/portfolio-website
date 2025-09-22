import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend will use your verified domain
      to: ['mukherjeesaptarshi289@gmail.com'], // IMPORTANT: Change this to your email
      subject: `New message from your portfolio`,
      replyTo: email,
      html: `<p>You received a new message from ${email}:</p><p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}