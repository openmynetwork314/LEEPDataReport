import express, { Request, Response, Application, NextFunction } from "express";
import router from "./routes";
import dotenv from "dotenv";
import connectDB from "./database/connect";
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8003;

connectDB();

app.use(express.json());
app.use(router);

//GLOBAL REQUEST USER TYPE
export interface RequestUser {
  id: string;
  email: string;
}
//GLOBAL REQUEST USER TYPE

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.send("Works🔥🔥🔥🔥🔥");
});

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
