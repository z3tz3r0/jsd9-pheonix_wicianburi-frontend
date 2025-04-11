import React from "react";
import BasicButton from "../components/BasicButton";
import Typography from "@mui/material/Typography";

export default function OrderSuccess() {
  return (
    <div className="p-4 min-h-fit bg-primary sm:p-8">
      <div className="flex justify-center gap-4 mx-auto sm:gap-8 max-w-7xl sm:grid-cols-3">
        {/* Main content */}

        <div className="flex flex-col items-center justify-center p-8 space-y-6 bg-white shadow rounded-2xl sm:col-span-2">
          <img
            src="/assets/843349.png"
            alt="Delivery Scooter"
            className="w-28 h-28"
          />
          <div className="space-y-4 text-center">
            <Typography variant="h3" component="h1">
              คำสั่งซื้อสำเร็จ
            </Typography>
            <p className="text-sm font-bold">
              เรากำลังตรวจสอบหลักฐานการชำระเงินของท่าน
            </p>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mt: 2 }}
              color="#01c9ac"
              fontWeight="bold"
            >
              ขอขอบคุณที่สนับสนุนเรา !
            </Typography>
            <p>หมายเลขคำสั่งซื้อของท่านคือ 123465</p>
          </div>

          <BasicButton text="กลับไปหน้าเลือกสินค้า" />
        </div>
      </div>
    </div>
  );
}
