import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { resourceHeader } from "../../../../resources/resourceVN";
import {
  ShoppingCartOutlined,
  UserOutlined,
  KeyOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Modal } from "antd";

const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();
  // Lấy thông tin từ local
  const dataLocal = localStorage.getItem("userLogin");
  const userLogin = dataLocal ? JSON.parse(dataLocal) : null;

  console.log(userLogin);

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn có chắc chắn muốn đăng xuất?",
      okText: "Đăng xuất",

      cancelText: "Hủy",
      onOk: () => {
        // Xóa dữ liệu khởi local
        localStorage.removeItem("userLogin");
        // Chuyển hướng về trang home
        navigate("/");
      },
    });
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to="/profile">
          <UserOutlined className="mr-2" />
          {resourceHeader.information}
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/change-password">
          <KeyOutlined className="mr-2" />
          {resourceHeader.changePassword}
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <a onClick={handleLogout}>
          <LoginOutlined className="mr-2" />
          {resourceHeader.logout}
        </a>
      ),
      key: "3",
    },
  ];
  return (
    <>
      <div className="w-full px-4 h-14 bg-black text-white flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link to="/">{resourceHeader.homePage}</Link>
          <Link to="/list-product">{resourceHeader.product}</Link>
          <Link to="/cart">
            <div className="flex items-center">
              <ShoppingCartOutlined className="text-2xl flex items-center" />
              <span>2</span>
            </div>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/about">{resourceHeader.about}</Link>
          <Link to="/contact">{resourceHeader.contact}</Link>
          {/* Kiểm tra user đã đăng nhập?? */}
          {userLogin !== null ? (
            <>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="cursor-pointer flex items-center">
                    <img
                      className="rounded-full"
                      height={30}
                      width={30}
                      src={userLogin.image}
                      alt="Ảnh đại diện"
                    />
                    <span>{userLogin.userName}</span>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </>
          ) : (
            <>
              <Link to="/register">{resourceHeader.register}</Link>
              <Link to="/login">{resourceHeader.login}</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
