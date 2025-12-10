import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./landing.css";

const FEATURED_GAMES = [
  {
    id: 1,
    name: "Elden Ring",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Baldur's Gate 3",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Dota 2",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Hogwarts Legacy",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Starfield",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg",
    rating: 4.2,
  },
];

function LandingPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === FEATURED_GAMES.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? FEATURED_GAMES.length - 1 : prev - 1
    );
  };

  return (
    <div className="landing-page">
      
      <section className="hero">
        <h1>Steem</h1>
        <p>Your ultimate gaming platform</p>
        <button className="cta-button" onClick={() => navigate("/store")}>
          Browse Games
        </button>
      </section>

      
      <section className="featured">
        <h2>Featured Games</h2>
        <div className="carousel">
          <button className="carousel-btn" onClick={prevSlide}>
            ←
          </button>

          <div className="carousel-content">
            <img
              src={FEATURED_GAMES[currentIndex].image}
              alt={FEATURED_GAMES[currentIndex].name}
            />
            <h3>{FEATURED_GAMES[currentIndex].name}</h3>
            <p>⭐ {FEATURED_GAMES[currentIndex].rating}/5</p>
          </div>

          <button className="carousel-btn" onClick={nextSlide}>
            →
          </button>
        </div>

        
        <div className="dots">
          {FEATURED_GAMES.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>

  
      <section className="features"></section>
    </div>
  );
}

export default LandingPage;
