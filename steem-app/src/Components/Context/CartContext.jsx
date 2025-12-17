import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wallet, setWallet] = useState(0);

  // Load wallet from localStorage and set up listeners
  useEffect(() => {
    // 1. Initial Load
    const savedWallet = localStorage.getItem("wallet");
    if (savedWallet) {
      setWallet(parseFloat(savedWallet));
    }

    // 2. Define the handler inside useEffect to keep it scoped
    const handleStorageChange = () => {
      const newWallet = localStorage.getItem("wallet");
      if (newWallet) {
        setWallet(parseFloat(newWallet));
      }
    };

    // 3. Add Listeners
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('walletUpdate', handleStorageChange);

    // 4. CLEANUP: This runs when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('walletUpdate', handleStorageChange);
    };
  }, []); // Empty dependency array ensures this only runs once

  // Reset Wallet function
  const resetWallet = async () => {
    const userId = localStorage.getItem("userId");
    const resetAmount = 200; // Fixed amount

    try {
      await fetch(`http://localhost:3001/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet: resetAmount }) 
      });

      setWallet(resetAmount); 
      localStorage.setItem("wallet", resetAmount); 

      // Trigger custom event so other components know to update
      window.dispatchEvent(new Event('walletUpdate'));

      return { success: true, message: "Wallet reset to $200!" };
    } catch (err) {
      console.error("Reset failed:", err);
      return { success: false, message: "Reset failed" };
    }
  };

  // AddToCart function
  const handleAddToCart = (productToAdd) => {
    console.log("Adding item:", productToAdd);
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === productToAdd.id
      );

      if (existingItemIndex === -1) {
        const newItem = {
          ...productToAdd,
          quantity: 1,
        };
        return [...prevItems, newItem];
      } else {
        const updatedItems = [...prevItems];
        const existingItem = prevItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      }
    });
  };

  // RemoveCart function
  const handleRemoveCart = (product) => {
    if (product.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  // Checkout function 
  const checkout = async () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const userId = localStorage.getItem("userId");

    if (total > wallet) {
      return { success: false, message: "Insufficient funds" };
    }

    try {
      const newWallet = wallet - total;

      await fetch(`http://localhost:3001/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet: newWallet }),
      });

      setWallet(newWallet);
      localStorage.setItem("wallet", newWallet);
      setCartItems([]);

      return { success: true, message: "Purchase successful!" };
    } catch (err) {
      return { success: false, message: "Purchase failed" };
    }
  };

  return (
    <CartContext.Provider
      value={{ 
        cartItems, 
        wallet, 
        handleAddToCart, 
        handleRemoveCart, 
        checkout,
        resetWallet  // Add resetWallet to the context value
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};