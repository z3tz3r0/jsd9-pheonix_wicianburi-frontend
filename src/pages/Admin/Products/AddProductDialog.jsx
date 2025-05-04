import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import { addProduct } from '../services/productApi.js';
import ProductForm from './ProductForm';

const AddProductDialog = ({ children }) => {
  // Function for handling product addition
  const handleAddProduct = async (productData) => {
    try {
      console.log('Adding product:', productData);
      // Call the API service (currently mocked)
      const result = await addProduct(productData);
      console.log('Product added:', result);
      // In a real implementation, we would close the dialog on success
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children || (
          <Button className="flex items-center gap-2">
            <PlusIcon className="w-4 h-4" /> เพิ่มสินค้า
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md md:max-w-lg">
        <SheetHeader>
          <SheetTitle>เพิ่มสินค้าใหม่</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <ProductForm onSubmit={handleAddProduct} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddProductDialog;