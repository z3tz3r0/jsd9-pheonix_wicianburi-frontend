import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { carts } from "../data/mockCarts.js";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carts);

  const [filters, setFilters] = useState({
      tags: [],
      rating: "any",
      price: [50, 1000], // Gotta make sure prices in products are numbers for proper filtering
      region: "ทั้งหมด",
    });
  

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        // Use sample data for demonstration
        setCart(carts);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      setCart(carts);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(prevItem =>
        prevItem.id === product.id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update item quantity
  // const updateQuantity = (productId, newQuantity) => {
  //   setCart(cart.map(item =>
  //     item.id === productId ? { ...item, newQuantity } : item
  //   ));
  // };

  const updateQuantity = (productId, newQuantity) => {
    const newQuantitys = parseInt(newQuantity, 10);
    if (isNaN(newQuantitys) || newQuantitys < 1) return;
    setCart(cart.map(item =>
      item.id === productId ? { ...item, newQuantity:newQuantitys } : item
    ));
  }; //ต้องเช็คว่าปุ่ม ที่กดบวก หรือ ลบ แล้วทำตามนั้น ต้องรับ parameter?? มา

  // Get total number of items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate subtotal of all items in cart
  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getSubtotal,
    filters,
    setFilters

  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};