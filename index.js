import express from "express";
import dotenv from "dotenv";
import { router as schoolRoutes } from "./routes/schools.js";

dotenv.config();

const app = express();
app.use(express.json());

// Server connection
app.listen(process.env.SERVER_PORT, () =>
  console.log("Server running on PORT : ", process.env.SERVER_PORT),
);

app.use("/api/schools", schoolRoutes);
