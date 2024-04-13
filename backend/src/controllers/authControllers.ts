import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../models/User";
import { UserExistsError } from "../errors";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userWithEmail = await User.findOne({ email: req.body.email });
    if (userWithEmail) {
      throw new UserExistsError("email");
    }

    const userWithUsername = await User.findOne({
      username: req.body.username,
    });
    if (userWithUsername) {
      throw new UserExistsError("username");
    }

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: passwordHash });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User successfully created", userId: newUser.id });
  } catch (error) {
    next(error);
  }
};

