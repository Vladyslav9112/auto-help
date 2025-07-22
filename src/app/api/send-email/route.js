import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, tickets } = await req.json();

  if (!email || !tickets) {
    return Response.json({ error: "Invalid data" }, { status: 400 });
  }

  // Створення транспорту
  const transporter = nodemailer.createTransport({
    host: "", // пошта
    port: 465,
    secure: true, // Використовуємо SSL
    auth: {
      user: "", // пошта
      pass: "", // пароль від пошти
    },
  });

  // Формування листа
  const mailOptions = {
    from: '"Ticket Service" <mail@auto-help-win.com.ua>',
    to: email,
    subject: "Ваші білети",
    html: `
      <div style="text-align: center;">
        <h2>Ваші білети</h2>
        <img src="https://auto-help-win.com.ua/ticket.png" alt="ticket" width="180" />
        <p>Номери ваших білетів:</p>
        <p style="font-size: 18px; font-weight: bold;">${tickets.join(", ")}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return Response.json({ error: "Email send failed" }, { status: 500 });
  }
}
