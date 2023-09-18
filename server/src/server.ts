import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
