import { useEffect } from "react";
import GameCard from "../../Components/GameCard/GameCard.jsx";
import { useCart } from "../../Components/Context/CartContext.jsx";
import "./store.css";

function StorePage() {
  const { handleAddToCart } = useCart();
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
          <GameCard
            image="/assets/Images/barkraider.png"
            title="Bark Raiders"
            description="-New Release-"
            price={58.99}
            onAddToCart={() =>
              handleAddToCart({ id: "1", name: "Bark Raiders", price: 58.99 })
            }
          />

          <GameCard
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg"
            title="Baldur's Gate 3"
            description="Gather your party and return to the Forgotten Realms"
            price={59.99}
          />

          <GameCard
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
            title="Elden Ring"
            description="An epic action RPG adventure in a vast open world"
            price={59.99}
          />

          <GameCard
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg"
            title="Dota 2"
            description="The most-played game on Steam"
            price={0.0}
          />
        </div>
      </div>
    </>
  );
}

export default StorePage;
