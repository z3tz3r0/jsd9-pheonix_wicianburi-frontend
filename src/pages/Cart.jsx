import React from 'react';
import { useCart } from '../CartApp';
import ButtonMain from '../components/ButtonMain';
import { Link, useNavigate } from 'react-router';

    const Cart = () => {
        const { cart, updateQuantity, removeFromCart, getSubtotal } = useCart();
        const navigate = useNavigate();

        // คำนวณค่าส่งและยอดรวม
        const subtotal = getSubtotal();
        const delivery = 100; // การจัดส่ง
        const total = subtotal + delivery; // ยอดรวมทั้งหมด

        const handleCheckout = () => {
            navigate('/profile/cart/confirm-order');
          };

    return (
        <div className=''>
            <div className='flex flex-col items-center'>
                <h1 className='text-[28px] font-bold mx-4 sm:text-[44px]'>Cart</h1>
                <div className='w-full sm:grid sm:grid-cols-3 sm:max-w-7xl'>
                    <div className='mx-4 mt-4 col-span-2 border-b'>
                        {/* header */}
                        <div >
                            <div className='grid grid-cols-12 bg-[#dfdddd] p-4 rounded-t border-b-2'>
                                <div className='col-span-6'>
                                    <h2 className='font-medium'>สินค้า</h2>
                                </div>
                                <div className='col-span-2 text-center'>
                                    <h2 className='font-medium'>ราคา</h2>
                                </div>
                                <div className='col-span-2 text-center'>
                                    <h2 className='font-medium '>ปริมาณ</h2>
                                </div>
                                <div className='col-span-2 text-center'>
                                    <h2 className='font-medium text-nowrap'>ราคาสุทธิ</h2>
                                </div>
                            </div>
                        </div>

                        {/* content */}
                        <div >
                            {cart.length === 0 ? (
                                <div className='flex justify-center'>
                                    <p className='p-6 justify-center'>ไม่มีสินค้าในรถเข็น</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className='grid grid-cols-12 bg-[#dfdddd] p-4 border-b-2 sm:p-5'>
                                        <div className='flex col-span-6 '>
                                            <img src={item.image} alt={item.name}  className='w-1/3 rounded sm:w-1/4 '/>
                                            <div className='mx-2 sm:mx-4'>
                                                <h3 className='font-semibold text-nowrap'>{item.name}</h3>
                                                <p>{item.weight} กิโลกรัม</p>
                                            </div>
                                        </div>
                                        <div className='col-span-2 text-center'>
                                            <p>฿{item.price.toFixed(1)}</p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className='col-span-2 text-center'>
                                            <div className="col-span-2 ">
                                                <div className="flex items-center justify-center">
                                                    <button className="w-8 h-8 flex items-center justify-center border border-black rounded-l"
                                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    >
                                                        −
                                                    </button>
                                                    <input
                                                    type="text"
                                                    value={item.quantity}
                                                    readOnly
                                                    className="w-10 h-8 text-center border-t border-b border-gray-300"
                                                    />
                                                    <button className="w-8 h-8 flex items-center justify-center border border-black rounded-r"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-span-2 text-center'>
                                            <p className=''>฿{(item.price * item.quantity).toFixed(2)}</p>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                                <div className="mt-8">
                                    <Link to="/products" className="flex items-center text-gray-600 mb-4 hover:text-accent">
                                    ← กลับไปช้อปต่อ
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* cart total */}
                        <div className='p-6 bg-primary rounded-lg shadow-md w-full sm:w-sm'>
                            <h3 className='text-lg font-bold mb-4'>ยอดรวม</h3>
                            <div className='border-t border-gray-200'>
                                <div className='flex justify-between py-3'>
                                    <span>ยอดรวม</span>
                                    <span className='font-semibold'>{subtotal.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between py-3'>
                                    <span>ค่าส่งสินค้า</span>
                                    <span className='font-semibold'>{delivery}</span>
                                </div>
                                <div className='flex justify-between py-3 border-t border-gray-200 mt-2'>
                                    <span className='text-lg font-bold'>ยอดสุทธิ</span>
                                    <span className='text-accent font-bold'>{total.toFixed(2)} บาท</span>
                                </div>
                            </div>
                            <Link to='confirm-order'>
                                <ButtonMain type="submit" className='py-6 mt-4 mb-16 w-full bg-black' onClick={handleCheckout}>ชำระเงิน</ButtonMain>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Cart

