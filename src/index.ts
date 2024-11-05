import express, { Request, Response, Application, NextFunction } from "express";
import router from "./routes";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/connect";
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8003;

connectDB();

app.use(express.json());
app.use(cors());
app.use(router);

app.set("views", "./templates");
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.render("home");
});

//GLOBAL REQUEST USER TYPE
export interface RequestUser {
  id: string;
  email: string;
}
//GLOBAL REQUEST USER TYPE
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
