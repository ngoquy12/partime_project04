import { Request, Response } from "express";
import { handleError } from "../utils/errorMsg";
import * as productService from "../services/productService";

// Lấy thông tin tất cả sản phẩm
export const findAll = async (req: Request, res: Response) => {
  try {
    // Lấy dữ liệu ở service
    const [products] = await productService.findAll();

    if (!Array.isArray(products)) {
      throw new Error("Kiểu dữ liệu trả về không hợp lệ.");
    }
    return res.status(200).json({
      status: 200,
      products: products[0],
    });
  } catch (error: any) {
    handleError(res, error, 500);
  }
};

// Thêm mới sản phẩm
export const create = async (req: Request, res: Response) => {
  try {
    // lấy dữ liệu từ client
    const {
      ProductName,
      CategoryId,
      Price,
      Descriptions,
      Image,
      Discount,
      CreatedDate,
      CreatedBy,
    } = req.body;

    // Gửi dữ liệu lên service đê xử lý
    await productService.create(
      ProductName,
      CategoryId,
      Price,
      Descriptions,
      Image,
      Discount,
      CreatedDate,
      CreatedBy
    );
    return res.status(201).json({
      status: 201,
      message: "Thêm mới sản phẩm thành công.",
    });
  } catch (error: any) {
    handleError(res, error, 500);
  }
};
