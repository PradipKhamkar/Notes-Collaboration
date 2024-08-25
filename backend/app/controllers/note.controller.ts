import { NextFunction, Request, Response } from "express";
import { isEmpty } from "validator";
import ApiError from "../utils/ApiError";
import asyncHandler from "../utils/asyncRequestHandler";
import Note from "../models/note.models";
import { ApiResponse } from "../utils/ApiResponse";

const throwError = (statusCode: number, message: string) => {
  throw new ApiError(statusCode, message);
};

// TODO: ADD CONFIG
export const createNote = asyncHandler(
  async (req: Request, res: Response, _: NextFunction) => {
    let { title, data, folder, config } = req.body;
    /* @ts-ignore */
    const userId = req.user._id;
    if ([title, data].some((value) => isEmpty(value)))
      throwError(400, "📝 Title and data are required to create a note.");
    if (!folder) folder = "";
    const newNote = await Note.create({
      title,
      data,
      folder,
      created_by: userId,
    });
    if (!newNote)
      throwError(400, "⚠️ Something went wrong. Unable to create the note!");
    res
      .status(201)
      .json(new ApiResponse(201, newNote, "🎉 Note created successfully!"));
  }
);

export const updateNote = asyncHandler(
  async (req: Request, res: Response, _: NextFunction) => {
    const { noteId } = req.body;
    if (!noteId) throwError(400, "🆔 Note ID is required!");
    const note = await Note.findOne({ _id: noteId });
    if (!note) throwError(400, "🚫 Note not found. Please check the Note ID.");
    const data = { ...req.body };
    delete data["noteId"];
    if (Object.keys(data).length === 0) throwError(400, "⚠️ No data provided.");
    const updatedNote = await Note.findByIdAndUpdate(noteId, data, {
      new: true,
    });
    if (!updatedNote)
      throwError(500, "⚠️ Something went wrong. Unable to update the note!");
    res
      .status(200)
      .json(new ApiResponse(200, updatedNote, "🎉 Note updated successfully!"));
  }
);

export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
  const { noteId } = req.body;
  if (!noteId) throwError(400, "🆔 Note ID is required!");
  const note = await Note.findById(noteId);
  if (!note) throwError(400, "🚫 Invalid Note ID.");
  await Note.findByIdAndDelete(noteId);
  res
    .status(200)
    .json(new ApiResponse(200, {}, "🗑️ Note deleted successfully!"));
});
