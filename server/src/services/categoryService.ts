import pool from "../utils/database";

export const findAll = async () => {
  return await pool.execute("CALL Proc_category_findAll()");
};
