import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import userRoute from "./routes/user.routes";

app.use("/api/v1/user", userRoute);
export default app;
