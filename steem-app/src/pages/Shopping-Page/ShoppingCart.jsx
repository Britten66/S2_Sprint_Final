import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const [cart, setCart] = useState(0);
  const onClick = () => {
    setCart(cart + 1);
  };

  return (
    <>
      <button className="cart-btn" onClick={onClick}>
        <FaCartPlus /> Cart {cart}
      </button>
      <div className="cart-items-left-container">
        {cart === 0 ? (
          <h2>Shopping Cart is Empty</h2>
        ) : (
          `You have ${cart} item(s) in your cart`
        )}
      </div>
      <div className="cart-right-container">
        <h3>Payment Options</h3>
        <p>Sales tax will be calculated during checkout where applicable</p>
        <button className="payment-options"></button>
      </div>
    </>
  );
};

export default ShoppingCart;
