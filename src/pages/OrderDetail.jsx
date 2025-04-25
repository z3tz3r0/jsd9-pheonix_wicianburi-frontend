import React from 'react';
// import { useParams } from 'react-router';

const OrderDetail = () => {

  // const orderId = useParams();
  // console.log(orderId)

  // TODO: GET order details from data base
  // Required useEffect to fetch order details from data base using useParams

  // render order history using hard code
  const orderDetails = [
    {
      id: 1,
      image: "../../public/assets/ข้าวหอมมะลิ กข15.webp",
      name: "ข้าวหอมมะลิ 105",
      itemVariant: "1 กิโลกรัม",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      image: "../../public/assets/ข้าวมันปู.webp",
      name: "ข้าวมันปู",
      itemVariant: "1 กิโลกรัม",
      price: 150,
      quantity: 2,
    },
    {
      id: 3,
      image: "../../public/assets/ข้าวกล้อง.webp",
      name: "ข้าวกล้อง",
      itemVariant: "1 กิโลกรัม",
      price: 120,
      quantity: 3,
    },
  ]

  // Calculation
  const totalItemsPrice = orderDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 50;
  const grandTotal = totalItemsPrice + shippingCost;


  return (
    <div className='flex flex-col w-full max-w-5xl gap-8 px-4 mx-auto sm:px-8 lg:pl-36 outline-1'>
      <h1 className='text-4xl font-bold'>รายละเอียดคำสั่งซื้อ</h1>
      <table className='w-full max-w-5xl text-center bg-gray-100 rounded-lg *:text-sm'>
        <thead>
          <tr className='h-12 *:p-4 *:font-normal'>
            <th className='text-left w-30'>รายการสินค้า</th>
            <th className='text-left'></th>
            <th>ราคา</th>
            <th>จำนวน</th>
            <th>รวม</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map(item => (
            <tr className='border-t-1' key={item.id}>
              <td className='p-4 pr-0'><img className='rounded-2xl' src={item.image} alt={item.name} /></td>
              <td className='pl-4 text-left'><span className='font-bold'>{item.name}</span><br /><span>{item.itemVariant}</span></td>
              <td>฿{item.price}</td>
              <td>{item.quantity}</td>
              <td>฿{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='w-[75%] text-right'>ค่าขนส่ง:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-bold'>฿{shippingCost}</span></p>
      <hr />
      <p className='w-[75%] text-right'>ราคารวม:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-bold'>฿{grandTotal}</span></p>

    </div >
  )
}

export default OrderDetail