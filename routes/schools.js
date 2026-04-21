import express from "express";
import { addNewSchool, listSchools } from "../controllers/schoolController.js";
import {
  validateCoordinates,
  validateSchool,
} from "../middlewares/validateSchool.js";

export const router = express.Router();

router.post("/addSchool", validateSchool, addNewSchool);

router.get("/listSchools", validateCoordinates, listSchools);
