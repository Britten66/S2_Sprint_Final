import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Steam Clone</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
