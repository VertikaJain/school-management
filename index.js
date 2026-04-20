import express from "express";
import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Database connection
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((error) => {
  if (error) throw error;
  console.log("Database connected successfully");
  // Server connection
  app.listen(process.env.SERVER_PORT, () =>
    console.log("Server running on PORT : ", process.env.SERVER_PORT),
  );
});
