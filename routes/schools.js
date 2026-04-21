import express from "express";
import { addNewSchool, listSchools } from "../controllers/schoolController.js";
import { validateSchool } from "../middlewares/validateSchool.js";

export const router = express.Router();

router.post("/addSchool", validateSchool, addNewSchool);

router.get("/listSchools", listSchools);
