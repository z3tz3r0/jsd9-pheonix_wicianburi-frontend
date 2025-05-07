import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import React, { useState } from 'react';
import { updateUser } from '../services/userApi';
import UserForm from './UserForm';

const EditUserDialog = ({ user, children, onUserUpdated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdateUser = async (userData) => {
    try {
      console.log('Updating user:', user._id, userData);
      const updatedUser = await updateUser(user._id, userData);
      console.log('User updated:', updatedUser);
      setIsOpen(false); // Close the dialog on success
      if (onUserUpdated) {
        onUserUpdated(updatedUser); // Notify parent component
      }
    } catch (error) {
      console.error('Error updating user:', error);
      // TODO: Show an error message to the user
      alert("เกิดข้อผิดพลาดในการอัปเดตผู้ใช้");
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md md:max-w-lg">
        <SheetHeader>
          <SheetTitle>แก้ไขผู้ใช้: {user?.firstName} {user?.lastName}</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <UserForm initialData={user} onSubmit={handleUpdateUser} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditUserDialog;