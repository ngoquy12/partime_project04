import React from "react";
import Navbar from "../../../components/common/user/navbar/Navbar";
import { Button } from "antd";

const Card: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 items-center justify-center p-8 max-h-screen overflow-auto">
        <div className="h-28 w-10/12 flex items-center justify-between rounded-md bg-slate-100">
          <img
            src="https://comvietnam.com/images/file/LqYBx6_j0AgBAKwT/am-thuc-viiet-nam-ca-chua-2.jpg"
            className="h-full w-60 object-cover object-center"
          />
          <div className="font-semibold text-xl">Cà chua</div>
          <div>
            <div className="flex items-center gap-2">
              <Button>+</Button>
              <span>10</span>
              <Button>-</Button>
            </div>
          </div>
          <div className="mr-5">
            <Button className="bg-red-500 text-white">Xóa</Button>
          </div>
        </div>
        <div className="h-28 w-10/12 flex items-center justify-between rounded-md bg-slate-100">
          <img
            src="https://comvietnam.com/images/file/LqYBx6_j0AgBAKwT/am-thuc-viiet-nam-ca-chua-2.jpg"
            className="h-full w-60 object-cover object-center"
          />
          <div className="font-semibold text-xl">Cà chua</div>
          <div>
            <div className="flex items-center gap-2">
              <Button>+</Button>
              <span>10</span>
              <Button>-</Button>
            </div>
          </div>
          <div className="mr-5">
            <Button className="bg-red-500 text-white">Xóa</Button>
          </div>
        </div>
        <div className="h-28 w-10/12 flex items-center justify-between rounded-md bg-slate-100">
          <img
            src="https://comvietnam.com/images/file/LqYBx6_j0AgBAKwT/am-thuc-viiet-nam-ca-chua-2.jpg"
            className="h-full w-60 object-cover object-center"
          />
          <div className="font-semibold text-xl">Cà chua</div>
          <div>
            <div className="flex items-center gap-2">
              <Button>+</Button>
              <span>10</span>
              <Button>-</Button>
            </div>
          </div>
          <div className="mr-5">
            <Button className="bg-red-500 text-white">Xóa</Button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-slate-200 h-16 flex justify-between w-full px-96 z-30 items-center">
        <div>Tổng tiền: 100000VND</div>
        <div>
          <Button type="primary">Thanh toán</Button>
        </div>
      </div>
    </>
  );
};

export default Card;
