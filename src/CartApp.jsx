import React, { createContext, useState, useContext, useEffect } from 'react';
import { carts } from "./data/mockCarts.js";

// Create cart context
const CartApp = createContext();

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
    const existingItem = cart.find(item => item.id === product.id);

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
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
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
    <CartApp.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getSubtotal
    }}>
      {children}
    </CartApp.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartApp);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};