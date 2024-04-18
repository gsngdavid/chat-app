import { NextFunction, Response } from "express";
import User from "../models/User";
import { UserNotFoundError } from "../errors";
import Message from "../models/Message";

export const sendMessage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { receiverId } = req.params;
  const { loggedInUserId } = req;
  const { text } =  req.body
  try {
    const receiver = await User.findById(receiverId);
    const sender = await User.findById(loggedInUserId);

    if (!receiver || !sender) throw new UserNotFoundError();
    if (!receiver.friends.includes(receiver.id))
      receiver.friends.push(receiver.id);
    if (!sender.friends.includes(sender.id)) sender.friends.push(sender.id);

    const newMessage = new Message({ receiver, sender, text });
    await newMessage.save();
    await receiver.save();
    await sender.save();

    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};