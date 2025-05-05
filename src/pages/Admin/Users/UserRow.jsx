import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from "@/components/ui/table";
import React from 'react';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import EditUserDialog from './EditUserDialog';

const UserRow = ({ user, onUserUpdated, onUserDeleted }) => {
  return (
    <TableRow key={user._id}>
      <TableCell className="font-medium">{user._id}</TableCell>
      <TableCell>{user.firstName}</TableCell>
      <TableCell>{user.lastName}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.Phone}</TableCell>
      <TableCell>{user.isMember ? 'ใช่' : 'ไม่ใช่'}</TableCell>
      <TableCell>{user.isVerified ? 'ใช่' : 'ไม่ใช่'}</TableCell>
      <TableCell className="text-right">
        <EditUserDialog user={user} onUserUpdated={onUserUpdated}>
          <Button variant="ghost" size="sm" className="mr-2">แก้ไข</Button>
        </EditUserDialog>
        <DeleteConfirmationDialog user={user} onUserDeleted={onUserDeleted}>
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">ลบ</Button>
        </DeleteConfirmationDialog>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;