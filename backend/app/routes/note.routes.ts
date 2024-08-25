import { Router } from "express";
import {
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/note.controller";
import accessTokenVerifier from "../middlewares/accessTokenVerifier";

const route = Router();

route.post("/create", accessTokenVerifier, createNote);
route.put("/update", accessTokenVerifier, updateNote);
route.delete("/delete", accessTokenVerifier, deleteNote);

export default route;
