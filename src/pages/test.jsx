import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCart from "../context/useCart";
import useAuth from "../context/useAuth";
import ButtonFirst from "../components/account/ButtonFirst";
import FormInputs from "../components/account/FormInputs";

import AuthPage from "../modules/authPages/AuthPage";

const FREE_SHIPPING_THRESHOLD = 1000;
const SHIPPING_FEE = 100;

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const { cart, getSubtotal } = useCart();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        phone: user.phone,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address?.street,
        subDistrict: user.address?.subDistrict,
        district: user.address?.district,
        province: user.address?.province,
        postalCode: user.address?.postal,
      });
    }
  }, [user, reset]);

  const [delivery, setDelivery] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  useEffect(() => {
    const subtotal = getSubtotal(); // คำนวณยอดรวมจาก getSubtotal()
    setCartSubtotal(subtotal); // ตั้งค่า subtotal
    const deliveryCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    setDelivery(deliveryCost);
    setTotal(subtotal + deliveryCost);
  }, [cart, getSubtotal]); // คำนวณใหม่เมื่อ cart หรือ getSubtotal เปลี่ยน

  const [showAuthModal, setShowAuthModal] = useState(false);

  const onSubmit = (data) => {
    console.log("Submitting order form", data);
    if (!user) {
      console.log("User not logged in, showing auth modal");
      setShowAuthModal(true);
      return;
    }

    const orderData = {
      userInfo: {
        ...data,
        address: {
          street: data.address,
          subDistrict: data.subDistrict,
          district: data.district,
          province: data.province,
          postal: data.postalCode,
        },
      },
      items: cart,
      subtotal: getSubtotal(),
      delivery,
      total,
    };

    sessionStorage.setItem("orderData", JSON.stringify(orderData));
    navigate("confirm-payment");
  };

  return (
    <>
      <div className="min-h-screen p-4 bg-primary sm:p-8">
        <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-3">
          {/* Left side: User Info */}
          <div className="space-y-6 lg:col-span-2">
            <h1 className="text-2xl font-bold">การยืนยันคำสั่งซื้อ</h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 space-y-4 bg-white shadow rounded-2xl"
            >
              <h2 className="text-lg font-semibold">
                ตรวจสอบรายละเอียดการจัดส่ง
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormInputs
                  register={register}
                  name="email"
                  type="email"
                  placeholder="อีเมล"
                  value={user?.email}
                  readOnly
                />

                <FormInputs
                  register={register}
                  name="phone"
                  type="tel"
                  placeholder="เบอร์โทรศัพท์"
                  value={user?.phone}
                  readOnly
                />

                <FormInputs
                  register={register}
                  name="firstName"
                  type="text"
                  placeholder="ชื่อ"
                  value={user?.firstName}
                  readOnly
                />

                <FormInputs
                  register={register}
                  name="lastName"
                  type="text"
                  placeholder="นามสกุล"
                  value={user?.lastName}
                  readOnly
                />

                <FormInputs
                  register={register}
                  name="address"
                  type="text"
                  placeholder="ที่อยู่"
                  value={user?.address?.street}
                  className="sm:col-span-2"
                  readOnly
                />

                <FormInputs
                  register={register}
                  name="subDistrict"
                  type="text"
                  placeholder="ตำบล"
                  value={user?.address?.subDistrict}
                  readOnly
                />

                <FormInputs
                  register={register}
                  name="district"
                  type="text"
                  placeholder="อำเภอ"
                  value={user?.address?.district}
                  readOnly
                />

                <FormInputs
                  register={register}
                  name="province"
                  type="text"
                  placeholder="จังหวัด"
                  value={user?.address?.province}
                  readOnly
                />

                <FormInputs
                  register={register}
                  name="postalCode"
                  type="text"
                  placeholder="รหัสไปรษณีย์"
                  value={user?.address?.postal}
                  readOnly
                />
              </div>

              <div>
                <ButtonFirst
                  text="ยืนยันคำสั่งซื้อ"
                  type="submit"
                  isPending={false}
                />
              </div>
            </form>
          </div>

          {/* Right side: Order Summary */}
          <div className="p-6 space-y-4 bg-white shadow rounded-2xl">
            <h2 className="text-lg font-semibold">รายการสั่งซื้อ</h2>
            {cart.length === 0 ? (
              <p>ไม่มีสินค้าในตะกร้า</p>
            ) : (
              <>
                <table className="w-full mt-4 border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-xl font-semibold text-left">
                        สินค้า
                      </th>
                      <th className="py-2 text-xl font-semibold text-right">
                        ราคา
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b-[0.5px] border-gray-300"
                      >
                        <td className="py-2">
                          {item.name}
                          {/* แสดง variant.label ถ้ามี */}
                          {item.variant?.label &&
                            (${item.variant.label})}x {item.quantity}
                        </td>
                        <td className="py-2 text-right">
                          ฿ {(item.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 space-y-1 text-lg font-semibold text-right">
                  <p>ราคารวม : ฿ {cartSubtotal.toLocaleString()}</p>
                  <p>
                    ค่าจัดส่ง :{" "}
                    <span className={delivery === 0 ? "text-green-600" : ""}>
                      {delivery === 0
                        ? "ฟรี"
                        : ฿ ${delivery.toLocaleString()}}
                    </span>
                  </p>
                  <p className="font-bold text-accent">
                    ยอดชำระทั้งหมด : ฿ {total.toLocaleString()}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {showAuthModal && <AuthPage onClose={() => setShowAuthModal(false)} />}
    </>
  );
}