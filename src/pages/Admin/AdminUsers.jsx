import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import React, { useEffect, useState } from 'react';
import { getAllUsers } from './services/userApi';
import AddUserDialog from './Users/AddUserDialog'; // Import AddUserDialog
import UserRow from './Users/UserRow'; // Import UserRow

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserAdded = () => {
    fetchUsers(); // Re-fetch users after a new user is added
  };

  const handleUserUpdated = () => {
    fetchUsers(); // Re-fetch users after a user is updated
  };

  const handleUserDeleted = () => {
    fetchUsers(); // Re-fetch users after a user is deleted
  };


  if (loading) {
    return <div>กำลังโหลดผู้ใช้...</div>;
  }

  if (error) {
    return <div>เกิดข้อผิดพลาดในการโหลดผู้ใช้: {error.message}</div>;
  }

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="flex items-center justify-between px-4 lg:px-6">
          <h2 className="text-lg font-semibold">การจัดการผู้ใช้</h2>
          <AddUserDialog onUserAdded={handleUserAdded} />{/* Use AddUserDialog */}
        </div>

        <div className="px-4 lg:px-6">
          <Table>
            <TableCaption>รายการผู้ใช้ทั้งหมด</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>รหัสผู้ใช้</TableHead>
                <TableHead>ชื่อ</TableHead>
                <TableHead>นามสกุล</TableHead>
                <TableHead>อีเมล</TableHead>
                <TableHead>เบอร์โทรศัพท์</TableHead>
                <TableHead>สมาชิก</TableHead>
                <TableHead>ยืนยันแล้ว</TableHead>
                <TableHead className="text-right">การดำเนินการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <UserRow key={user._id} user={user} onUserUpdated={handleUserUpdated} onUserDeleted={handleUserDeleted} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;