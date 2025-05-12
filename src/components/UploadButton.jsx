import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from 'react';


export default function InputFileUpload() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [uploadedAssetInfo, setUploadedAssetInfo] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  cloudinaryRef.current = window.cloudinary;

  useEffect(() => {
    if (cloudinaryRef.current) {
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: "djalxl4dp",
        uploadPreset: "ml_default",
      }, (error, result) => {
        if (error) {
          setUploadError("Cloudinary Upload Error: ", error);
          setUploadedAssetInfo(null);
        } else if (result && result.event === "success") {
          setUploadedAssetInfo(result.info);
          console.log(result.info)
          setUploadError(null);
        }
      });
    } else {
      setUploadError("Cloud not initialize image upload service.");
    }
  }, []);
  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        onClick={() => {
          setUploadedAssetInfo(null);
          setUploadError(null);
          if (widgetRef.current) {
            widgetRef.current.open();
          } else {
            setUploadError("Image Upload service is not ready.");
          }
        }}
        startIcon={<CloudUploadIcon />}
      >
        อัปโหลดไฟล์
      </Button>
      {uploadedAssetInfo && (
        <div className='mt-4 text-green-500'>
          <p>อัปโหลดสำเร็จ {uploadedAssetInfo.original_filename}</p>
        </div>
      )}
      {uploadError && (
        <div className='mt-4 text-red-500'>
          <p>{uploadError}</p>
        </div>
      )}
    </>
  )
}