export async function POST(req) {
  const { name, tel, email, tickets } = await req.json();

  const botToken = "8013643356:AAFlGDBEzxaabLwQ99qemhk61Ci9jCyEg08";
  const chatId = "-1002855602029";
  const message = `👤 Имя: ${name}\n☎️ Телефон: ${tel}\n ✉️ Почта: ${email} \n🔢 Билетов: ${
    tickets.length
  }\n🎟️ Билеты: ${tickets.join(", ")}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });
    if (!res.ok) throw new Error("Помилка відправки в Telegram");
    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
