import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CartButton from "../CartButton/CartButton";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on mount
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      const user = localStorage.getItem("username") || "";
      setIsLoggedIn(loggedIn);
      setUsername(user);
    };

    checkLoginStatus();
    window.addEventListener("walletUpdate", checkLoginStatus);

    return () => {
      window.removeEventListener("walletUpdate", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    // Clear all user data from localStorage
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("wallet");
    localStorage.removeItem("isLoggedIn");

    // Update state
    setIsLoggedIn(false);

    // Dispatch event to update other components
    window.dispatchEvent(new Event("walletUpdate"));

    // Navigate to home
    navigate("/");
  };

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
        {isLoggedIn && (
          <li>
            <span className="navbar-username">{username}</span>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
