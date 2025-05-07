import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';
import { deleteProduct } from '../services/productApi.js';

const DeleteConfirmationDialog = ({ productId, productName, children }) => {
  // Function for handling product deletion
  const handleDeleteProduct = async () => {
    try {
      console.log('Deleting product:', productId);
      // Call the API service (currently mocked)
      const result = await deleteProduct(productId);
      console.log('Product deleted:', result);
      // In a real implementation, we would close the dialog on success
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>ยืนยันการลบสินค้า</SheetTitle>
          <SheetDescription>
            คุณต้องการลบสินค้า "{productName}" ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4">
          <p className="text-sm text-muted-foreground">
            รหัสสินค้า: {productId}
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">ยกเลิก</Button>
          </SheetClose>
          <Button variant="destructive" onClick={handleDeleteProduct}>
            ยืนยันการลบ
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DeleteConfirmationDialog;