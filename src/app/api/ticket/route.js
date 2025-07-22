import crypto from "crypto";
import pool from "@/lib/db";

export async function POST(req) {
  let conn;
  try {
    const body = await req.json();
    console.log("✅ Отримано body:", body);

    const { count, name, tel, email, title, price } = body;

    if (!name || !tel || !email || !title || !price) {
      console.error("❌ Не заповнені всі дані", body);
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ticketCount = parseInt(count, 10) || 1;
    const amount = parseFloat(price);

    if (isNaN(amount) || amount <= 0) {
      console.error("❌ Некоректна сума:", price);
      return Response.json({ error: "Invalid price" }, { status: 400 });
    }

    conn = await pool.getConnection();
    console.log("✅ Підключено до БД");

    const [rows] = await conn.query(
      "SELECT MAX(ticket_number) AS last_ticket FROM tickets"
    );
    const lastTicket = rows[0].last_ticket || 0;

    const tickets = [];
    for (let i = 1; i <= ticketCount; i++) {
      const ticketNumber = lastTicket + i;
      tickets.push(ticketNumber.toString());

      await conn.query(
        `INSERT INTO tickets (ticket_number, name, tel, email, order_id, created_at)
   VALUES (?, ?, ?, ?, ?, NOW())`,
        [ticketNumber, name, tel, email, order_id]
      );

      console.log(`✅ Квиток ${ticketNumber} записано`);
    }

    const order_id = `ORDER_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const liqpayData = {
      public_key: "", // ключ з лікпея
      version: "3",
      action: "pay",
      amount,
      currency: "UAH",
      description: `Оплата за ${title} (${ticketCount} шт)`,
      order_id,
      result_url: "https://auto-help-win.com.ua/orderForm",
      server_url: "https://auto-help-win.com.ua/api/liqpay-callback",
      sandbox: 0, // Обов'язково в продакшні
      language: "uk",
      applePay: true,
      googlePay: true,
    };

    console.log("✅ LiqPay дані:", liqpayData);

    const dataStr = Buffer.from(JSON.stringify(liqpayData)).toString("base64");
    const signature = crypto
      .createHash("sha1")
      .update(
        "" + // приватний ключ з лікпея
          dataStr +
          "" // приватний ключ з лікпея
      )
      .digest("base64");

    await conn.query(
      `INSERT INTO payments (order_id, status, data, created_at)
       VALUES (?, ?, ?, NOW())`,
      [order_id, "pending", JSON.stringify(liqpayData)]
    );
    console.log("✅ Платіж записано", order_id);

    return Response.json({
      data: dataStr,
      signature,
      tickets,
    });
  } catch (err) {
    console.error("❌ Помилка сервера:", err);
    return Response.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  } finally {
    if (conn) conn.release();
  }
}
