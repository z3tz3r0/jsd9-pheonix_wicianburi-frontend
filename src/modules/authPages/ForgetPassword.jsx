import React from "react";
import { Link } from "react-router";

import ButtonMain from "@/components/ButtonMain";

const ForgetPassword = () => {
  return (
    <div className="bg-[var(--clr-white)] flex flex-col min-h-fit">
      <main className="flex justify-center my-8">
        <div className="shadow-lg bg-[var(--clr-gray)] p-10 rounded-lg w-full max-w-2xl mx-6">
          <h1 className="font-bold text-4xl text-center text-[var(--clr-primary)]">
            รีเซทรหัสผ่าน
          </h1>

          <form className="mt-8 space-y-4">
            <label className="block text-lg font-medium text-[var(--clr-secondary)]">
              โปรดระบุอีเมลที่เคยลงทะเบียนไว้
            </label>
            <input
              type="email"
              placeholder="อีเมล"
              className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
            />
            <div className="flex justify-center mt-6">
              <ButtonMain
                onClick={() => console.log("Password Changed")}
                type="submit"
                className="w-fit"
              >
                ยืนยันการเปลี่ยนรหัส
              </ButtonMain>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link to="/AuthPage" className="text-[var(--clr-gray-600)] text-lg">
              ยกเลิกการตั้งรหัสผ่านใหม่
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgetPassword;
