import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getUserOrders } from "../services/orderService";
//import orderHistories from '../data/mockOrderHistory';


const formatThaiDate = (dateString) => {
  if (!dateString) {
        return "-";
    }

  try {
    const date = new Date(dateString);
    const thaiMonths = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    const day = date.getDate();
    const month = thaiMonths[date.getMonth()];
    const year = date.getFullYear() + 543;

    return `${day} ${month} ${year}`;
  } catch (error) {
        console.error("รูปแบบวันที่ไม่ถูกต้อง:", error);
        return "วันที่ไม่ถูกต้อง";
  }
};

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getUserOrders();
        console.log("data ที่ได้จาก getUserOrders:", data); // ✅ เพิ่มตรงนี้
        setOrders(data);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการโหลดคำสั่งซื้อ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className='flex flex-col w-full max-w-4xl px-4 mb-20 mr-4'>
      <h1 className='hidden mb-8 text-4xl font-bold sm:block'>การซื้อของฉัน</h1>

      {loading ? (
        <p>กำลังโหลด...</p>
      ) : !Array.isArray(orders) || orders.length === 0 ? (
        <p>ไม่มีประวัติการสั่งซื้อ</p>
      ) : (
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
          {orders.map((item) => (
            <tr className='border-t-1' key={item._id}>
              <td className='py-8 '>{item.orderId}</td>
              <td >{formatThaiDate(item.createdAt)}</td>
              <td >{item.stateVariant}</td>
              <td >฿{(item.totalAmount + (item.deliveryFee || 0)).toFixed(2)}</td>
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
      )}
    </div >
  )
};

export default OrderHistory;