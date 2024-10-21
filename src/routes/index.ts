import express, { Request, Response, NextFunction } from "express";
import reportRouter from "./report/report.routes";

const router = express.Router();

router.use("/report", reportRouter);

export default router;
