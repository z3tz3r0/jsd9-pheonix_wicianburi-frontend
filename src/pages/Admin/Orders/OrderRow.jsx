import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from 'react';
import { updateOrderStatus } from '../services/orderApi';
import SeeOrderDialog from "./SeeOrderDialog";

const OrderRow = ({ order }) => {
  const [currentStatus, setCurrentStatus] = useState(order.stateVariant);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus) => {
    setIsUpdating(true);
    try {
      await updateOrderStatus(order._id, newStatus);
      setCurrentStatus(newStatus);
    } catch (error) {
      console.error("Failed to update order status:", error);
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
      <TableCell>{order.userId.email}</TableCell>
      <TableCell>฿{order.totalAmount.toFixed(2)}</TableCell>
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
      <TableCell className="flex justify-center">
        {/* Add action buttons here, e.g., View Details */}
        <SeeOrderDialog order={order} />
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;