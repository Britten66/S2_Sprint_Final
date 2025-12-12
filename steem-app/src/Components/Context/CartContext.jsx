import { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // useState to hold list of items
  const [cartItems, setCartItems] = useState([]);

  // AddToCart handler function
  const handleAddToCart = (productToAdd) => {
    console.log("Adding item:", productToAdd);
    setCartItems((prevItems) => {
      // Checking if the item already exists
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === productToAdd.id
      );

      if (existingItemIndex === -1) {
        // new Item (Index is -1)
        const newItem = {
          ...productToAdd, // Copies id, name, price, etc.
          quantity: 1,
        };
        // Return a new array with all previous items and the new item
        return [...prevItems, newItem];
      } else {
        // Create a copy of the entire array
        const updatedItems = [...prevItems];

        // Create a copy of the specific existing item object
        const existingItem = prevItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1, // Update the quantity property
        };

        // Replace the old item in the copied array with the updated copy
        updatedItems[existingItemIndex] = updatedItem;

        // Return the brand new array
        return updatedItems;
      }
    });
  };
  // Returning the Provider with the value object.
  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for better access
export const useCart = () => {
  return useContext(CartContext);
};
