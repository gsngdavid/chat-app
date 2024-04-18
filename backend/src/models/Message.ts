import mongoose, { Schema } from "mongoose";

export interface MessageDocument {
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

export default mongoose.model<MessageDocument>("Message", MessageSchema);
