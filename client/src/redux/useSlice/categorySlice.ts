import { createSlice } from "@reduxjs/toolkit";
import { getAllCategory } from "../../services/categoryService";

const categorySlice = createSlice({
  name: "category",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    // pending, fulfilled, rejected
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.status = "Successfully";
        state.data = action.payload;
      })
      .addCase(getAllCategory.rejected, (state: any, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
