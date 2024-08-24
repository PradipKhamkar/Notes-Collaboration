import { Schema, model } from "mongoose";
import { IFOLDER } from "./types/types";

const folderSchema = new Schema<IFOLDER>(
  {
    title: {
      type: String,
      required: [true, "title required"],
      trim: true,
    },
    config: {
      type: Object,
      default: {
        icon: "",
      },
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    pin_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Folder = model("folders", folderSchema);

export default Folder;
