import { Modal } from "antd";
import { useState, forwardRef } from "react";
import "react-image-crop/dist/ReactCrop.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ImageCropper = forwardRef(function ImageCropper(
  { image, setImage, showModal, onHandleSave, handleCloseModal },
  cropperRef
) {
  // const {showModal, onHandleSave, setShowModal} = props

  const [crop, setCrop] = useState({
    unit: "px", // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 300,
    height: 300,
  });
  const [selectedFile, setSelectedFile] = useState("");
  // const [image, setImage] = useState(null)

  // const closeModal = () =>{

  //     console.log(handleCloseModal)

  //     handleCloseModal()

  // }

  // useEffect(()=>{
  //     if (ref.current){
  //         console.log(ref.current.cropper)
  //         console.log("activated")
  //     }
  // })

  // function onImageLoad(e) {
  //     const { naturalWidth: width, naturalHeight: height } = e.currentTarget

  //     const crop = centerCrop(
  //       makeAspectCrop(
  //         {
  //           // You don't need to pass a complete crop into
  //           // makeAspectCrop or centerCrop.
  //           unit: '%',
  //           width: 90,
  //         },
  //         16 / 9,
  //         width,
  //         height
  //       ),
  //       width,
  //       height
  //     )

  //     setCrop(crop)
  //   }
  const onImageLoaded = (image) => {
    setCrop({ aspect: 1 / 1, width: 50, x: 25, y: 25 });
  };
  const onFileSelect = (e) => {
    if (e.file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: e.file.type });
        setSelectedFile(blob);
        console.log(selectedFile);
      };
      reader.readAsArrayBuffer(e.file);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <Modal
        open={showModal}
        style={{ width: "300px", height: "300px" }}
        onCancel={handleCloseModal}
        onOk={onHandleSave}
      >
        {/* <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
    >
      <Upload name="logo" listType="picture" action={'#'}>
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload> 
     </Form.Item> */}

        <input type="file" onChange={handleFileChange} />

        {image && (
          <Cropper
            src={image}
            style={{ height: 400, width: "100%" }}
            // Cropper.js options
            initialAspectRatio={16 / 9}
            guides={false}
            crop={crop}
            ref={cropperRef}
            dragMode="none"
          />
        )}

        {/* {selectedFile && <AvatarEditor
      image={URL.createObjectURL(selectedFile)}
      width={300}
      height={300}
      border={20}
      color={[255, 255, 255, 0.6]} // RGBA
      scale={1.2}
      rotate={0}
    //   style={{backgroundColor: "red"}}
    />} */}
      </Modal>
    </>
  );
});

export default ImageCropper;
