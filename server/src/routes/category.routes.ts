import express from "express";
import { findAll } from "../controllers/categoryController";

const categoryRouter = express();
categoryRouter.get("/", findAll);

export default categoryRouter;
