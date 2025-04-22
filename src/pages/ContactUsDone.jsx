import React from "react";
import { useNavigate } from "react-router";
import { buttonVariants } from "@/components/ui/button";

export default function ContactUsDone() {
  const navigate = useNavigate();

  return (
    <div className="p-4 min-h-fit bg-primary sm:p-8">
      <div className="flex justify-center gap-4 mx-auto sm:gap-8 max-w-7xl sm:grid-cols-3">
        {/* Main content */}

        <div className="flex flex-col items-center justify-center p-8 space-y-6 bg-white shadow rounded-2xl sm:col-span-2">
          <img
            src="/assets/farmer.png"
            alt="Delivery Scooter"
            className="w-28 h-28"
          />
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">เราได้รับข้อความของท่านแล้ว</h1>

            <h2 className="text-2xl font-bold">
              ขอขอบคุณสำหรับการติดต่อมาครั้งนี้ !
            </h2>
          </div>
          <button
            onClick={() => navigate("/")}
            type="button"
            className={buttonVariants({
              variant: "default",
              className:
                "p-6 sm:w-fit !bg-[var(--accent)] !text-white hover:bg-[var(--accent)] active:scale-95 transition-transform duration-150",
            })}
          >
            กลับไปหน้าหลัก
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
