import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan"

dotenv.config();

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

const app = express();

app.use(morgan("tiny"))

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "working..." });
});

mongoose
  .connect(dbUrl!)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  })
  .catch((err) => console.log(err));
