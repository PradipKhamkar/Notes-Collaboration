import { NextFunction, Request, Response } from "express";
import { isEmail, isEmpty } from "validator";
import {
  createUser,
  findUserByEmail,
  findUserByUserName,
} from "../services/user.service";
import ApiError from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncRequestHandler";

const throwError = (status: number, message: string) => {
  throw new ApiError(status, message);
};

export const registerUser = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { username, password, email } = request.body;
    console.log("request", request);
    if ([username, password, email].some((value) => isEmpty(value || "")))
      throwError(400, "🚫 All fields are required");
    if (password.length < 6)
      throwError(
        400,
        "🔒 Password too short. It must be at least 6 characters long."
      );
    if (!isEmail(email)) throwError(400, "✉️ Invalid email format.");
    const isEmailExit = await findUserByEmail(email);
    const isUserNameExit = await findUserByUserName(username);
    if (isEmailExit) throwError(400, "🔄 The email address is already in use.");
    if (isUserNameExit) throwError(400, "🙋‍♂️ The username is already in use.");

    // TODO: ADD CLOUDNARY
    const newUser = await createUser({
      username,
      password,
      email,
      refresh_token: "",
      avatar: { public_id: "", url: "" },
    });
    if (!newUser)
      throwError(500, "⚠️ Failed to create user. Something went wrong");
    response.status(201).json(
      new ApiResponse(
        200,
        {
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          avatar: newUser.avatar,
        },
        "🎉 User registered successfully! Welcome aboard."
      )
    );
  }
);
