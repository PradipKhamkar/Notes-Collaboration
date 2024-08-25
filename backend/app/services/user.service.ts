import { IUSER } from "../models/types/types";
import User from "../models/user.models";

export const createUser = async (data: IUSER) => await User.create({ ...data });

export const findUserById = async (userId: string, select = "-password") =>
  await User.findById(userId).select(select);

export const findUserByEmail = async (email: string) =>
  await User.findOne({ email }).select("-password");

export const findUserByUserName = async (username: string) =>
  await User.findOne({ username }).select("-password -refreshToken");

export const updateUserById = async (userId: string, data: any) =>
  await User.findByIdAndUpdate(userId, data, { new: true });

// export const findUserByEmail = async (
//   username: string,
//   email: string
// ) => await User.findOne({ $or: [{ username }, { email }] });
