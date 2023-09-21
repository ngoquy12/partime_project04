import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoute from "./routes/user.routes";
import authRouter from "./routes/auth.routes";

const app = express();
const port = 8000;
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
