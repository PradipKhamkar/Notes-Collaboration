import { Schema, model } from "mongoose";
import { IFOLDER } from "./types/types";

const folderSchema = new Schema<IFOLDER>(
  {
    name: {
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
      default: null,
    },
  },
  { timestamps: true }
);

const Folder = model("folders", folderSchema);

export default Folder;
