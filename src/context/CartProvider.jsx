import { useEffect, useState } from "react";
import { carts } from "../data/mockCarts.js";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isInitialMount, setIsInitialMount] = useState(true);

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart); // Parse first
        setCart(parsedCart); // Set state *after* successful parse
      } else {
        setCart(carts);
      }
    } catch (error) {
      // Log the specific error and the data that caused it
      console.error('Error parsing cart from localStorage:', error);
      console.error('Data that caused error:', localStorage.getItem('cart'));
      console.log("Falling back to mock data due to error.");
      setCart(carts);
    }
  }, []); // Dependencies are empty, correct for load-once

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
    } else {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
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
    const quantityValue = Math.max(0, Number(newQuantity) || 0);
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: quantityValue }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

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
    getSubtotal

  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};