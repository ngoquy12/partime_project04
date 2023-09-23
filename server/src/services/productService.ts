import pool from "../utils/database";

// Lấy thông tin tất cả sản phẩm
export const findAll = async () => {
  return await pool.execute("CALL Proc_product_findAll()");
};

// Thêm mới sản phẩm vào trong database
export const create = async (
  ProductName: string,
  CategoryId: number,
  Price: number,
  Descriptions: string,
  Image: string,
  Discount: number,
  CreatedDate: string,
  CreatedBy: string
) => {
  return pool.execute("CALL Pro_product_create(?,?,?,?,?,?,?,?)", [
    ProductName,
    CategoryId,
    Price,
    Descriptions,
    Image,
    Discount,
    CreatedDate,
    CreatedBy,
  ]);
};
