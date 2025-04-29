import React from 'react';
import { Link } from 'react-router';

// import { useParams } from 'react-router';

const OrderHistory = () => {

  // const orderId = useParams();
  // console.log(orderId)

  // TODO: GET order details from data base
  // Required useEffect to fetch order details from data base using useParams

  // render order history using hard code

  const orderHistories = [
    {
      orderId: "1236",
      user_id: "1231345asdasbjasd21543",
      order_items: [
        { name: "ข้าวหอมมะลิ 105", variant: "1 กก.", price: 100, quantiy: 1 },
        { name: "ข้าวมันปู", variant: "1 กก.", price: 100, quantiy: 1 },
        { name: "ข้าวกล้อง", variant: "1 กก.", price: 100, quantiy: 1 },
      ],
      orderDate: "22 มีนาคม 2025",
      stateVariant: "ระหว่างการชำระ",
      totalPrice: 810,
    },
    {
      orderId: "1235",
      orderDate: "21 มีนาคม 2025",
      stateVariant: "ระหว่างการจัดส่ง",
      totalPrice: 810,
    },
    {
      orderId: "1234",
      orderDate: "20 มีนาคม 2025",
      stateVariant: "สำเร็จ",
      totalPrice: 810,
    },
  ]


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
              <td >{item.orderDate}</td>
              <td >{item.stateVariant}</td>
              <td >{item.totalPrice}</td>
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
}

export default OrderHistory;