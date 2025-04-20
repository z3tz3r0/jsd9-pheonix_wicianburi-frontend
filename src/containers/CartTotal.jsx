import React from 'react'
import ButtonMain from '../components/ButtonMain';

const CartTotal = () => {
  const subtotal = 300; // ยอดรวมย่อย
  const delivery = 100; // การจัดส่ง
  const total = subtotal + delivery; // ยอดรวมทั้งหมด

  return (
    <div className="max-w-sm mx-auto p-6 bg-primary rounded-lg shadow-xl">
      <h3 className="text-lg font-bold mb-4">CART TOTAL</h3>
      <div className="border-t border-gray-200">
        <div className="flex justify-between py-3">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">{subtotal} thb</span>
        </div>
        <div className="flex justify-between py-3">
          <span className="text-gray-600">Delivery</span>
          <span className="font-semibold">{delivery}</span>
        </div>
        <div className="flex justify-between py-3 border-t border-gray-200 mt-2">
          <span className="text-gray-800 font-bold">Total</span>
          <span className="text-accent font-bold">{total.toLocaleString()} thb</span>
        </div>
      </div>
      <ButtonMain type="submit" className="py-6 mt-4 mb-16 w-full bg-accent">ช้อปเลย</ButtonMain>
    </div>
  )
}

export default CartTotal