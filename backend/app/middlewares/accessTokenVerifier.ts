import ApiError from "../utils/ApiError";
import asyncHandler from "../utils/asyncRequestHandler";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { findUserById } from "../services/user.service";
import { isJWT } from "validator";

const accessTokenVerifier = asyncHandler(
  async (request: Request, _: Response, next: NextFunction) => {
    try {
      /* @ts-ignore */
      const accessToken = request.headers["authorization"] || "";
      if (!isJWT(accessToken))
        throw new ApiError(403, "⛔ Missing valid authorization token!");
      const verifiedUser: any = jwt.verify(
        accessToken || "",
        process.env.ACCESS_TOKEN_SECRET || ""
      );
      const user = await findUserById(verifiedUser?._id);
      if (!user) throw new ApiError(403, "🔑 Invalid authorization token!");
      /* @ts-ignore */
      request.user = user;
      next();
    } catch (error) {
      throw new ApiError(403, "🚫 Unauthorized access. Invalid token!");
    }
  }
);

export default accessTokenVerifier;
