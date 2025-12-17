import { useEffect } from "react";
import { useCart } from "../../Components/Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, handleRemoveCart, handleAddToCart } = useCart();

  // const navigate = useNavigate();

  // SNOWFALL EFFECT - Creates falling snowflakes when component loads
  useEffect(() => {
    // CREATE SNOWFLAKE - Generates one falling snowflake
    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

      const snowfallContainer = document.querySelector(".snowfall");
      if (snowfallContainer) {
        snowfallContainer.appendChild(snowflake);
      }

      // Remove snowflake after animation ends to prevent overflow
      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    }

    // Create new snowflake every 100ms
    const snowInterval = setInterval(createSnowflake, 100);

    // Cleanup when component unmounts
    return () => {
      clearInterval(snowInterval);
    };
  }, []);

  // Map each item(s) to display in the shopping cart.
  const cart = cartItems.map((items) => (
    <div className="cart-item" key={items.id}>
      <img src={items.image} alt={items.title} />

      <div className="item-details">
        <h3>{items.title}</h3>
        <p>{items.description}</p>
      </div>

      <div className="item-price">
        <p>C$ {items.price}</p>
      </div>

      <div className="item-action">
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
    <>
      {/* PNG BACKGROUND SNOW - Animated background pattern */}
      <div className="snow"></div>

      {/* FALLING SNOWFLAKES - Individual falling flakes */}
      <div className="snowfall"></div>
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
    </>
  );
};

export default ShoppingCart;
