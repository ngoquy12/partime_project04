import {
  CaretDownOutlined,
  RedoOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
const { Search } = Input;
import Form_Add_Product from "../../../components/admin/form/add-product";

const Manager_Product: React.FC<{}> = () => {
  const [showFormAdd, setShowFormAdd] = useState(false);

  const showForm = (): any => {
    setShowFormAdd(true);
  };

  const closeForm = (): any => {
    setShowFormAdd(false);
  };

  return (
    <>
      {showFormAdd && <Form_Add_Product closeForm={closeForm} />}
      <div className="p-6  h-full">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">Quản lý sản phẩm</div>
          <div>
            <Button onClick={showForm} type="primary">
              Thêm mới sản phẩm
            </Button>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <div className="flex items-center gap-2">
            <Search
              placeholder="Nhập từ khóa tìm kiếm"
              style={{ width: 300 }}
            />
            <RedoOutlined className="text-gray-800 text-xl cursor-pointer hover:text-gray-600" />
          </div>
        </div>
        <div className="mt-3 w-full">
          <table className="table-auto border w-full">
            <thead className="bg-slate-200 px-4 py-4">
              <th className="px-4 py-4 border-r">Tên sản phẩm</th>
              <th className="px-4 py-4 border-r">Hình ảnh</th>
              <th className="px-4 py-4 border-r">Giá</th>
              <th className="px-4 py-4 border-r">Danh mục sản phẩm</th>
              <th className="px-4 py-4 border-r">Giảm giá</th>
              <th className="px-4 py-4 border-r">Chi tiết sản phẩm</th>
              <th className="px-4 py-4 border-r">Ngày thêm</th>
              <th className="px-4 py-4 border-r" colSpan={2}>
                Hành động
              </th>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 border-r">Rau xanh</td>
                <td className="px-4 py-3 border-r">Rau xanh</td>
                <td className="px-4 py-3 border-r">Rau xanh</td>
                <td className="px-4 py-3 border-r">Rau xanh</td>
                <td className="px-4 py-3 border-r">Rau xanh</td>
                <td className="px-4 py-3 border-r">Rau xanh</td>
                <td className="px-4 py-3 border-r">Rau xanh</td>
                <td className="px-4">
                  <Button>Sửa</Button>
                </td>
                <td>
                  <Button>Xóa</Button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="py-3 flex justify-between">
            <div>Hiển thị 100 bản ghi</div>
            <div className="flex items-center gap-5">
              <div className="flex relative">
                <Input
                  className="bg-white"
                  placeholder="Hiẻn thị 10 bản ghi"
                  readOnly
                />
                <CaretDownOutlined className="absolute top-0 right-0 bottom-0 px-2 cursor-pointer text-gray-500 hover:bg-slate-300" />
              </div>
              <div className="flex gap-3">
                <span>Trước</span>
                <span className="border px-1 font-bold">1</span>
                <span className="">1</span>
                <span className="">...</span>
                <span className="">1</span>
                <span>Sau</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager_Product;
