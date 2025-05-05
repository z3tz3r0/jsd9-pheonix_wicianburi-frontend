import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import React, { useState } from 'react';
import { deleteUser } from '../services/userApi';

const DeleteConfirmationDialog = ({ user, children, onUserDeleted }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteUser = async () => {
    try {
      console.log('Deleting user:', user._id);
      await deleteUser(user._id);
      console.log('User deleted:', user._id);
      setIsOpen(false); // Close the dialog on success
      if (onUserDeleted) {
        onUserDeleted(user._id); // Notify parent component
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      // TODO: Show an error message to the user
      alert("เกิดข้อผิดพลาดในการลบผู้ใช้");
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>ยืนยันการลบผู้ใช้</SheetTitle>
          <SheetDescription>
            คุณต้องการลบผู้ใช้ "{user?.firstName} {user?.lastName}" ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4">
          <p className="text-sm text-muted-foreground">
            รหัสผู้ใช้: {user?._id}
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">ยกเลิก</Button>
          </SheetClose>
          <Button variant="destructive" onClick={handleDeleteUser}>
            ยืนยันการลบ
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DeleteConfirmationDialog;