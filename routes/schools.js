import express from "express";
import { addNewSchool, listSchools } from "../controllers/schoolController.js";

export const router = express.Router();

router.post("/addSchool", addNewSchool);

router.get("/listSchools", listSchools);
