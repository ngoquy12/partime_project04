import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  InputNumber,
  Select,
  Upload,
  UploadProps,
  message,
} from "antd";
const { TextArea } = Input;
import React from "react";

const Form_Add_Product: React.FC<{ closeForm: any }> = ({ closeForm }) => {
  const props: UploadProps = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <div className="z-50 flex items-center justify-center bg-rgba-05 fixed top-0 left-0 right-0 bottom-0">
        <form className="w-1/3 bg-white p-4 rounded">
          <div className="flex justify-between items-center py-4">
            <h3 className="font-semibold text-xl">Thêm mới sản phẩm</h3>
            <CloseOutlined
              className="cursor-pointer hover:bg-slate-400 p-2 rounded-full"
              onClick={closeForm}
            />
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="">Tên sản phẩm</label>
            <Input placeholder="Nhập tên sản phẩm" />
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="">Danh mục</label>
            <Select
              className="w-full"
              showSearch
              placeholder="Nhập từ khóa tìm kiếm"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="">Giá</label>
            <InputNumber defaultValue={1} className="w-full" />
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="">Hình ảnh</label>
            <div className="flex justify-center items-center gap-16">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Tải lên hình ảnh</Button>
              </Upload>
              <img src="" className="w-12 h-12 rounded-full " alt="" />
            </div>
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="">Khuyến mãi</label>
            <InputNumber defaultValue={1} className="w-full" />
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="">Chi tiết sản phẩm</label>
            <TextArea rows={4} placeholder="Nhập chi thông tin sản phẩm" />
          </div>
          <div className="flex justify-end gap-3">
            <Button onClick={closeForm}>Hủy</Button>
            <Button type="primary">Lưu</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form_Add_Product;
