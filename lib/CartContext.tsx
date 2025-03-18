"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface Subscription {
  type: "monthly" | "annual";
  category: "individual" | "portfolio";
  price: number;
}

interface Product {
  id: string;
  name: string;
  // price: number;
}

interface CartContextType {
  subscription: Subscription | null;
  cart: Product[];
  setSubscription: (subscription: Subscription) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  console.log("🚀 ~ CartProvider ~ subscription:", subscription);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        subscription,
        cart,
        setSubscription,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
