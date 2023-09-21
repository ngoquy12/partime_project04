import pool from "../utils/database";

// Hàm lấy thông tin tất cả user
export const findAll = () => {
  // Lấy dữ liệu từ database
  return pool.execute("CALL Proc_user_findAll()");
};

// Hàm lấy thông tin một user theo id
export const findOne = (id: number) => {
  // Lấy dữ liệu từ database
  return pool.execute("CALL Proc_user_findOne(?)", [id]);
};

// Hàm xóa thông tin một user theo id
export const remove = (id: number) => {
  // Lấy dữ liệu từ database
  return pool.execute("CALL Proc_user_deleteById(?)", [id]);
};

// Tìm kiếm email trong database
export const findOneByEmail = (email: string) => {
  // Lấy dữ liệu từ database
  return pool.execute("CALL Proc_user_getOneByEmail(?)", [email]);
};
