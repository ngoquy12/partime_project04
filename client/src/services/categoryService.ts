import instance from "../api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Lấy thông tin tất cả danh mục
export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    const response = await instance.get("categories");
    return response.data;
  }
);
