import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  updateUser,
} from "../controllers/user.controller";
import accessTokenVerifier from "../middlewares/accessTokenVerifier";

const route = Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/logout", accessTokenVerifier, logoutUser);
route.put("/update", accessTokenVerifier, updateUser);

export default route;
