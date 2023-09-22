import { UnorderedListOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar: React.FC<{}> = () => {
  return (
    <div className="w-64 h-screen bg-black text-white">
      <ul className="flex flex-col" id="sidebar-container">
        <div className="h-16 flex justify-between px-4 py-4 items-center gap-2">
          <UnorderedListOutlined className="cursor-pointer hover:bg-slate-300 p-2 rounded-full" />
          <span className="text-lg font-bold">QUẢN TRỊ VIÊN</span>
        </div>
        <NavLink className="px-4 py-3 hover:bg-slate-900" to="home">
          Tổng quan
        </NavLink>
        <NavLink className="px-4 py-3 hover:bg-slate-900" to="manager-user">
          Quản lý tài khoản
        </NavLink>
        <NavLink className="px-4 py-3 hover:bg-slate-900" to="manager-product">
          Quản lý sản phẩm
        </NavLink>
        <NavLink className="px-4 py-3 hover:bg-slate-900" to="manager-category">
          Quản lý danh mục
        </NavLink>
        <NavLink className="px-4 py-3 hover:bg-slate-900" to="manager-order">
          Quản lý đơn hàng
        </NavLink>
        <NavLink className="px-4 py-3 hover:bg-slate-900" to="manager-revenue">
          Quản lý doanh thu
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
