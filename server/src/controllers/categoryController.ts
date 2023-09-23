import { Request, Response } from "express";
import { handleError } from "../utils/errorMsg";
import * as categoryService from "../services/categoryService";

export const findAll = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.findAll();

    if (!Array.isArray(categories)) {
      throw new Error("Kiểu dữ liệu trả về không hợp lệ.");
    }

    // Trả về dữ liẹu
    return res.status(200).json({
      status: 200,
      categories: categories[0],
    });
  } catch (error) {
    handleError(res, error, 500);
  }
};
