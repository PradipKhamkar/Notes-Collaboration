import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/user.controller";
import accessTokenVerifier from "../middlewares/accessTokenVerifier";

const route = Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/logout", accessTokenVerifier, logoutUser);

export default route;
