import React from 'react';
import { Link } from 'react-router';
import orderHistories from '../data/mockOrderHistory';


const formatThaiDate = (dateString) => {
  const date = new Date(dateString);
  const thaiMonths = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  const day = date.getDate();
  const month = thaiMonths[date.getMonth()];
  const year = date.getFullYear() + 543;

  return `${day} ${month} ${year}`;
};

const OrderHistory = () => {

  return (
    <div className='flex flex-col w-full max-w-4xl px-4 mb-20 mr-4'>
      <h1 className='hidden mb-8 text-4xl font-bold sm:block'>การซื้อของฉัน</h1>
      <table className='w-full max-w-5xl text-center bg-gray-100 rounded-lg *:text-sm'>
        <thead>
          <tr className='h-12 *:p-4 *:font-normal'>
            <th >หมายเลขคำสั่งซื้อ</th>
            <th >วันที่</th>
            <th>สถานะ</th>
            <th>รวมคำสั่งซื้อ</th>
            <th>รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {orderHistories.map(item => (
            <tr className='border-t-1' key={item.orderId}>
              <td className='py-8 '>{item.orderId}</td>
              <td >{formatThaiDate(item.orderDate)}</td>
              <td >{item.stateVariant}</td>
              <td >฿{item.totalAmount + item.deliveryFee}</td>
              <td className='px-4 '>
                <Link to={`/profile/order-history/${item.orderId}`}
                  className="block px-4 py-2 mx-1 bg-black rounded-md cursor-pointer hover:bg-black/90 active:shadow-md text-primary">
                  ดูรายละเอียด
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
};

export default OrderHistory;