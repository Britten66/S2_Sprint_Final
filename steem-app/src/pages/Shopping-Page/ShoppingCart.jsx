import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../Components/Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, handleRemoveCart, handleAddToCart } = useCart();

  const navigate = useNavigate();

  const cart = cartItems.map((items) => (
    <div className="cart-item" key={items.id}>
      <img src={items.image} alt={items.title} />
      <h3>{items.title}</h3>
      <p>C$ {items.price}</p>
      <p>{items.description}</p>
      <button onClick={() => handleAddToCart(items)}>+</button>
      <p>{items.quantity}</p>
      <button onClick={() => handleRemoveCart(items)}>-</button>
    </div>
  ));

  // Variable to add total price of items.
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  // console.log("Current car Items:", cartItems);

  // Variable to add total quantity of items.
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="main-cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items-left-container">
        {cart.length === 0 ? `Shopping cart is empty` : cart}
      </div>
      <div className="cart-right-container">
        <p>Estimated total</p> <p>C$ {totalPrice.toFixed(2)}</p>
        <p>Sales tax will be calculated during checkout</p>
        <button className="payment-form-btn">Continue to Payment</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
