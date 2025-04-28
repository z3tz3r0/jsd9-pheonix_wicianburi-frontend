import React from "react";
import BasicButton from "../components/BasicButton";
import UploadButton from "../components/UploadButton";
 

export default function ConfirmPayment() {
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
              <div>73043</div>
              <div className="font-bold">วันที่:</div>
              <div>7 เมษายน 2025</div>
              <div className="font-bold">อีเมล์:</div>
              <div>johndoeagain@gmail.com</div>
              <div className="font-bold">รวมทั้งสิ้น:</div>
              <div>฿ 335</div>
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
                src="assets/qrcode-phoenix.png"
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
              <UploadButton />
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
              <BasicButton text="ส่งรายละเอียดการชำระเงิน" />
            </div>
          </div>
        </div>

{/* Address Section */}

        <div className="p-6 bg-white shadow rounded-2xl max-h-fit">
          <h3 className="mb-4 text-lg font-semibold">ที่อยู่</h3>
          <div className="text-sm text-slategray">
            <div>
              <p className="font-bold">สถานที่จัดส่ง</p>
              <p>ชื่อ: จอห์น โด</p>
              <p>124/160 ซ.เทศบาล1 ถ.เทศบาลบางม่วง มหาสวัสดิ์</p>
              <p>อ.บางกรวย จ.นนทบุรี 11130</p>
              <p>โทร: 0612345678</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
