import { IUSER } from "../models/types/types";
import User from "../models/user.models";

export const createUser = async (data: IUSER) => await User.create({ ...data });

export const findUserById = async (userId: string) =>
  await User.findById(userId).select("-password");

export const findUserByEmail = async (email: string) =>
  await User.findOne({ email }).select("-password");

export const findUserByUserName = async (username: string) =>
  await User.findOne({ username }).select("-password");

export const updateUser = async (userId: string, data: IUSER) =>
  await User.findByIdAndUpdate(userId, data);

// export const findUserByEmail = async (
//   username: string,
//   email: string
// ) => await User.findOne({ $or: [{ username }, { email }] });
