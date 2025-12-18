import { useState, useEffect } from "react";
import { useCart } from "../../Components/Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const {
    cartItems,
    handleRemoveCart,
    handleAddToCart,
    checkout,
    wallet,
    resetWallet,
  } = useCart();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const result = await checkout();

    if (result.success) {
      setMessage("Purchase successful.");
      setTimeout(() => navigate("/store"), 2000);
      setMessage(result.message);
    } else {
      setMessage(`${result.message}`);
    }

    setTimeout(() => setMessage(""), 3000);
  };

  const handleResetWallet = async () => {
    const result = await resetWallet();

    if (result.success) {
      setMessage(result.message);
    } else {
      setMessage(result.message);
    }

    setTimeout(() => setMessage(""), 3000);
  };

  // SNOWFALL EFFECT
  useEffect(() => {
    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

      const snowfallContainer = document.querySelector(".snowfall");
      if (snowfallContainer) {
        snowfallContainer.appendChild(snowflake);
      }

      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    }

    const snowInterval = setInterval(createSnowflake, 100);

    return () => {
      clearInterval(snowInterval);
    };
  }, []);

  const cart = cartItems.map((items) => (
    <div className="cart-item" key={items.id}>
      <img src={items.image} alt={items.title} />
      <div className="item-details">
        <h3>{items.title}</h3>
        <p>{items.description}</p>
      </div>
      <div className="item=price">
        <p>C$ {items.price}</p>
      </div>
      <div className="item-action">
        <input className="qty-input" value={items.quantity} readOnly />
        <button className="add-btn" onClick={() => handleAddToCart(items)}>
          Add
        </button>
        <button className="remove-btn" onClick={() => handleRemoveCart(items)}>
          Remove
        </button>
      </div>
    </div>
  ));

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="snow"></div>
      <div className="snowfall"></div>

      <div className="main-cart-container">
        <h2>Shopping Cart</h2>

        {message && (
          <div
            style={{
              gridColumn: "span 2",
              textAlign: "center",
              padding: "10px",
              background:
                message.includes("successful") || message.includes("Synced")
                  ? "#4caf50"
                  : "#f44336",
              color: "white",
              borderRadius: "8px",
            }}
          >
            {message}
          </div>
        )}

        <div className="cart-items-left-container">
          {cart.length === 0 ? `Shopping cart is empty` : cart}
        </div>

        <div className="cart-right-container">
          <div className="wallet-header">
            <p>Wallet: C$ {wallet.toFixed(2)}</p>
            <button
              className="reset-wallet-btn"
              onClick={handleResetWallet}
              title="Reset Wallet to $200"
            >
              Reset Wallet
            </button>
          </div>
          <p>Total: C$ {totalPrice.toFixed(2)}</p>
          <p>Remaining: C$ {(wallet - totalPrice).toFixed(2)}</p>
          <p>Sales tax will be calculated during checkout</p>
          <button
            className="confirm-pur-btn"
            onClick={handleCheckout}
            disabled={totalPrice > wallet}
          >
            {totalPrice > wallet ? "Insufficient Funds" : "Confirm Purchase"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
