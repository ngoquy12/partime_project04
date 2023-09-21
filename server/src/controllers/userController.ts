import { Request, Response } from "express";
import * as userService from "../services/userService";

interface DeleteResult {
  affectedRows: number;
  changedRows: number;
  insertId: number;
  // Add other properties as needed
}
// Lấy thông tin tất cả user
export const findAll = async (req: Request, res: Response) => {
  try {
    // lấy dữ liệu trong tầng service
    const [users] = await userService.findAll();

    if (!Array.isArray(users)) {
      throw new Error("Dữ liệu trả về không hợp lệ.");
    }

    return res.status(200).json({
      status: 200,
      users: users[0],
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

// Lấy thông tin một user theo id
export const findOne = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  try {
    // lấy dữ liệu trong tầng service
    const [users] = await userService.findOne(id);

    if (!Array.isArray(users)) {
      throw new Error("Dữ liệu trả về không hợp lệ.");
    }

    return res.status(200).json({
      status: 200,
      user: users[0],
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

// Lấy thông tin một user theo id
export const remove = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  try {
    // lấy dữ liệu trong tầng service
    await userService.remove(id);

    return res.status(200).json({
      status: 200,
      message: "Xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};
