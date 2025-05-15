import ButtonMain from "@/components/ButtonMain";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import useCart from "../context/useCart";

import AuthPage from "../modules/authPages/AuthPage";
import api from "../services/api";

const FREE_SHIPPING_THRESHOLD = 1000;
const SHIPPING_FEE = 100;

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const { cart, getSubtotal, clearCart } = useCart();
  const { user } = useAuth();

  const [delivery, setDelivery] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const subtotal = getSubtotal();
    setCartSubtotal(subtotal);
    const deliveryCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    setDelivery(deliveryCost);
    setTotal(subtotal + deliveryCost);
  }, [cart, getSubtotal]);

  const [showAuthModal, setShowAuthModal] = useState(false);

  const onSubmit = async () => {
    // console.log("รายการสินค้าในตะกร้า:", cart);
    if (!user) {
      setShowAuthModal(true);
      // console.log("ผู้ใช้ไม่ได้เข้าสู่ระบบ");
      return;
    }

    setIsSubmitting(true);

    // ก้อนนี้คือส่งไป create order ในหลังบ้าน
    const orderData = {
      userId: user._id,
      orderItems: cart.map((item) => ({
        productId: item.productId,
        variantValue: item.variantValue,
        quantity: item.quantity,
      })),
      totalAmount: total,
      deliveryFee: delivery,
      stateVariant: "รอยืนยัน",
    };
    try {
      const response = await api.post("api/orders", orderData);
      // console.log("Order created:", response.data);
      clearCart();
      navigate("/cart/confirm-order/confirm-payment", {
        state: { orderData: response.data.order },
      });
    } catch (error) {
      console.error("Error submitting order:", error.response?.data || error);
    } finally {
      setIsSubmitting(false);
    }
    // console.log("ส่งก้อนนี้ไปหลังบ้าน:", orderData);
  };

  return (
    <>
      <div className="min-h-screen p-4 bg-primary sm:p-8">
        <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-3">
          {/* Left side: User Info */}
          <div className="space-y-6 lg:col-span-2">
            <h1 className="text-2xl font-bold">การยืนยันคำสั่งซื้อ</h1>

            <div className="p-6 space-y-4 bg-white shadow rounded-2xl">
              <h2 className="text-lg font-semibold">ที่อยู่จัดส่ง</h2>

              {user ? (
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>อีเมล:</strong> {user.email || "-"}
                  </p>
                  <p>
                    <strong>เบอร์โทร:</strong> {user.phone || "-"}
                  </p>
                  <p>
                    <strong>ชื่อ:</strong> {user.firstName || "-"}{" "}
                    {user.lastName || "-"}
                  </p>
                  <p>
                    <strong>ที่อยู่:</strong> {user.address?.street || "-"}
                  </p>
                  <p>
                    <strong>ตำบล/แขวง:</strong>{" "}
                    {user.address?.subDistrict || "-"}
                  </p>
                  <p>
                    <strong>อำเภอ/เขต:</strong> {user.address?.district || "-"}
                  </p>
                  <p>
                    <strong>จังหวัด:</strong> {user.address?.province || "-"}
                  </p>
                  <p>
                    <strong>รหัสไปรษณีย์:</strong> {user.address?.postal || "-"}
                  </p>
                </div>
              ) : (
                <p className="text-red-500">
                  กรุณาเข้าสู่ระบบก่อนทำการสั่งซื้อ
                </p>
              )}

              <div className="flex flex-wrap justify-center lg:justify-start lg:gap-4">
                <ButtonMain
                  text="ยืนยันคำสั่งซื้อ"
                  onClick={onSubmit}
                  isPending={isSubmitting}
                  disabled={isSubmitting}
                  className="w-auto my-2 lg:w-fit"
                >
                  ยืนยันคำสั่งซื้อ
                </ButtonMain>
                {user && (
                  <ButtonMain
                    text="แก้ไขข้อมูลจัดส่ง"
                    onClick={() => navigate("/profile")}
                    className="w-auto my-2 lg:w-fit"
                  >
                    แก้ไขข้อมูลจัดส่ง
                  </ButtonMain>
                )}
              </div>
              <Link
                to="/products"
                className="flex items-center mb-4 text-gray-600 cursor-pointer hover:text-accent"
              >
                ← กลับไปช้อปต่อ
              </Link>
            </div>
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
                          {item.variant?.label &&
                            `(${item.variant.label})`} x {item.quantity}
                        </td>
                        <td className="py-2 text-right">
                          ฿ {(item.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 space-y-1 text-lg text-right">
                  <p>ราคารวม : ฿ {cartSubtotal.toLocaleString()}</p>
                  <p>
                    ค่าจัดส่ง :{" "}
                    <span className={delivery === 0 ? "text-green-600" : ""}>
                      {delivery === 0
                        ? "ฟรี"
                        : `฿ ${delivery.toLocaleString()}`}
                    </span>
                  </p>
                  <p className="font-bold">
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
