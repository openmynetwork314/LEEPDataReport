import express from "express";
import { generateReportController } from "./report.controller";

const router = express.Router();

//generate reports
router.get("/", generateReportController);

export default router;
