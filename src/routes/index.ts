import express from "express";
import reportRouter from "./report.routes";

const router = express.Router();

router.use("/reports", reportRouter);

export default router;
