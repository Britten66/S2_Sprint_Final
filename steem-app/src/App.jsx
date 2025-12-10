import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/Landing-Page/landing.jsx";
import LoginPage from "./pages/Log-in-Page/login.jsx";
import ShoppingCart from "./pages/Shopping-Page/ShoppingCart.jsx";
import "./App.css";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
