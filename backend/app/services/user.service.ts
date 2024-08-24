import User from "../models/user.models";

export const findUserById = async (userId: string) =>
  await User.findById(userId).select("-password");

export const findUserByEmail = async (email: string) =>
  await User.findOne({ email }).select("-password");

export const findUserByUserName = async (username: string) =>
  await User.findOne({ username }).select("-password");

export const updateUser = async (userId: string, data: any) =>
  await User.findByIdAndUpdate(userId, data);
