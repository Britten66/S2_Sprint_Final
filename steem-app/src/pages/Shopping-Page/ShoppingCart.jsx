import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  // setCartItems((prevItems) => {
  //   const newItem = {
      
  //     ...productToAdd,
  //     quantity: 1,
  //   };

  //   return [
  //     /* What goes here to return a NEW array? */
  //   ];
  // });
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
