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
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../../../services/categoryService";
import { store } from "../../../../firebase/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { RcFile } from "antd/es/upload";

const Form_Add_Product: React.FC<{ closeForm: any }> = ({ closeForm }) => {
  const disptch = useDispatch();
  const categories = useSelector((cat: any) => cat?.category?.data?.categories);
  const [selectedValue, setSelectedValue] = useState(null);
  const [urlDownload, setUrlDownload] = useState(null);

  console.log("urlDownload", urlDownload);

  const handleSelectChange = (value: any) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    disptch(getAllCategory());
  }, [disptch]);

  // Tạo một tham chiếu đến thư mục chứa tài nguyên trên firebase
  const imageRef = ref(store, "images/");

  const props: UploadProps = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      // lấy ra url của hình ảnh
      if (info.file.status === "done") {
        const downloadURL = info.file.response.url;
        // lưu trũ ảnh vào trong state
        setUrlDownload(downloadURL);
        // hiển thị thông báo upload ảnh thành công
        message.success("Tải ảnh lên thành công.");
      } else if (info.file.status === "error") {
        // hiển thị thông báo upload ảnh thất bại
        message.error("Tải ảnh lên thất bại.");
      }
    },
    customRequest: async ({ file, onSuccess, onError }) => {
      console.log("file", file);

      try {
        const rcFile = file as RcFile;

        // Tạo một tham chiếu đến firebase store
        const imgRef = ref(imageRef, rcFile.name);

        //Tải ảnh lên firebase
        await uploadBytes(imgRef, rcFile);

        // Lấy url về
        const downLoadURL = await getDownloadURL(imgRef);

        // Gọi onSucces khi thành công
        onSuccess?.({ url: downLoadURL });
      } catch (error: any) {
        onError?.(error);
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
              value={selectedValue}
              onChange={handleSelectChange}
              placeholder="Nhập từ khóa tìm kiếm"
              optionFilterProp="children"
              filterOption={(input, option) =>
                typeof option?.label === "string" &&
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                typeof optionA?.label === "string" &&
                typeof optionB?.label === "string"
                  ? optionA.label
                      .toLowerCase()
                      .localeCompare(optionB.label.toLowerCase())
                  : 0
              }
              options={categories.map((cat: any) => ({
                value: cat.CategoryId,
                label: cat.CategoryName,
              }))}
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
