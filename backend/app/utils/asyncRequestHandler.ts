import { NextFunction, Request, Response, ErrorRequestHandler } from "express";

const asyncHandler =
  (requestHandler: Function) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await requestHandler(req, res, next);
    } catch (error: any) {
      res.status(error?.statusCode || 500).json({
        success: false,
        message: error?.message,
      });
    }
  };

export default asyncHandler;
