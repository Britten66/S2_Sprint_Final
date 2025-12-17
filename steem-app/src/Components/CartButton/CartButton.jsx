import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./CartButton.css";

const CartButton = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Variable to add total quantity of items.
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      <button className="cart-btn" onClick={() => navigate("/ShoppingCart")}>
        <FaCartPlus /> View Cart{" "}
        {cartItems.length === 0 ? 0 : `(${totalItems})`}
      </button>
    </>
  );
};

export default CartButton;
