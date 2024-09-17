import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../models/User";
import {
  UnauthorizedError,
  UserExistsError,
} from "../errors";

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

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.user }, { username: req.body.user }],
    });
    if (!user) {
      throw new UnauthorizedError("Incorrect credentials");
    }

    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) throw new UnauthorizedError("Incorrect credentials");

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string
    );

    res.json({ userId: user.id, token });
  } catch (error) {
    next(error);
  }
};
