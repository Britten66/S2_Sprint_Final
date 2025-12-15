import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Steem</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        {/* <li>
          <Link to="/ShoppingCart">Cart</Link>
        </li> */}
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
