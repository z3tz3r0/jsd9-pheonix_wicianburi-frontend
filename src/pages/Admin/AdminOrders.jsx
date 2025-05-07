import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import React, { useEffect, useState } from 'react';
import OrderRow from './Orders/OrderRow'; // Import the new component
import { getAllOrders } from './services/orderApi';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        setOrders(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusUpdate = (orderId, newStatus) => {
    // This function can be used to update the state locally if needed,
    // or re-fetch orders after an update. For now, just a placeholder.
    console.log(`Order ${orderId} status updated to ${newStatus}`);
  };

  if (loading) {
    return <div>กำลังโหลดคำสั่งซื้อ...</div>;
  }

  if (error) {
    return <div>เกิดข้อผิดพลาดในการโหลดคำสั่งซื้อ: {error.message}</div>;
  }

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="flex items-center justify-between px-4 lg:px-6">
          <h2 className="text-lg font-semibold">การจัดการคำสั่งซื้อ</h2>
          {/* Potentially add filters or other controls here later */}
        </div>

        <div className="px-4 lg:px-6">
          <Table>
            <TableCaption>รายการคำสั่งซื้อล่าสุด</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>รหัสคำสั่งซื้อ</TableHead>
                <TableHead>ผู้ใช้</TableHead>
                <TableHead>ยอดรวม</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>สร้างเมื่อ</TableHead>
                <TableHead className="text-right">การดำเนินการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <OrderRow key={order._id} order={order} onStatusUpdate={handleStatusUpdate} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;