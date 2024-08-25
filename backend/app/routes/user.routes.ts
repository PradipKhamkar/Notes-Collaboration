import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller";

const route = Router();

route.post("/register", registerUser);
route.post("/login", loginUser);

export default route;
