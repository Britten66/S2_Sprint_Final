import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (addItem) => {
    setCartItems((prevItems) => {
      // Checking if the item already exists
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === addItem.id
      );
      if (existingItemIndex === -1) {
        // new Item (Index is -1)
        const newItem = {
          ...addItem, // Copies id, name, price, etc.
          quantity: 1,
        };
        // Return a new array with all previous items + the new item
        return [...prevItems, newItem];
      } else {
        // EXISTING Item (Index is 0 or greater)

        // Creating a copy of the entire array
        const updatedItems = [...prevItems];

        // Creating a copy of the specific existing item object
        const existingItem = prevItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1, // Updating the quantity property
        };

        // Replacing the old item in the copied array with the updated copy
        updatedItems[existingItemIndex] = updatedItem;

        // Return the brand new array
        return updatedItems;
      }
    });
  };

  const onClick = () => {
    setCart(cart + 1);
  };

  return (
    <div className="main-cart-container">
      <button className="cart-btn" onClick={onClick}>
        <FaCartPlus /> Cart {cart}
      </button>
      <h2>Shopping Cart</h2>
      <div className="cart-items-left-container">
        {cart === 0
          ? `Shopping cart is empty`
          : `You have ${cart} item(s) in your cart`}
      </div>
      <div className="cart-right-container">
        <p>Estimated total</p> <p>C$ {cart}</p>
        <p>Sales tax will be calculated during checkout</p>
        <button className="payment-form-btn">Countinue to Payment</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
