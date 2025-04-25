import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { carts } from "../data/mockCarts.js";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
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
  const updateQuantity = (productId, newQuantity) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, newQuantity } : item
    ));
  };

  // Get total number of items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate subtotal of all items in cart
  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getSubtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};