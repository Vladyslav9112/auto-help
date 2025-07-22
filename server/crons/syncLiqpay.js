import cron from "node-cron";
import updateOldOrders from "../../scripts/updateLiqpayStatuses.js";

// 🕒 Запуск кожні 30 хвилин (можеш змінити)
cron.schedule("*/30 * * * *", async () => {
  console.log(
    "🔁 Запуск оновлення LiqPay статусів:",
    new Date().toLocaleString()
  );
  await updateOldOrders();
});
