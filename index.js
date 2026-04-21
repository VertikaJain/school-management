import express from "express";
import dotenv from "dotenv";
import { router as schoolRoutes } from "./routes/schools.js";

dotenv.config();

const app = express();
app.use(express.json());

// Server connection
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log("Server running on PORT : ", PORT));

app.use("/api/schools", schoolRoutes);
