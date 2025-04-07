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
  priceId: string; // The Stripe price ID
}

interface CartContextType {
  subscription: Subscription | null;
  cart: Product[];
  setCart: (cart: Product[]) => void;
  platform: string | null; // ✅ Independent platform field
  setSubscription: (subscription: Subscription) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updatePlatform: (platform: string) => void; // ✅ Function to update platform
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [platform, setPlatform] = useState<string | null>(null); // ✅ Independent platform state

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updatePlatform = (platform: string) => {
    setPlatform(platform);
  };

  const clearCart = () => {
    setCart([]);
    setPlatform(null); // ✅ Resets platform when clearing the cart
  };

  return (
    <CartContext.Provider
      value={{
        subscription,
        cart,
        setCart,
        platform,
        setSubscription,
        addToCart,
        removeFromCart,
        updatePlatform,
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
