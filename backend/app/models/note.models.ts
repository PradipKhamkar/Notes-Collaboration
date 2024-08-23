import { Schema, model } from "mongoose";
import { INOTE, INOTECONFIG } from "./types/types";

const noteSchema = new Schema<INOTE>(
  {
    title: {
      type: String,
      required: [true, "title required"],
      trim: true,
      lowercase: true,
      index: true,
    },
    data: {
      type: String,
      required: [true, "data required"],
      trim: true,
      lowercase: true,
    },
    config: {
      type: Object,
      default: {
        theme: {
          color: "",
          url: "",
        },
      },
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    folder: {
      type: Schema.Types.ObjectId,
      ref: "folders",
    },
    pin_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Note = model("note", noteSchema);

export default Note;
