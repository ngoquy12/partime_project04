import bcrypt from "bcrypt";
import pool from "../utils/database";
import * as userService from "../services/userService";
import jwt from "jsonwebtoken";

export const register = async (
  UserName: string,
  Gender: number,
  DateOfBirth: string,
  Email: string,
  Permission: number,
  Image: string,
  Passwords: string,
  CreatedDate: string,
  CreatedBy: string
) => {
  let salt = bcrypt.genSaltSync(10);

  let hashPassword = bcrypt.hashSync(Passwords, salt);
  return await pool.execute("CALL Proc_user_create(?,?,?,?,?,?,?,?,?)", [
    UserName,
    Gender,
    DateOfBirth,
    Email,
    Permission,
    Image,
    hashPassword,
    CreatedDate,
    CreatedBy,
  ]);
};

export const login = async (email: string, password: string) => {
  try {
    const [findUser]: any = await userService.findOneByEmail(email);
    const [user] = await findUser;

    if (user.length === 0) {
      return {
        status: 400,
        message: "Email không đúng",
      };
    } else {
      const hashPassword = await user[0].Passwords;
      // So sánh mật khẩu mã hóa với mật khẩu lấy lên
      const compare = await bcrypt.compareSync(password, hashPassword);
      // Kiem tra dieu kien
      if (!compare) {
        return {
          status: 400,
          message: "Mật khẩu không đúng.",
        };
      } else {
        const token = jwt.sign(
          {
            userId: user[0].UserId,
            permisson: user[0].Permission,
          },
          process.env.TOKEN_KEY as string,
          { expiresIn: 24000 }
        );

        return {
          status: 200,
          message: "Đăng nhập thành công.",
          token,
          data: user[0],
        };
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
};
