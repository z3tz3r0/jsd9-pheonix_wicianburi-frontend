import { useCallback, useEffect, useState } from "react";
import { carts } from "../data/mockCarts.js";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isInitialMount, setIsInitialMount] = useState(true);


  const initialFilter = {
    types: [],
    rating: "any",
    price: [0, 1000], // Gotta make sure prices in products are numbers for proper filtering
    region: "ทั้งหมด",
  }
  const initialSearchTerm = "";

  const [filters, setFilters] = useState(initialFilter);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart); // Parse first
        setCart(parsedCart); // Set state *after* successful parse
      } else {
        setCart(carts);
      }
    } catch (error) {
      // Log the specific error and the data that caused it
      console.error("Error parsing cart from localStorage:", error);
      console.error("Data that caused error:", localStorage.getItem("cart"));
      // console.log("Falling back to mock data due to error.");
      setCart(carts);
    }
  }, []); // Dependencies are empty, correct for load-once

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    // console.log(product)
    // // console.log(cart)
    const existingItem = cart.find(
      (item) => item.productId === product.productId && item.variantValue === product.variantValue
    );

    if (existingItem) {
      setCart(
        cart.map((prevItem) =>
          prevItem.productId === product.productId && prevItem.variantValue === product.variantValue
            ? { ...prevItem, quantity: prevItem.quantity + product.quantity }
            : prevItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: product?.quantity || 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId, variantLabel) => {
    setCart(cart.filter((item) => item.productId !== productId || item.variantLabel !== variantLabel));
  };

  const updateQuantity = (productId, variantLabel, newQuantity) => {
    const quantityValue = Math.max(0, Number(newQuantity) || 0);
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.productId === productId && item.variantLabel === variantLabel ? { ...item, quantity: quantityValue } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Get total number of items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate subtotal of all items in cart
  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Reset Filter
  const resetFilter = useCallback(() => {
    setFilters(initialFilter);
    setSearchTerm(initialSearchTerm);
  }, []);

  // Clear Cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getSubtotal,
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    resetFilter,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
