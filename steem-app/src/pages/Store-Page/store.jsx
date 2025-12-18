import { useEffect, useState } from "react";import GameCard from "../../Components/GameCard/GameCard.jsx";
import { useCart } from "../../Components/Context/CartContext.jsx";
import "./store.css";

function StorePage() {
  const { handleAddToCart } = useCart();
  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

// Fetch products from API
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
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

  return (
    <>
      {/* SNOW EFFECTS - Background pattern and falling flakes */}
      <div className="snow"></div>
      <div className="snowfall"></div>

      <div className="store-page">
        <h1>Browse Games</h1>

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
        onAddToCart={() => handleAddToCart(product)}
      />
    ))
  )}
</div>
      </div>
    </>
  );
}

export default StorePage;
