import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react';
import { createUser } from '../services/userApi';
import UserForm from './UserForm';

const AddUserDialog = ({ onUserAdded }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddUser = async (userData) => {
    try {
      console.log('Adding user:', userData);
      const newUser = await createUser(userData);
      console.log('User added:', newUser);
      setIsOpen(false); // Close the dialog on success
      if (onUserAdded) {
        onUserAdded(newUser); // Notify parent component
      }
    } catch (error) {
      console.error('Error adding user:', error);
      // TODO: Show an error message to the user
      alert("เกิดข้อผิดพลาดในการเพิ่มผู้ใช้");
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusIcon className="w-4 h-4" /> เพิ่มผู้ใช้ใหม่
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md md:max-w-lg">
        <SheetHeader>
          <SheetTitle>เพิ่มผู้ใช้ใหม่</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <UserForm onSubmit={handleAddUser} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddUserDialog;