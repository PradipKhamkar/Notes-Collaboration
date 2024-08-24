import { response, Response } from "express";

const sendResponse = (
  res: Response,
  statusCode = 200,
  data: {},
  message = ""
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export default sendResponse;
