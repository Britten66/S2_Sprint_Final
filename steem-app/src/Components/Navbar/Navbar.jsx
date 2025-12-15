import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
          <Link to="/">
        <img src="assets/Images/home.png" alt="Home"className="home-icon" />
      </Link>
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
