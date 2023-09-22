import {
  CaretDownOutlined,
  KeyOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const Header: React.FC<{}> = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <Link to="/profile" className="flex items-center gap-2">
          <UserOutlined />
          Thông tin cá nhân
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/profile" className="flex items-center gap-2">
          <KeyOutlined />
          Đổi mật khẩu
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to="/profile" className="flex items-center gap-2">
          <LogoutOutlined />
          Đăng xuất
        </Link>
      ),
      key: "3",
    },
  ];
  return (
    <>
      <div className="min-w-full justify-between flex items-center px-5 h-16 shadow">
        <UnorderedListOutlined />
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()} className="flex gap-2">
            <img
              className="rounded-full h-10"
              src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
              alt=""
            />
            <Space>
              Ngọ Văn Quý
              <CaretDownOutlined className="cursor-pointer" />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default Header;
