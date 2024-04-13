import mongoose, { Document } from "mongoose";

export interface UserDocument {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
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
});

export default mongoose.model<UserDocument>("User", UserSchema);
