import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

import ButtonFacebook from "@/components/ButtonFacebook";
import ButtonGoogle from "@/components/ButtonGoogle";
import ButtonMain from "@/components/ButtonMain";
import useAuth from "../../context/useAuth";

const AuthPage = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSlide = () => setIsSignUp(!isSignUp);

  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const { setIsLogin, setUser } = useAuth();
  // ใช้ useAuth ตัวนี้ในหน้าอื่น ๆ

  const navigate = useNavigate();

  // คืนค่า default
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  });

  // จัดการ ลอกอิน และ ลงทะเบียน
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // จัดการ หลังกด Login button
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData,
        { withCredentials: true }
      );

      console.log("Login response:", res);

      setIsLogin(true);
      setUser(res.data.user || null);
      onClose();
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(error.response?.data?.error || "Login failed");
    }
  };

  // จัดการ หลังกด Register button
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmpassword) {
      setRegisterError("รหัสผ่านไม่ตรงกับที่ตั้งไว้");
      console.error(registerError);
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/auth/register", registerData);
      alert("ลงทะเบียนสำเร็จ");
      setRegisterData({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        confirmpassword: "",
      });
      toggleSlide();
    } catch (error) {
      if (error.response && error.response.data.error) {
        setRegisterError(error.response.data.error);
      } else {
        setRegisterError("เกิดข้อผิดพลาดในการลงทะเบียน");
      }
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="scale-75 sm:scale-100 relative z-20 w-full max-w-lg sm:max-w-4xl bg-[var(--primary)] shadow-2xl rounded-lg overflow-hidden p-4"
      >
        <div className="flex max-w-4xl overflow-hidden">
          <div
            className={`flex w-full transform transition-transform duration-300 ${
              isSignUp ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Login */}
            <div className="flex flex-col w-full md:flex-row shrink-0">
              <div className="w-full p-8 space-y-6 md:w-1/2">
                <div className="flex flex-col items-center justify-center gap-2 md:hidden">
                  <img
                    src="/assets/logo-all_rice.svg"
                    alt="All rice logo"
                    className="w-12 h-12"
                  />
                  <p className="text-xl font-black text-[var(--clr-secondary)]">
                    All Rice Co.
                  </p>
                </div>
                <div className="mb-10 text-center">
                  <h1 className="text-2xl font-bold text-[var(--clr-secondary)]">
                    ยินดีต้อนรับ
                  </h1>
                </div>
                <form className="space-y-4" onSubmit={handleLoginSubmit}>
                  {loginError && <p className="text-red-600">{loginError}</p>}
                  <input
                    type="email"
                    name="email"
                    placeholder="อีเมล"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                    value={loginData.email}
                    onChange={handleLoginChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="รหัสผ่าน"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                  <div className="flex justify-center w-full md:flex md:justify-end">
                    <Link
                      to="/AuthPage/ForgetAuth"
                      onClick={onClose}
                      className="text-sm text-[var(--clr-blue-600)]"
                    >
                      ลืมรหัสผ่าน ?
                    </Link>
                  </div>
                  <ButtonMain type="submit" className="p-6 mt-8 mb-8 sm:w-full">
                    เข้าสู่ระบบ
                  </ButtonMain>
                </form>
                <div className="flex items-center justify-center space-x-2">
                  <span className="w-1/5 border-t border-[var(--border-500)]"></span>
                  <span className="text-sm text-[var(--clr-gray-400)]">
                    หรือเข้าระบบด้วย
                  </span>
                  <span className="w-1/5 border-t border-[var(--border-500)]"></span>
                </div>
                <div className="flex justify-center space-x-8">
                  <ButtonFacebook />
                  <ButtonGoogle />
                </div>
                <p className="text-center text-[var(--clr-gray-400)]">
                  ยังไม่มีบัญชี ?
                  <button
                    onClick={toggleSlide}
                    className="text-[var(--facebook-blue)] mx-2 cursor-pointer"
                  >
                    ลงทะเบียนที่นี่
                  </button>
                </p>
              </div>
              <div className="items-center justify-center hidden w-1/2 md:flex md:rounded-lg">
                <img
                  src="/assets/login.jpg"
                  alt="Login"
                  className="object-cover h-full mr-4 rounded-lg"
                />
              </div>
            </div>

            {/* Register */}
            <div className="flex flex-col w-full md:flex-row-reverse shrink-0">
              <div className="w-full p-8 space-y-6 md:w-1/2">
                <div className="flex flex-col items-center justify-center gap-2 md:hidden">
                  <img
                    src="/assets/logo-all_rice.svg"
                    alt="All rice logo"
                    className="w-12 h-12"
                  />
                  <p className="text-xl font-black text-[var(--clr-secondary)]">
                    All Rice Co.
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-[var(--clr-secondary)]">
                    ลงทะเบียนเพื่อเข้าใช้งาน
                  </h2>
                </div>
                <form className="space-y-4" onSubmit={handleRegisterSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="อีเมล"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                  />
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="ชื่อจริง"
                      className="w-1/2 p-2 border border-[var(--clr-gray-400)] rounded-md"
                      value={registerData.firstname}
                      onChange={handleRegisterChange}
                    />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="นามสกุล"
                      className="w-1/2 p-2 border border-[var(--clr-gray-400)] rounded-md"
                      value={registerData.lastname}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="โปรดระบุรหัสผ่าน"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                  />
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="ยืนยันรหัสผ่าน"
                    className="w-full p-2 border border-[var(--clr-gray-400)] rounded-md"
                    value={registerData.confirmpassword}
                    onChange={handleRegisterChange}
                  />
                  {registerError && (
                    <p className="text-red-600">{registerError}</p>
                  )}
                  <ButtonMain type="submit" className="p-6 mt-8 mb-8 sm:w-full">
                    ลงทะเบียน
                  </ButtonMain>
                </form>
                <div className="flex items-center justify-center space-x-2">
                  <span className="w-1/5 border-t border-[var(--border-500)]"></span>
                  <span className="text-sm text-[var(--clr-gray-400)]">
                    หรือลงทะเบียนด้วย
                  </span>
                  <span className="w-1/5 border-t border-[var(--border-500)]"></span>
                </div>
                <div className="flex justify-center space-x-8">
                  <ButtonFacebook />
                  <ButtonGoogle />
                </div>
                <p className="text-center text-[var(--clr-gray-400)]">
                  มีบัญชีแล้ว ?
                  <button
                    onClick={toggleSlide}
                    className="text-[var(--facebook-blue)] ml-1 cursor-pointer"
                  >
                    กลับไปหน้าเข้าสู่ระบบ
                  </button>
                </p>
              </div>
              <div className="items-center justify-center hidden w-1/2 md:flex md:rounded-lg">
                <img
                  src="/assets/register.jpg"
                  alt="Register"
                  className="object-cover h-full ml-4 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
