import { Modal, Button } from "antd";

export default function Delete({ open, hideModal }) {
  return (
    <Modal
      title="Please Confirm"
      centered
      open={open}
      onOk={hideModal}
      onCancel={hideModal}
      content="Do you want to delete this"
      footer={[
        <>
          <Button key="No" type="primary" onClick={hideModal}>
            No
          </Button>
          <Button key="Yes" danger onClick={hideModal}>
            Yes
          </Button>
        </>,
      ]}
    >
      <h3 style={{ color: "red" }}>Are you sure you want to delete this?</h3>
    </Modal>
  );
}
