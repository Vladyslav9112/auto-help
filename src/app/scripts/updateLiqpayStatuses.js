import pool from "@/lib/db";
import axios from "axios";
import crypto from "crypto";

const publicKey = "ВАШ_PUBLIC_KEY";
const privateKey = "WgawAy9QVGpuHEnV0RRP0dxaBlZ7ZAx9wGpZcjpy";
const ORDER_LIMIT = 100;

function encodeData(data) {
  return Buffer.from(JSON.stringify(data)).toString("base64");
}

function signData(data) {
  return crypto
    .createHash("sha1")
    .update(privateKey + data + privateKey)
    .digest("base64");
}

async function getLiqPayStatus(order_id) {
  const requestData = {
    action: "status",
    version: "3",
    order_id,
  };

  const data = encodeData(requestData);
  const signature = signData(data);

  const response = await axios.post("https://www.liqpay.ua/api/request", {
    data,
    signature,
  });

  return response.data;
}

export default async function updateOldOrders() {
  let conn;
  try {
    conn = await pool.getConnection();

    const [rows] = await conn.query(
      `
      SELECT order_id, status 
      FROM payments 
      WHERE status NOT IN ('success', 'sandbox') OR status IS NULL
      LIMIT ?
    `,
      [ORDER_LIMIT]
    );

    if (!rows.length) {
      console.log("ℹ️ Немає ордерів для оновлення");
      return;
    }

    console.log(`🔍 Перевіряємо ${rows.length} ордерів`);

    for (const row of rows) {
      try {
        const liqpayData = await getLiqPayStatus(row.order_id);
        if (liqpayData.status && liqpayData.status !== row.status) {
          await conn.query(
            `UPDATE payments 
             SET status = ?, data = ?, updated_at = NOW() 
             WHERE order_id = ?`,
            [liqpayData.status, JSON.stringify(liqpayData), row.order_id]
          );
          console.log(`✅ Оновлено: ${row.order_id} → ${liqpayData.status}`);
        } else {
          console.log(`➖ Без змін: ${row.order_id}`);
        }
      } catch (err) {
        console.warn(`⚠️ Помилка на ${row.order_id}:`, err.message);
      }
    }
  } catch (err) {
    console.error("❌ Помилка бази:", err.message);
  } finally {
    if (conn) conn.release();
  }
}
