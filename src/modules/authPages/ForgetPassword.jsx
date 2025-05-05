import React from "react";
import { useState } from "react";
import { useEffect, useCallback }  from "react";
import AuthPage from "@/modules/authPages/AuthPage";

import ButtonMain from "@/components/ButtonMain";

const ForgetPassword = () => {
  const [isAuthPageOpen, setIsAuthPageOpen] = useState(false);
  
  const openAuthPage = () => {
    setIsAuthPageOpen(true);
  };

  const closeAuthPage = useCallback(() => {
    setIsAuthPageOpen(false);
  }, []);

  useEffect(() => {
    if (!isAuthPageOpen) return;
  }, [isAuthPageOpen, closeAuthPage]);

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
            <button type="button"
              onClick={openAuthPage}
              className="cursor-pointer hover:text-[var(--facebook-blue)] text-[var(--clr-gray-600)] text-lg"
            >
              ยกเลิกการตั้งรหัสผ่านใหม่
            </button>
          </div>
        </div>
      </main>
      {isAuthPageOpen && (
        <div>
          <AuthPage onClose={closeAuthPage} />
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
