import { Request, Response } from "express";
import * as userService from "../services/userService";

export const checkEmailExits = async (
  req: Request,
  res: Response,
  next: any
) => {
  const email: string = req.body.Email;
  try {
    const [result]: any = await userService.findOneByEmail(email);

    if (result[0].length > 0) {
      return res.status(400).json({
        status: 400,
        message: "Email đã tồn tại",
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};
