import { Except } from "type-fest";
import { MessageNotFoundError } from "../errors";
import Message from "../models/Message";
import { ILatestMessage } from "../models/User";

export const updateLatestMessagesHandler = async (
  currentMessages: ILatestMessage[],
  { user, message }: Except<ILatestMessage, "messagesCount">
) => {
  const updatedMessages = currentMessages;
  const messageIndex = currentMessages.findIndex(
    (message) => message.user.toString() === user
  );
  const oldMessage = updatedMessages[messageIndex];

  if (messageIndex !== -1) {
    const actualMessage = await Message.findById(oldMessage.message);

    if (!actualMessage) {
      throw new MessageNotFoundError();
    }

    let unReadMessages = 1;

    if (!actualMessage.isRead) unReadMessages = oldMessage.messagesCount + 1;

    updatedMessages[messageIndex] = {
      user,
      message,
      messagesCount: unReadMessages,
    };
    return updatedMessages;
  }

  updatedMessages.push({ user, message, messagesCount: 1 });

  return updatedMessages;
};
