import React from 'react';
// import { useParams } from 'react-router';

const OrderDetail = () => {

  // const orderId = useParams();
  // console.log(orderId)

  // Trying render order history using hard code

  /* const orderDetails = [
    {
      id: 1,
      image: "../../public/assets/ข้าวหอมมะลิ กข15.webp",
      name: "ข้าวหอมมะลิ 105",
      itemVariant: 1,
      price: 100,
      quantity: 1,
      subtotal: this.price * this.quantity,
    },
    {
      id: 2,
      image: "../../public/assets/ข้าวมันปู.webp",
      name: "ข้าวมันปู",
      itemVariant: 1,
      price: 150,
      quantity: 2,
      subtotal: this.price * this.quantity,
    },
    {
      id: 3,
      image: "../../public/assets/ข้าวกล้อง.webp",
      name: "ข้าวกล้อง",
      itemVariant: 1,
      price: 120,
      quantity: 3,
      subtotal: this.price * this.quantity,
    },
  ] */

  // TODO: GET order details from data base


  return (
    <div className='flex gap-8 mx-auto max-w-7xl outline-1 **:outline-red-500 **:outline'>

      <div>
        <h1 className='text-4xl font-bold'>รายละเอียดคำสั่งซื้อ</h1>
        <table className='text-center w-xl'>
          <thead>
            <tr>
              <th className='outline-1'>รายการสินค้า</th>
              <th className='outline-1'></th>
              <th className='outline-1'>ราคาต่อชิ้น</th>
              <th className='outline-1'>จำนวน</th>
              <th className='outline-1'>ราคารวม</th>
            </tr>
          </thead>
          <tbody>
            {/* {orderDetails.map(item => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} /></td>
                <td><span>{item.name}</span><br /><span>{item.itemVariant}</span></td>
                <td>฿{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.subtotal}</td>
              </tr>
            ))} */}
            <tr>
              <td><img className='w-24 rounded-2xl' src="/assets/ข้าวหอมมะลิปทุมธานี.webp" /></td>
              <td><span>test</span><br /><span>test</span></td>
              <td>฿100</td>
              <td>1</td>
              <td>200</td>
            </tr>
          </tbody>
          <tfoot>
            <td>{""}</td>
            <td>{""}</td>
            <td>ค่าขนส่ง: <span>฿50</span></td>
            <td>{""}</td>
          </tfoot>
        </table>
        <hr />

      </div>

    </div>
  )
}

export default OrderDetail