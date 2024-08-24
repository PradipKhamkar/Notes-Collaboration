import { Response } from "express";

const sendError = (
  res: Response,
  statusCode: number,
  message = "Somethings is wrong",
  data = {}
) => {
  res.status(statusCode).json({
    message,
    data,
    success: false,
  });
};

export default sendError;
