import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from 'react';
import sendImageUrl from '../services/paymentService';


export default function InputFileUpload({ orderId }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [isSubmittingLink, setIsSubmittingLink] = useState(false);
  const [linkSubmitSuccess, setLinkSubmitSuccess] = useState(null);
  const [linkSubmitError, setLinkSubmitError] = useState(null);
  const [uploadedAssetInfo, setUploadedAssetInfo] = useState(null);
  const [uploadError, setUploadError] = useState(null);


  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    if (cloudinaryRef.current) {
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_CLOUD_PRESET,
      }, (error, result) => {
        if (error) {
          setUploadError(`Cloudinary Upload Error: ${error.message || 'Unknown error'}`);
          setUploadedAssetInfo(null);
        } else if (result && result.event === "success") {
          setUploadedAssetInfo(result.info);
          console.log(result.info)
          setUploadError(null);

          if (orderId && result.info.secure_url) {
            setIsSubmittingLink(true);
            setLinkSubmitSuccess(null);
            setLinkSubmitError(null);
            sendImageUrl(orderId, result.info.secure_url)
              .then(response => {
                // Assuming your service returns the updated order or a success message
                console.log("Payment slip URL sent successfully:", response);
                setLinkSubmitSuccess("หลักฐานการชำระเงินถูกส่งเรียบร้อยแล้ว");
              })
              .catch(err => {
                console.error("Error sending payment slip URL:", err);
                setLinkSubmitError(`เกิดข้อผิดพลาดในการส่งหลักฐาน: ${err.message || 'Unknown error'}`);
              })
              .finally(() => {
                setIsSubmittingLink(false);
              });
          } else if (!orderId) {
            setLinkSubmitError("ไม่พบ Order ID สำหรับการส่งหลักฐาน");
          }
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
          setLinkSubmitSuccess(null);
          setLinkSubmitError(null);
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
      {isSubmittingLink && (
        <div className='mt-2 text-muted'>
          <p>กำลังส่งหลักฐานการชำระเงิน...</p>
        </div>
      )}
      {linkSubmitSuccess && (
        <div className='mt-2 text-green-500'>
          <p>{linkSubmitSuccess}</p>
        </div>
      )}
      {linkSubmitError && (
        <div className='mt-2 text-red-500'>
          <p>{linkSubmitError}</p>
        </div>
      )}
    </>
  )
}