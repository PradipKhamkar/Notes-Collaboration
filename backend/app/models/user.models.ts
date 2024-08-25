import { model, Schema } from "mongoose";
import { IAVATAR, IUSER } from "./types/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema<IUSER>(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "username required"],
      lowercase: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password required"],
      minlength: [6, "invaild password"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "email required!"],
      loadClass: true,
      index: true,
    },
    avatar: new Schema<IAVATAR>({ public_id: String, url: String }),
    created_at: {
      type: Date,
      default: new Date(Date.now()),
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET || "",
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.REFRESH_TOKEN_SECRET || "",
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

const User = model("user", userSchema);
export default User;
