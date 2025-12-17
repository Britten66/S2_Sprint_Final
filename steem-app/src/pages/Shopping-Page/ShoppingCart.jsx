import { useState } from "react";
import { useCart } from "../../Components/Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, handleRemoveCart, handleAddToCart, checkout, wallet } = useCart();
 //adding message 
 const [message,setMessage] = useState()
  const navigate = useNavigate();


const handleCheckout = async () => {
  const result = await checkout();
  
  if (result.success) {
    setMessage(" Purchase successful.");
    setTimeout(() => navigate('/store'), 2000);
  } else {
    setMessage(`${result.message}`);
  }
  
  setTimeout(() => setMessage(""), 3000);
};



  const cart = cartItems.map((items) => (
    <div className="cart-item" key={items.id}>
      <img src={items.image} alt={items.title} />
      <div className="item-info">
        <h3>{items.title}</h3>
        <p>C$ {items.price}</p>
        <p>{items.description}</p>
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

  // Variable to add total price of items.
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  // console.log("Current car Items:", cartItems);

  return (
    <div className="main-cart-container">
      <h2>Shopping Cart</h2>
      {message && (
  <div style={{gridColumn: 'span 2', textAlign: 'center', padding: '10px', background: message.includes('✅') ? '#4caf50' : '#f44336', color: 'white', borderRadius: '8px'}}>
    {message}
  </div>
)}
      <div className="cart-items-left-container">
        {cart.length === 0 ? `Shopping cart is empty` : cart}
      </div>
      <div className="cart-right-container">
  <p>Wallet: C$ {wallet.toFixed(2)}</p>
  <p>Total: C$ {totalPrice.toFixed(2)}</p>
  <p>Remaining: C$ {(wallet - totalPrice).toFixed(2)}</p>
  <p>Sales tax will be calculated during checkout</p>
  <button 
    className="confirm-pur-btn"
    onClick={handleCheckout}
    disabled={totalPrice > wallet}
  >
    {totalPrice > wallet ? 'Insufficient Funds' : 'Confirm Purchase'}
  </button>
</div>
    </div>
  );
};

export default ShoppingCart;
