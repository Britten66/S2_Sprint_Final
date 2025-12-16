import { useState } from "react";
import { useCart } from "../../Components/Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, handleRemoveCart, handleAddToCart } = useCart();

  const navigate = useNavigate();

  const cart = cartItems.map((items) => (
    <div className="cart-item" key={items.id}>
      <img src={items.image} alt={items.title} />
      <div className="item-info">
        <h3>{items.title}</h3>
        <p>C$ {items.price}</p>
        <p>{items.description}</p>
        <input className="qty-input" value={items.quantity} />
        <button className="add-btn" onClick={() => handleAddToCart(items)}>
          Add
        </button>
        <button className="remove-btn" onClick={() => handleRemoveCart(items)}>
          Remove
        </button>
      </div>
    </div>
  ));

  // Variable to add total price of items.
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  // console.log("Current car Items:", cartItems);

  return (
    <div className="main-cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items-left-container">
        {cart.length === 0 ? `Shopping cart is empty` : cart}
      </div>
      <div className="cart-right-container">
        <p>Estimated total</p> <p>C$ {totalPrice.toFixed(2)}</p>
        <p>Sales tax will be calculated during checkout</p>
        <button className="confirm-pur-btn">Confirm Purchase</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
