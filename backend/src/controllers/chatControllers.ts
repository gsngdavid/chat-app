import { NextFunction, Response } from "express";
import User from "../models/User";
import { UserNotFoundError } from "../errors";
import Message from "../models/Message";
import { updateLatestMessagesHandler } from "../helpers/chatHandlers";
import dayjs from "dayjs";

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
          select: "_id username firstName lastName",
        },
        {
          path: "message",
          model: "Message",
        },
      ],
    });

    if (!sender) {
      throw new UserNotFoundError();
    }

    res
      .status(201)
      .json(
        sender.latestMessages.sort((user1, user2) =>
          dayjs(user1.message.updatedAt).isAfter(dayjs(user2.message.updatedAt))
            ? -1
            : 1
        )
      );
  } catch (error) {
    next(error);
  }
};

export const getChat = async (req: any, res: Response, next: NextFunction) => {
  const { loggedInUserId } = req;
  const { contactId } = req.params;
  try {
    const loggedInUser = await User.findById(loggedInUserId);
    const contactUser = await User.findById(contactId);

    if (!loggedInUser || !contactUser) {
      throw new UserNotFoundError();
    }

    const chat = Message.find({ $and: [{ sender: loggedInUser._id }, {receiver}] });

    res
      .status(201)
      .json(
        sender.latestMessages.sort((user1, user2) =>
          dayjs(user1.message.updatedAt).isAfter(dayjs(user2.message.updatedAt))
            ? -1
            : 1
        )
      );
  } catch (error) {
    next(error);
  }
};
