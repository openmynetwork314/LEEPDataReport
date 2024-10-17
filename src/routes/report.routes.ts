import express, { Request, Response, NextFunction } from "express";
import { connection } from "../database/connect";
const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    connection.query(
      "SELECT * FROM omnrdsdatabase.RpvK48mv_actionscheduler_actions LIMIT 10",
      function (error, results, fields) {
        if (error) throw error;
        // PERFORM ACTIONS WITH QUERY HERE
        return res.send(results);
        // analyze results
        // analyzeedResult -> html inject -> pdf buffer_ puppter ->  pdf

        // PERFORM ACTIONS WITH QUERY HERE
      }
    );
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

export default router;
