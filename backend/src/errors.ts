import { CustomError } from "ts-custom-error";
import User, { UserDocument } from "./models/User";

export class NotFoundError extends CustomError {
  public code: number;
  public constructor(message?: string) {
    super(message);
    this.code = 404;
  }
}

export class UserNotFoundError extends NotFoundError {
  public constructor() {
    super("User not found!");
  }
}

const user = new User();

export class UserExistsError extends CustomError {
  public code: number;
  public constructor(property: keyof UserDocument) {
    super(`User with that ${property} already exists`);
    this.code = 409;
  }
}
