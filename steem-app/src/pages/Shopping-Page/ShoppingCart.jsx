import { useState } from "react";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const [cart, setCart] = useState(0);
  const onClick = () => {
    setCart(cart + 1);
  };

  return (
    <>
      <button className="cart-btn" onClick={onClick}>
        Cart:{cart}
      </button>
      <div className="cart-items">
        {cart === 0
          ? "Shopping Cart is Empty"
          : `You have ${cart} item(s) in your cart`}
      </div>
    </>
  );
};

export default ShoppingCart;
