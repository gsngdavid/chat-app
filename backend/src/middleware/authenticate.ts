import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

const accessKey = process.env.JWT_SECRET || "";

export const verifyJWT = (req: any, res: Response, next: () => void) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).send("User not logged in");
  }

  const token = authHeader.split(" ")[1];
  verify(token, accessKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).send("access token not valid");
    }

    req.loggedInUserId = decoded.userId;
    next();
  });
};
