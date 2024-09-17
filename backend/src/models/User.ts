import mongoose, { Document, Schema } from "mongoose";
import { IMessage } from "./Message";

export interface ILatestMessage {
  user: IUser["id"];
  message: IMessage["id"];
  messagesCount: number;
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  friends: IUser["id"][];
  latestMessages: ILatestMessage[];
}

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    friends: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    latestMessages: [
      {
        user: {
          type: Schema.Types.ObjectId,
          require: true,
        },
        message: {
          type: Schema.Types.ObjectId,
          require: true,
        },
        messagesCount: {
          type: Number,
          require: true,
        },
        _id: false
      },
    ],
  },
  { timestamps: {} }
);

export default mongoose.model<IUser>("User", UserSchema);
