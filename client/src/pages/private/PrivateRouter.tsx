import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/common/admin/sidebar/Sidebar";
import Header from "../../components/common/admin/header/Header";

const PrivateRouter: React.FC<{}> = () => {
  const isLogin: boolean = true;
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          {isLogin ? <Outlet /> : <Navigate to={"/login"} />}
        </div>
      </div>
    </>
  );
};

export default PrivateRouter;
