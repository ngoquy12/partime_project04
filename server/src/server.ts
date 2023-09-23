import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
import productRouter from "./routes/product.routes";
import categoryRouter from "./routes/category.routes";

const app = express();
const port = 8000;
dotenv.config();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
