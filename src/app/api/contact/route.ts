import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <kontakt@mikolajczakpatryk.pl>",
      to: "kontakt@mikolajczakpatryk.pl",
      replyTo: email,
      subject: `Nowa wiadomość z portfolio od ${name}`,
      text: `Imię: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    });

    return NextResponse.json({
      success: true,
      message: "Wiadomość odebrana. Odpiszę w ciągu 24h!",
    });
  } catch {
    return NextResponse.json(
      { error: "Nie udało się przetworzyć wiadomości" },
      { status: 500 }
    );
  }
}
