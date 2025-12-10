import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/Landing-Page/landing.jsx";
import LoginPage from "./pages/Log-in-Page/login.jsx";
<<<<<<< HEAD
import ShoppingCart from "./pages/Shopping-Page/ShoppingCart.jsx";
=======
import StorePage from "./pages/Store-Page/store.jsx";
>>>>>>> feature/home-page
import "./App.css";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
