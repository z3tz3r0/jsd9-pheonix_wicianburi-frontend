import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';
import { updateProduct } from '../services/productApi.js';
import ProductForm from './ProductForm';

const EditProductDialog = ({ product, children }) => {
  // Function for handling product update
  const handleUpdateProduct = async (productData) => {
    try {
      const productId = product?.product_id || product?.productId;
      console.log('Updating product:', productData);
      // Call the API service (currently mocked)
      const result = await updateProduct(productId, productData);
      console.log('Product updated:', result);
      // In a real implementation, we would close the dialog on success
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto sm:max-w-md md:max-w-lg">
        <SheetHeader>
          <SheetTitle>แก้ไขสินค้า: {product?.name}</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <ProductForm product={product} onSubmit={handleUpdateProduct} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditProductDialog;