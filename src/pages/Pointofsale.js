"use client";
import { useState } from "react";
import FoodSection from "../components/FoodSection";
import BillingSection from "../components/BillingSection";
import "./Pointofsale.css"



const Pointofsale = () => {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All categories")

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setCart(
      cart.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    )
  }

  return (
    <div className="app-container">
      
      <div className="content-wrapper">
        <FoodSection
          addToCart={addToCart}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <BillingSection
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          updateQuantity={updateQuantity}
        />
      </div>
      
      
    </div>
  );
};

export default Pointofsale;