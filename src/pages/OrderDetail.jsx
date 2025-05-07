import React from 'react';
import { useParams } from 'react-router-dom';
import orderHistories from '../data/mockOrderHistory';

const OrderDetail = () => {


  // TODO: GET order details from data base
  // Required useEffect to fetch order details from data base using useParams

  const { orderId } = useParams();
  const order = orderHistories.find(order => order.orderId === parseInt(orderId));

  // ตรวจสอบว่า order มีค่าหรือไม่
  if (!order) {
    return <div className="p-4">ไม่พบข้อมูลคำสั่งซื้อ #{orderId}</div>;
  }

  const { orderDetails, deliveryFee } = order;

  // Calculation
  const totalItemsPrice = orderDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = totalItemsPrice + deliveryFee;


  return (
    <div className='flex flex-col w-full max-w-4xl px-4 mb-20 mr-4 '>
      <h1 className='hidden mb-8 text-4xl font-bold sm:block'>รายละเอียดคำสั่งซื้อ {orderId}</h1>
      <table className='w-full mb-8 max-w-5xl text-center bg-gray-100 rounded-lg *:text-sm'>
        <thead>
          <tr className='h-12 *:p-4 *:font-normal'>
            <th className='text-left w-30'>รายการสินค้า</th>
            <th className='text-left'></th>
            <th>ราคา</th>
            <th>จำนวน</th>
            <th>ราคารวม</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map(item => (
            <tr className='border-t-1' key={item.orderItemId}>
              <td className='p-4 pr-0'><img className='rounded-2xl' src={item.image} alt={item.name} /></td>
              <td className='pl-4 text-left'><span className='font-bold'>{item.name}</span><br /><span>{item.variantLabel}</span></td>
              <td>฿{item.price}</td>
              <td>{item.quantity}</td>
              <td>฿{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='mb-8 text-right w-[91%]'>ค่าขนส่ง:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-bold'>฿{deliveryFee}</span></p>
      <hr />
      <p className='mt-8 text-right w-[91%]'>รวมคำสั่งซื้อ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-bold'>฿{grandTotal}</span></p>

    </div >
  )
}

export default OrderDetail;