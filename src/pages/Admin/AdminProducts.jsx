import { useEffect, useState } from 'react';
import AddProductDialog from './Products/AddProductDialog';
import ProductTable from './Products/ProductTable';
import { getAllProducts } from './services/productApi';

const AdminProducts = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError(err);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [])

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="flex items-center justify-between px-4 lg:px-6">
          <h2 className="text-lg font-semibold">รายการสินค้าทั้งหมด</h2>
          <AddProductDialog />
        </div>

        <div className="px-4 lg:px-6">
          <ProductTable products={products} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;