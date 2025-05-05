import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell, TableRow } from "@/components/ui/table";
import React, { useState } from 'react';
import { updateOrderStatus } from '../services/orderApi';

const OrderRow = ({ order, onStatusUpdate }) => {
  const [currentStatus, setCurrentStatus] = useState(order.orderStatus);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus) => {
    setIsUpdating(true);
    try {
      await updateOrderStatus(order._id, newStatus);
      setCurrentStatus(newStatus);
      if (onStatusUpdate) {
        onStatusUpdate(order._id, newStatus);
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
      // Revert status on error or show an error message
      alert("Failed to update order status.");
    } finally {
      setIsUpdating(false);
    }
  };

  const statusOptions = [
    { value: "รอยืนยัน", label: "รอยืนยัน" },
    { value: "กำลังจัดส่ง", label: "กำลังจัดส่ง" },
    { value: "จัดส่งสำเร็จ", label: "จัดส่งสำเร็จ" },
  ];

  return (
    <TableRow key={order._id}>
      <TableCell className="font-medium">{order._id}</TableCell>
      <TableCell>{order.user ? order.user.name : 'N/A'}</TableCell>
      <TableCell>฿{order.totalPrice.toFixed(2)}</TableCell>
      <TableCell>
        <Select value={currentStatus} onValueChange={handleStatusChange} disabled={isUpdating}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="เลือกสถานะ" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell>{new Date(order.createdAt).toLocaleString('th-TH')}</TableCell>
      <TableCell className="text-right">
        {/* Add action buttons here, e.g., View Details */}
        <button className="mr-2 text-blue-600 hover:underline">ดูรายละเอียด</button>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;