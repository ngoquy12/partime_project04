import express from "express";
import { findAll, findOne, remove } from "../controllers/userController";

const userRoute = express.Router();

// API lấy thông tin tất cả user
userRoute.get("/", findAll);
userRoute.get("/:id", findOne);
userRoute.delete("/:id", remove);

export default userRoute;
