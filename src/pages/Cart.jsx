import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import ButtonMain from "../components/ButtonMain";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getSubtotal } =
    useContext(CartContext);
  const navigate = useNavigate();

  // คำนวณค่าส่งและยอดรวม
  const subtotal = getSubtotal();
  const FREE_SHIPPING_THRESHOLD = 1000;
  const SHIPPING_FEE = 100;

  const delivery = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + delivery; // ยอดรวมทั้งหมด

  const handleCheckout = () => {
    console.log(cart.length);
    if (cart.length !== 0) {
      navigate("/cart/confirm-order");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-[28px] font-bold mx-4 my-2 sm:text-[44px]">
          ตะกร้าสินค้า
        </h1>
        <div className="w-full md:grid md:grid-cols-3 md:max-w-7xl ">
          <div className="col-span-2 mx-4 border-b">
            {/* header */}
            <div>
              <div className="grid grid-cols-12 bg-[#dfdddd] p-4 rounded-t border-b-2 text-sm sm:text-base">
                <div className="col-span-5">
                  <h2 className="font-medium">สินค้า</h2>
                </div>
                <div className="col-span-2 text-center">
                  <h2 className="font-medium">ราคา</h2>
                </div>
                <div className="col-span-2 text-center">
                  <h2 className="font-medium ">ปริมาณ</h2>
                </div>
                <div className="col-span-2 ml-1 text-center sm:ml-0">
                  <h2 className="font-medium text-nowrap">ราคาสุทธิ</h2>
                </div>
              </div>
            </div>

            {/* content */}

            <div>
              {cart.length === 0 ? (
                <div className="flex justify-center">
                  <p className="justify-center p-6">ไม่มีสินค้าในรถเข็น</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.productId + item.variantLabel}
                    className="grid grid-cols-12 bg-[#dfdddd] p-4 border-b-2 sm:p-5"
                  >
                    <div className="flex col-span-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-1/3 rounded sm:w-1/4 "
                      />
                      <div className="mx-2 sm:mx-4">
                        <h3 className="text-sm font-semibold sm:text-base">
                          {item.name}
                        </h3>
                        <p className="text-sm font-normal sm:text-base">
                          {item.variantLabel}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-2 text-sm text-center sm:text-base">
                      <p>฿{item.price}</p>
                      {/* .toFixed(1) */}
                    </div>

                    {/* Quantity Controls */}

                    <div className="col-span-2 text-sm text-center sm:text-base">
                      <div className="flex items-center justify-center">
                        <button
                          className="flex items-center justify-center w-4 h-8 border border-black rounded-l cursor-pointer sm:w-6"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.variantLabel,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          −
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="w-4 h-8 text-center border-t border-b border-black sm:w-8 bg-primary"
                        />
                        <button
                          className="flex items-center justify-center w-4 h-8 border border-black rounded-r cursor-pointer sm:w-6"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.variantLabel,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 text-sm text-center sm:text-base">
                      <p className="mx-2 sm:mx-10 w-fit">
                        ฿{(item.price * item.quantity).toFixed(1)}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(item.productId, item.variantLabel)
                      }
                      className="flex items-start justify-end col-span-1 text-gray-400 hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
              <div className="mt-8">
                <Link
                  to="/products"
                  className="flex items-center mb-4 text-gray-600 cursor-pointer hover:text-accent"
                >
                  ← กลับไปช้อปต่อ
                </Link>
              </div>
            </div>
          </div>

          {/* cart total */}
          <div className="w-full h-[360px] p-6 mb-4 rounded-md shadow-md bg-primary md:w-sm ">
            <h3 className="mb-4 text-lg font-bold">ยอดรวมสินค้า</h3>
            <div className="border-t border-gray-200">
              <div className="flex justify-between py-3">
                <span>ยอดรวม</span>
                <span className="font-semibold">{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2">
                <span>ค่าจัดส่ง</span>
                <span>
                  {delivery === 0 ? (
                    <span className="text-green-600">ฟรี</span>
                  ) : (
                    `${delivery.toFixed(2)}`
                  )}
                </span>
              </div>
              {subtotal < FREE_SHIPPING_THRESHOLD && (
                <div className="mt-2 mb-3 text-xs text-gray-600">
                  ซื้ออีก ฿{(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}{" "}
                  เพื่อรับส่วนลดค่าส่งฟรี
                </div>
              )}
              <div className="flex justify-between py-3 mt-2 border-t border-gray-200">
                <span className="text-lg font-bold">ยอดสุทธิ</span>
                <span className="font-bold text-accent">
                  ฿{total.toFixed(2)}
                </span>
              </div>
            </div>
            <ButtonMain
              type="submit"
              className="w-full py-6 mt-4 mb-16 bg-black"
              onClick={handleCheckout}
            >
              ชำระเงิน
            </ButtonMain>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
