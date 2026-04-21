import dotenv from "dotenv";
import mysql from "mysql2/promise";
dotenv.config();

// Database connection
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

console.log("Database connected successfully");

export default db;
