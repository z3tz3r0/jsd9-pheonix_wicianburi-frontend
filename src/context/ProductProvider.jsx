import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import { ProductContext } from "./ProductContext";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [prodLoading, setProdLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setProdLoading(true);
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setProdLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const value = {
    products,
    setProducts,
    prodLoading,
    setProdLoading,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
