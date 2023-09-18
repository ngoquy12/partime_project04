import React, { useState } from "react";
import { Input, Button } from "antd";
import { resourceHeader } from "../../../resources/resourceVN";
import { Link } from "react-router-dom";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth, provider } from "../../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login: React.FC<{}> = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  // Hàm đăng nhập với google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        const userLogin = {
          email: response.user.email,
          userName: response.user.displayName,
          userId: response.user.uid,
          image: response.user.photoURL,
        };

        // Lưu dữ liệu lên local
        localStorage.setItem("userLogin", JSON.stringify(userLogin));
        // Chuyển hướng về trang home
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  // Hàm đăng nhập với Facebook
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // Hàm xử lý dữ liệu đầu vào
  const validate = (name: string, value: string) => {
    switch (name) {
      case "email":
        if (!value) {
          setEmailError("Email không được để trống.");
        } else {
          setEmailError("");
        }
        break;
      case "password":
        if (!value) {
          setPasswordError("Mật khẩu không được để trống.");
        } else {
          setPasswordError("");
        }
        break;
      default:
        break;
    }
  };

  // Hàm lấy giá trị từ các ô input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const name: string = e.target.name;
    validate(name, value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Login khi nhấn vào nút đăng nhập
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate("email", user.email);
    validate("password", user.password);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form className="border p-7 rounded shadow-md" onSubmit={handleLogin}>
          <div className="flex justify-center">
            <Link to="/">
              <img
                className="rounded-full h-16 w-16"
                src="https://thietkelogo.vn/wp-content/uploads/2017/11/111.jpg"
                alt=""
              />
            </Link>
          </div>
          <h3 className="text-center p-3 text-2xl font-semibold">
            Đăng nhập tài khoản
          </h3>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <Input
              onChange={handleChange}
              status={emailError ? "error" : ""}
              onBlur={handleChange}
              name="email"
              id="email"
              placeholder="Nhập địa chỉ email"
              className="mt-2 mb-1"
            />
            {emailError ? (
              <span className="text-red-500 mt-2 text-sm">{emailError}</span>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Mật khẩu</label>
            <Input.Password
              id="password"
              status={passwordError ? "error" : ""}
              onChange={handleChange}
              onBlur={handleChange}
              name="password"
              className="mt-2 mb-1"
              placeholder="Nhập mật khẩu"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            {passwordError ? (
              <span className="text-red-500 mt-2 text-sm">{passwordError}</span>
            ) : (
              ""
            )}
          </div>
          <div className="text-end mb-3">
            <Link to="/" className="text-[#1677ff]">
              Quên mật khẩu
            </Link>
          </div>
          <div className="mb-3">
            <Button
              htmlType="submit"
              className="q-btn-primary w-full"
              type="primary"
            >
              Đăng nhập
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="border w-2/5"></div>
            <div>Hoặc</div>
            <div className="border w-2/5"></div>
          </div>
          <div className="mt-3 flex gap-3 btn-login-container">
            <Button
              onClick={signInWithGoogle}
              className="flex items-center gap-2 btn-login-google"
            >
              <img
                width={25}
                height={25}
                src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png"
                alt=""
              />
              Đăng nhập với Google
            </Button>
            <Button
              onClick={signInWithFacebook}
              className="flex items-center gap-2 btn-login-facebook "
            >
              <img
                width={25}
                height={25}
                src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                alt=""
              />
              Đăng nhập với Facebook
            </Button>
          </div>
          <div className="mt-3 text-center">
            <div>
              Bạn đã có tài khoản?{" "}
              <Link className="text-[#1677ff]" to="/register">
                {resourceHeader.register}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
