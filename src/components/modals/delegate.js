import { Button, Form, Modal, Input, InputNumber, Select } from "antd";
import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import AsyncSelect from "react-select/async";
import "react-quill/dist/quill.snow.css";
import ImageCropper from "./imageCropper";
// import eventImage from '../../images/d6055f8b-868b-9a28-1d6b-89e529a579cf_Asset_2@2x.png.png'

export default function DelgateModal({ title }) {
  const { Option } = Select;

  const imageCropperRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [cropper, setCropper] = useState(false);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [delegateForm] = Form.useForm();
  const [value, setValue] = useState("");
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    delegateForm.resetFields();
    setOpen(false);
    setOpenAddModal(false);
  };

  const showAddModal = () => {
    setOpen(false);
    setOpenAddModal(true);
  };

  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    if (!(keyCode >= 48 && keyCode <= 57)) {
      event.preventDefault();
    }
  };

  const showCropperModal = (e) => {
    setCropper(true);
    //
    console.log(cropper);
    e.stopPropagation();
  };

  const closeCropperModal = (e) => {
    e.stopPropagation();

    setCropper(false);
    setImage(null);
    // if (imageCropperRef.current?.cropper){
    //     const cropper = imageCropperRef.current?.cropper
    //     cropper.destroy()
    // }
  };

  const getCroppedImage = (e) => {
    if (typeof imageCropperRef.current?.cropper !== "undefined") {
      const cropper = imageCropperRef.current?.cropper;
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      setCropper(false);
      setImage(null);
    } else {
      console.log("cropper is undefined");
    }
    e.stopPropagation();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add {title}
      </Button>
      <Modal
        open={open}
        title={title}
        width={450}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            submit
          </Button>,
        ]}
      >
        <div style={{ marginTop: "20px" }}>
          <AsyncSelect />
        </div>
        {/* <hr /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            marginTop: "10px",
          }}
        >
          <h3>or</h3>
          <Button key="submit" type="primary" onClick={showAddModal}>
            New {title}
          </Button>
        </div>
      </Modal>

      <Modal
        // open={open}
        title={title}
        width={450}
        open={openAddModal}
        onCancel={handleCancel}
        centered={true}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid gainsboro",
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            cursor: "pointer",
          }}
          onClick={showCropperModal}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={croppedImage ? croppedImage : ""}
          ></img>
          <ImageCropper
            ref={imageCropperRef}
            image={image}
            setImage={setImage}
            showModal={cropper}
            onHandleSave={getCroppedImage}
            handleCloseModal={closeCropperModal}
          />
        </div>
        <Form
          layout="vertical"
          form={delegateForm}
          style={{ marginTop: "10px" }}
        >
          <Form.Item
            label="Company Name"
            name="company name"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
          >
            <Input placeholder="Valiant Business Media" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="Address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input placeholder="New York, USA" />
          </Form.Item>
          <Form.Item
            label="Url"
            name="url"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
          >
            <Input placeholder="https://valiantbmedia.com" />
          </Form.Item>
          <Form.Item
            label="Priority"
            name="priority"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
          >
            <InputNumber defaultValue={0} min={0} onKeyPress={handleKeyPress} />
          </Form.Item>
          <Form.Item
            label="Type"
            name="Type"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
          >
            <Select placeholder="Select type" allowClear>
              <Option value="male">Standard</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Status" name="status">
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </Form.Item>
          <Form.Item label="Contact Name" name="contact name">
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item label="Contact Title" name="contact title">
            <Input placeholder="CEO, MD.." />
          </Form.Item>
          <Form.Item label="Contact Email" name="contact email">
            <Input placeholder="johndoe@valiantbmedia.com" />
          </Form.Item>
        </Form>
      </Modal>

      {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
    </>
  );
}
