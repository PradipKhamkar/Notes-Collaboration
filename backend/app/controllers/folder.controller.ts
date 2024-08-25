import { Request, Response } from "express";
import { isEmpty } from "validator";
import Folder from "../models/folder.models";
import ApiError from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/asyncRequestHandler";

const throwError = (statusCode: number, message: string) => {
  throw new ApiError(statusCode, message);
};

export const createFolder = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, config } = req.body;
    if (isEmpty(name)) throwError(400, "Folder name required!");
    const newFolder = await Folder.create(name);
    if (!newFolder) throwError(400, "somering");
    res
      .status(201)
      .json(new ApiResponse(201, newFolder, "folder created successfully"));
  }
);

export const updateFolder = asyncHandler(
  async (req: Request, res: Response) => {
    const { folderId } = req.body;
    if (!folderId) throwError(400, "folder id required!");
    const folder = Folder.findById(folderId);
    if (!folder) throwError(400, "invalid folder id");
    const data = { ...req.body };
    delete data["folderId"];
    const updatedFolder = await Folder.findByIdAndUpdate(folderId);
    if (!updatedFolder)
      throwError(500, "⚠️ Something went wrong. Unable to update the folder!");
    res
      .status(200)
      .json(
        new ApiResponse(200, updatedFolder, "🎉 Folder updated successfully!")
      );
  }
);

export const deleteFolder = asyncHandler(
  async (req: Request, res: Response) => {
    const { folderId } = req.body;
    if (!folderId) throwError(400, "🆔 Folder ID is required!");
    const folder = await Folder.findById(folderId);
    if (!folder) throwError(400, "🚫 Invalid Folder ID.");
    await Folder.findByIdAndDelete(folderId);
    res
      .status(200)
      .json(new ApiResponse(200, {}, "🗑️ Folder deleted successfully!"));
  }
);
