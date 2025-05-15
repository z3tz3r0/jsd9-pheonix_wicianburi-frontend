import { useLocation, useNavigate } from "react-router-dom";
import ButtonMain from "../components/ButtonMain";
import UploadButton from "../components/UploadButton";
import useAuth from "../context/useAuth";

export default function ConfirmPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state?.orderData;
  // console.log("ข้อมูลที่รับมาจาก ConfirmOrder:", orderData);

  const { user } = useAuth();

  if (!orderData?.orderId) {
    return <p className="text-red-500">ไม่พบ Order ID สำหรับการส่งหลักฐาน</p>;
  }

  const handleSubmitPayment = () => {
    // console.log("ส่งหลักฐานแล้วววว");

    navigate("/cart/confirm-order/confirm-payment/order-done", {
      state: { orderId: orderData.orderId },
    });
  };

  return (
    <div className="min-h-screen p-4 bg-primary sm:p-8">
      <div className="grid grid-cols-1 gap-4 mx-auto sm:gap-8 max-w-7xl sm:grid-cols-3">
        <div className="space-y-4 sm:col-span-2">
          {/* Order Summary & Thank you message */}

          <h1 className="mb-2 text-2xl font-semibold">
            ขอบคุณค่ะ เราได้รับคำสั่งซื้อของคุณแล้ว
          </h1>
          <div className="p-6 space-y-4 bg-white shadow rounded-2xl">
            <div className="grid grid-cols-1 text-sm text-gray-700 sm:grid-cols-2 gap-y-2">
              <div className="font-bold">เลขที่คำสั่งซื้อ:</div>
              <div>{orderData?.orderId}</div>
              <div className="font-bold">วันที่:</div>
              <div>{new Date().toLocaleDateString()}</div>
              <div className="font-bold">อีเมล์:</div>
              <div>{user?.email}</div>
              <div className="font-bold">รวมทั้งสิ้น:</div>
              <div>฿ {orderData?.totalAmount}</div>
              <div className="font-bold">วิธีการชำระเงิน:</div>
              <div>โอนเงิน (PromptPay)</div>
            </div>
          </div>

          {/* QR and Upload Section */}

          <div className="p-6 bg-white shadow rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold">ยืนยันการชำระเงิน</h2>

            {/* รูปภาพ QR Code */}

            <div className="flex items-center p-4 space-x-4 border rounded-lg">
              <img
                src="/assets/qrcode-phoenix.png"
                alt="PromptPay QR"
                className="object-contain w-24 h-24"
              />
              <div>
                <p className="font-medium">ชำระเงินด้วยพร้อมเพย์</p>
                <p className="text-sm text-slategray">1234567891234</p>
              </div>
            </div>

            {/* File Upload */}

            <div className="mt-4">
              <label className="block mb-1 font-medium">แนบหลักฐานการโอน</label>

              {/* // TODO : pass orderId as a props once it's done. */}
              <UploadButton orderId={orderData.orderId} />
            </div>

            {/* Transfer Date and Time */}

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block mb-1 font-medium">วันที่โอน</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue="2025-04-07"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">เวลา</label>
                <input
                  type="time"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue="8:56"
                />
              </div>
            </div>

            {/* Submit Button */}

            <div className="mt-6">
              <ButtonMain
                text="ส่งรายละเอียดการชำระเงิน"
                onClick={handleSubmitPayment}
                className="w-auto mt-8 mb-8 sm:w-auto"
              >
                ยืนยันคำสั่งซื้อ
              </ButtonMain>
            </div>
          </div>
        </div>

        {/* Address Section */}

        <div className="p-6 bg-white shadow rounded-2xl max-h-fit">
          <h3 className="mb-4 text-lg font-semibold">ที่อยู่</h3>
          <div className="text-sm text-slategray">
            <div>
              <p className="font-bold">สถานที่จัดส่ง</p>
              <p>{user?.firstName} {user?.lastName}</p>
              <p>{user?.phone}</p>
              <p>{user?.address?.street}</p>
              <p>ต.{user?.address?.subDistrict}</p>
              <p>
                อ.{user?.address?.district} จ.{user?.address?.province}{" "}
                {user?.address?.postal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
