import { Router } from "express";
import {
  createFolder,
  deleteFolder,
  updateFolder,
} from "../controllers/folder.controller";
import accessTokenVerifier from "../middlewares/accessTokenVerifier";

const route = Router();

route.post("/create", accessTokenVerifier, createFolder);
route.put("/update", accessTokenVerifier, updateFolder);
route.delete("/delete", accessTokenVerifier, deleteFolder);

export default route;
