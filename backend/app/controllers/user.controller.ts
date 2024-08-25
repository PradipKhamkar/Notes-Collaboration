import { NextFunction, Request, Response } from "express";
import { isEmail, isEmpty } from "validator";
import User from "../models/user.models";
import {
  createUser,
  findUserByEmail,
  findUserById,
  findUserByUserName,
  updateUser,
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
      refreshToken: "",
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

//FIXME: TYPE ERROR
export const loginUser = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { username, password } = request.body;
    if ([username, password].some((value) => isEmpty(value))) {
      throwError(400, "🚫 All fields are required");
    }
    const user: any = await User.findOne({
      $or: [{ username }, { email: username }],
    });

    if (!user)
      throwError(401, "❌ Invalid credentials. Please check your username");
    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect)
      throwError(401, "🔑 Incorrect password. Please try again.");

    const refreshToken = await user.generateRefreshToken();
    const accessToken = await user.generateAccessToken();
    user.refreshToken = refreshToken;
    await user.save();

    const loggedUser = await User.findOne({
      $or: [{ username }, { email: username }],
    }).select("-password -refreshToken");

    response.status(200).json(
      new ApiResponse(
        200,
        {
          loggedUser,
          accessToken,
          refreshToken,
        },
        "🎉 Logged in successfully!"
      )
    );
  }
);

//FIXME: TYPE ERROR
export const logoutUser = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    /* @ts-ignore */
    const userId = request.user._id;
    await updateUser(userId, { refreshToken: "" });
    response
      .status(200)
      .json(new ApiResponse(200, {}, "⚡ Logged out successfully!"));
  }
);
