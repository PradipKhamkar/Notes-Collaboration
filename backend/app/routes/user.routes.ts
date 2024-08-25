import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  updateAccountDetails,
  updateUserPassword,
  refreshAccessToken,
} from "../controllers/user.controller";
import accessTokenVerifier from "../middlewares/accessTokenVerifier";

const route = Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/logout", accessTokenVerifier, logoutUser);
route.put("/update", accessTokenVerifier, updateAccountDetails);
route.put("/update-password", accessTokenVerifier, updateUserPassword);
route.get("/refresh-token", refreshAccessToken);

export default route;
