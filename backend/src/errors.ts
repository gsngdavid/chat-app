import { CustomError } from "ts-custom-error";
import { IUser } from "./models/User";

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

export class MessageNotFoundError extends NotFoundError {
  public constructor() {
    super("Message not found!");
  }
}

export class UserExistsError extends CustomError {
  public code: number;
  public constructor(property: keyof IUser) {
    super(`User with that ${property} already exists`);
    this.code = 409;
  }
}

export class UnauthorizedError extends CustomError {
  public code: number;
  public constructor(message: string) {
    super(message);
    this.code = 401;
  }
}
