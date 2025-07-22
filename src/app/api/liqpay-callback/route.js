import pool from "@/lib/db";
import crypto from "crypto";

function verifySignature(data, signature) {
  const privateKey = ""; // приватний ключ з liqPay
  const signStr = privateKey + data + privateKey;
  const sha1 = crypto.createHash("sha1").update(signStr).digest("base64");
  return sha1 === signature;
}

export async function POST(req) {
  let conn;
  try {
    const formData = await req.formData();
    const data = formData.get("data");
    const signature = formData.get("signature");

    console.log("✅ Raw callback data:", { data, signature });

    if (!verifySignature(data, signature)) {
      console.warn("❌ Невірний підпис LiqPay");
      return Response.json(
        { status: "error", message: "Invalid signature" },
        { status: 400 }
      );
    }

    const decoded = JSON.parse(Buffer.from(data, "base64").toString("utf-8"));
    console.log("✅ LiqPay decoded data:", decoded);

    conn = await pool.getConnection();
    console.log("✅ DB connection established");

    await conn.query(
      `INSERT INTO payments (order_id, status, data, created_at)
       VALUES (?, ?, ?, NOW())
       ON DUPLICATE KEY UPDATE 
         status = VALUES(status),
         data = VALUES(data),
         updated_at = NOW()`,
      [decoded.order_id, decoded.status, JSON.stringify(decoded)]
    );

    return Response.json({ status: "ok" });
  } catch (err) {
    console.error("❌ Callback error:", err);
    return Response.json(
      { status: "error", message: err.message || "Server error" },
      { status: 500 }
    );
  } finally {
    if (conn) conn.release();
  }
}
