import mysql, { Pool, PoolOptions } from "mysql2/promise";

import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const dbConfig: PoolOptions = {
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
};

const pool: Pool = mysql.createPool(dbConfig);

export default pool;
