import { Request, Response } from "express";
import * as authService from "../services/authService";

export const register = async (req: Request, res: Response) => {
  const {
    UserName,
    Gender,
    DateOfBirth,
    Email,
    Permission,
    Image,
    Passwords,
    CreatedDate,
    CreatedBy,
  } = req.body;
  try {
    await authService.register(
      UserName,
      Gender,
      DateOfBirth,
      Email,
      Permission,
      Image,
      Passwords,
      CreatedDate,
      CreatedBy
    );
    return res.status(201).json({
      status: 201,
      message: "Đăng ký tài khoản thành công.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { Email, Passwords } = req.body;
    const result = await authService.login(Email, Passwords);

    return res.status(200).json({
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};
