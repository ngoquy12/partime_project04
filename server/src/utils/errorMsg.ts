import { Response } from "express";

export const handleError = (res: Response, error: any, statusCode: number) => {
  return res.status(statusCode).json({
    devMsg: error,
    status: statusCode,
  });
};
