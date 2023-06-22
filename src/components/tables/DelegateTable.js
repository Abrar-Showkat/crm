import { Table, Space } from "antd";
import { useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Delete from "../modals/Delete";

export default function DelegateTable({ title, data }) {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };
  const openModal = () => {
    setOpen(true);
  };
  const columns =
    title === "media-partners"
      ? [
          {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => (
              <img
                src={image}
                alt="delegate"
                style={{ width: "30px", backgroundColor: "red" }}
              />
            ),
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Company",
            dataIndex: "company",
            key: "company",
          },
          {
            title: "Designation",
            dataIndex: "designation",
            key: "designation",
          },
          {
            title: "Region",
            dataIndex: "region",
            key: "region",
          },
          {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
          },
          {
            title: "Featured",
            dataIndex: "featured",
            key: "featured",
          },
          {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            render: (_, record) => (
              <>
                <Space size="middle">
                  <DeleteFilled
                    onClick={() => {
                      openModal();
                    }}
                  />
                  <EditFilled onClick={() => {}} />
                </Space>
              </>
            ),
          },
        ]
      : [
          {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => (
              <img
                src={image}
                alt="delegate"
                style={{ width: "30px", backgroundColor: "red" }}
              />
            ),
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
          },
          {
            title: "Description",
            dataIndex: "description",
            key: "description",
          },
          {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
          },
          {
            title: "Featured",
            dataIndex: "featured",
            key: "featured",
          },

          {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            render: (_, record) => (
              <>
                <Space size="middle">
                  <DeleteFilled
                    onClick={() => {
                      openModal();
                    }}
                  />
                  <EditFilled onClick={() => {}} />
                </Space>
              </>
            ),
          },
        ];

  return (
    <>
      <Table dataSource={data} columns={columns} />
      <Delete open={open} hideModal={closeModal} />
    </>
  );
}
