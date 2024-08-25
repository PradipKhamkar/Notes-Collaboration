import { NextFunction, Request, Response } from "express";
import { isEmail, isEmpty, isJWT } from "validator";
import User from "../models/user.models";
import {
  createUser,
  findUserByEmail,
  findUserById,
  findUserByUserName,
  updateUserById,
} from "../services/user.service";
import ApiError from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncRequestHandler";
import jwt from "jsonwebtoken";

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
    await updateUserById(userId, { refreshToken: "" });
    response
      .status(200)
      .json(new ApiResponse(200, {}, "⚡ Logged out successfully!"));
  }
);

export const updateAccountDetails = asyncHandler(
  async (request: Request, response: Response) => {
    if (Object.keys(request.body).length === 0)
      throwError(400, "⚠️ No data provided.");
    /* @ts-ignore */
    const user = await findUserById(request.user._id);
    if (!user) throwError(404, "🚫 User not found.");
    const data = { ...request.body };
    delete data["_id"];
    delete data["refreshToken"];
    delete data["password"];

    /* @ts-ignore */
    await updateUserById(request?.user?._id, data);
    response
      .status(200)
      .json(new ApiResponse(200, {}, "🎉 User data updated successfully!"));
  }
);

export const updateUserPassword = asyncHandler(
  async (request: Request, response: Response) => {
    const { oldPassword, newPassword } = request.body;
    if ([oldPassword, newPassword].some((value) => isEmpty(value)))
      throwError(400, "🚫 All fields are required.");
    /* @ts-ignore */
    const user = await findUserById(request.user._id, "");
    if (!user) throwError(404, "🚫 User not found.");
    /* @ts-ignore */
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
    if (!isPasswordCorrect) throwError(400, "🔒 Invalid password");
    /* @ts-ignore */
    user.password = newPassword;
    /* @ts-ignore */
    await user.save();
    response
      .status(200)
      .json(new ApiResponse(200, {}, "🎉 Your password updated successfully!"));
  }
);

export const refreshAccessToken = asyncHandler(
  async (request: Request, response: Response) => {
    const { incomingRefreshToken } = request.body;
    if (!isJWT(incomingRefreshToken))
      throwError(401, "🚫 Invalid refresh token");
    try {
      const decodedToken = jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET || ""
      );
      /* @ts-ignore */
      const user = await findUserById(decodedToken._id);
      if (!user) throwError(404, "🚫 User not found");
      if (user?.refreshToken !== incomingRefreshToken)
        throwError(401, "🔒 Refresh token is expired");
      /* @ts-ignore */
      const accessToken = await user.generateAccessToken();
      /* @ts-ignore */
      const refreshToken = await user.generateRefreshToken();
      /* @ts-ignore */
      user.refreshToken = refreshToken;
      /* @ts-ignore */
      await user.save();
      response
        .status(200)
        .json(
          new ApiResponse(
            200,
            { refreshToken, accessToken },
            "🎉 Token refreshed successfully"
          )
        );
    } catch (error) {
      throwError(401, "🚫 Invalid refresh token");
    }
  }
);
