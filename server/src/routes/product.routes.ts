import express from "express";
import { findAll, create } from "../controllers/productController";

const productRouter = express();
productRouter.get("/", findAll);
productRouter.post("/", create);

export default productRouter;
