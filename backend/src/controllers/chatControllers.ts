import { NextFunction, Response } from "express";
import User from "../models/User";
import { UserNotFoundError } from "../errors";
import Message from "../models/Message";
import { updateLatestMessagesHandler } from "../helpers/chatHandlers";

export const sendMessage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { receiverId } = req.params;
  const { loggedInUserId } = req;
  const { text } = req.body;
  try {
    const receiver = await User.findById(receiverId);
    const sender = await User.findById(loggedInUserId);

    if (!receiver || !sender) throw new UserNotFoundError();

    if (!receiver.friends.includes(sender.id)) receiver.friends.push(sender.id);
    if (!sender.friends.includes(receiver.id)) sender.friends.push(receiver.id);

    const newMessage = await Message.create({ receiver, sender, text });

    const latestMessage = { user: sender.id, message: newMessage.id };

    sender.latestMessages = await updateLatestMessagesHandler(
      sender.latestMessages,
      latestMessage
    );

    if (sender.id !== receiver.id) {
      receiver.latestMessages = await updateLatestMessagesHandler(
        receiver.latestMessages,
        latestMessage
      );
    }

    await receiver.save();
    await sender.save();

    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

export const getLatestMessages = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { loggedInUserId } = req;
  try {
    const sender = await User.findById(loggedInUserId).populate({
      path: "latestMessages",
      populate: [
        {
          path: "user",
          model: "User",
        },
        {
          path: "message",
          model: "Message",
        },
      ],
    });

    res.status(201).json(sender);
  } catch (error) {
    next(error);
  }
};
