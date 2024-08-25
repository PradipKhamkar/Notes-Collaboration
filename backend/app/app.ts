import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import userRoute from "./routes/user.routes";
import noteRoute from "./routes/note.routes";

app.use("/api/v1/user", userRoute);
app.use("/api/v1/note", noteRoute);

export default app;
