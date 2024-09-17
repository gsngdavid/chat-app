import mongoose, { Document, Schema } from "mongoose";

export interface IMessage extends Document {
  sender: Schema.Types.ObjectId;
  receiver: Schema.Types.ObjectId;
  isRead: boolean;
}

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: {} }
);

export default mongoose.model<IMessage>("Message", MessageSchema);
