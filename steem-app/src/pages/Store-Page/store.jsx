import { useEffect, useState } from "react";
import GameCard from "../../Components/GameCard/GameCard.jsx";
import { useCart } from "../../Components/Context/CartContext.jsx";
import "./store.css";

function StorePage() {
  const { handleAddToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount and listen for changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
    window.addEventListener("walletUpdate", checkLoginStatus);

    return () => {
      window.removeEventListener("walletUpdate", checkLoginStatus);
    };
  }, []);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://sprint-final-endpoint.onrender.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // SNOWFALL EFFECT - Creates falling snowflakes on store page
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

  // Check login and handle add to cart with validation
  const handleAddToCartWithCheck = (product) => {
    if (!isLoggedIn) {
      setErrorMessage("Please log in ");
      setTimeout(() => setErrorMessage(""), 4000);
      return;
    }

    handleAddToCart(product);
    setSuccessMessage(`${product.title} added to cart`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <>
      {/* SNOW EFFECTS - Background pattern and falling flakes */}
      <div className="snow"></div>
      <div className="snowfall"></div>

      <div className="store-page">
        <h1>Browse Games</h1>

        {errorMessage && (
          <div style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "15px",
            maxWidth: "600px",
            background: "#b1251bc0",
            color: "white",
            textAlign: "center",
            fontWeight: "500",
            zIndex: 1001,
            borderRadius: "8px"
          }}>
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "15px",
            maxWidth: "600px",
            background: "#1bb4f1b6",
            color: "white",
            textAlign: "center",
            fontWeight: "500",
            zIndex: 1001,
            borderRadius: "8px"
          }}>
            {successMessage}
          </div>
        )}

        <div className="games-grid">
          {loading ? (
            <h2>Loading games...</h2>
          ) : (
            products.map((product) => (
              <GameCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={() => handleAddToCartWithCheck(product)}
                isLoggedIn={isLoggedIn}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default StorePage;
