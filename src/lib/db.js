import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "", // localhost або IP якщо база окремо
  port: 3306,
  user: "", //користувач
  password: "", // пароль
  database: "", //база даних
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
