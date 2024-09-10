import express, { Request, Response, Application, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
app.use(express.json());
const port = process.env.PORT || 5003;

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
