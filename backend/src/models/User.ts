import mongoose, { Schema } from "mongoose";

export interface UserDocument {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  friends: [Schema.Types.ObjectId]
}

const UserSchema = new mongoose.Schema({
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
});

export default mongoose.model<UserDocument>("User", UserSchema);
