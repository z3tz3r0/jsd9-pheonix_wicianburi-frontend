import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  PencilIcon,
  TrashIcon
} from 'lucide-react';
import React from 'react';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import EditProductDialog from './EditProductDialog';

const ProductTable = ({ products = [] }) => {
  // Function to get the price range or first variant price
  const getPriceDisplay = (variants) => {
    if (!variants || variants.length === 0) return 'N/A';

    if (variants.length === 1) {
      return `${variants[0].price} บาท`;
    }

    // Get min and max prices
    const prices = variants.map(v => v.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return `${minPrice} - ${maxPrice} บาท`;
  };

  return (
    <div className="w-full overflow-auto border rounded-md">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>รหัสสินค้า</TableHead>
            <TableHead>ชื่อสินค้า</TableHead>
            <TableHead>ประเภท</TableHead>
            <TableHead>ราคา</TableHead>
            <TableHead>ภูมิภาค</TableHead>
            <TableHead className="text-center">การจัดการ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="py-6 text-center">
                ไม่พบข้อมูลสินค้า
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.product_id || product.productId}>
                <TableCell>{product.product_id || product.productId}</TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{getPriceDisplay(product.variants)}</TableCell>
                <TableCell>{product.region || 'ไม่ระบุ'}</TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <EditProductDialog product={product}>
                      <Button variant="ghost" size="icon" title="แก้ไข">
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                    </EditProductDialog>
                    <DeleteConfirmationDialog productId={product.product_id || product.productId} productName={product.name}>
                      <Button variant="ghost" size="icon" title="ลบ">
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </DeleteConfirmationDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;