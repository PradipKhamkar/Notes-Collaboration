import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  updateAccountDetails,
  updateUserPassword,
} from "../controllers/user.controller";
import accessTokenVerifier from "../middlewares/accessTokenVerifier";

const route = Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/logout", accessTokenVerifier, logoutUser);
route.put("/update", accessTokenVerifier, updateAccountDetails);
route.put("/update-password", accessTokenVerifier, updateUserPassword);

export default route;
