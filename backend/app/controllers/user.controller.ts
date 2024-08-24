import { Request, Response } from "express";
import {
  createUser,
  findUserByEmail,
  findUserByEmailAndEmail,
  findUserByUserName,
} from "../services/user.service";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/sendError";
import { ApiResponse } from "../utils/sendResponse";

export const registerUser = asyncHandler(
  async (request: Request, response: Response) => {
    const { username, email, password } = request.body;
    if (
      [username, email, password].some((value) => value?.trim()?.length == 0)
    ) {
      throw new ApiError(400, "All fields are required");
    }

    if (!email?.includes("@")) throw new ApiError(400, "invaild email!");
    const existedUser = await findUserByEmailAndEmail(username, email);

    if (existedUser) {
      throw new ApiError(409, "User with email or username already exists");
    }

    const user = await findUserByEmail(email);
    if (!user)
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );

    return response
      .status(201)
      .json(new ApiResponse(200, user, "User registered Successfully"));
  }
);
