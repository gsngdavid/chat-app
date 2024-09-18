import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";

dotenv.config();

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use("/auth", authRoutes);
app.use("/chats", chatRoutes);

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log(error);
  const { code, message } = error;

  res.status(code ?? 500).json({ message: message ?? "Internal server error" });
});

mongoose
  .connect(dbUrl!)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  })
  .catch((err) => console.log(err));
