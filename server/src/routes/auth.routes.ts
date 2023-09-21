import express from "express";
import { login, register } from "../controllers/authController";
import { checkEmailExits } from "../middlewares/userMiddleware";

const authRouter = express.Router();
authRouter.post("/register", checkEmailExits, register);
authRouter.post("/login", login);

export default authRouter;
