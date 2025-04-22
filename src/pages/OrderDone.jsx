import { buttonVariants } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="p-4 min-h-fit bg-primary sm:p-8">
      <div className="flex justify-center gap-4 mx-auto sm:gap-8 max-w-7xl sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center p-8 space-y-6 bg-white shadow rounded-2xl sm:col-span-2">
          <img src="/assets/843349.png" alt="" className="w-28 h-28" />
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-semibold">คำสั่งซื้อสำเร็จ</h1>
            <p>เรากำลังตรวจสอบหลักฐานการชำระเงินของท่าน</p>
            <h2 className="text-4xl font-semibold">ขอขอบคุณที่สนับสนุนเรา !</h2>
            <p>หมายเลขคำสั่งซื้อของท่านคือ 123465</p>
          </div>

          <button
            onClick={() => navigate("/")}
            type="button"
            className={buttonVariants({
              variant: "default",
              className:
                "p-6 sm:w-fit !bg-[var(--accent)] !text-white hover:bg-[var(--accent-hover)] active:scale-95 transition-transform duration-150",
            })}
          >
            กลับไปหน้าหลัก
          </button>
        </div>
      </div>
    </div>
  );
}
