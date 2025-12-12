// importing navigation between pages via router
import { useNavigate } from "react-router-dom";

//adding useState and useEffect
import { useState, useEffect } from "react";
import "./landing.css";

// featured games here
// this is a hard coded section with images linked by https
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

// landing page with navigation
function LandingPage() {
  const navigate = useNavigate();
  // current index set state = 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // SNOWFALL EFFECT - Creates falling snowflakes when component loads
  useEffect(() => {
    // CREATE SNOWFLAKE - Generates one falling snowflake
    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

      const snowfallContainer = document.querySelector(".snowfall");
      if (snowfallContainer) {
        snowfallContainer.appendChild(snowflake);
      }

      // Remove snowflake after animation ends to prevent overflow
      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    }

    // Create new snowflake every 100ms
    const snowInterval = setInterval(createSnowflake, 100);

    // Cleanup when component unmounts
    return () => {
      clearInterval(snowInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      //if game length = last slide look back to 0 OR just add one " : < - this is sneaky "
      prev === FEATURED_GAMES.length - 1 ? 0 : prev + 1
    );
  };
  // like this 4 === 4 ? (loops back)
  // since 4 is the end

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      // HERE if we are on the FIRST slide we are going to loop to the last slide ( - 1 )
      // otherwise it just will subtract 1
      // usign the :
      prev === 0 ? FEATURED_GAMES.length - 1 : prev - 1
    );
  };



  //0 === 0  = YES (loops to end) = 4
  // this is good practice because it keeps everything up to the most recent state increasing efficiency
const [isPaused, setIsPaused] = useState(false);
// 2. NEW EFFECT: Auto-scroll functionality
  useEffect(() => {
    // If paused, don't set the interval
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // <-- Change this number to speed up/slow down (3000 = 3 secs)

    // Clear interval on cleanup so we don't have multiple timers running
    return () => clearInterval(interval);
  }, [isPaused]);

  // inside this return statemetn is the content being displayed on the page
  // below will just contain the portion of the landing page with the intro and CTA to enter our store.

  return (
    <>
      {/* PNG BACKGROUND SNOW - Animated background pattern */}
      <div className="snow"></div>

      {/* FALLING SNOWFLAKES - Individual falling flakes */}
      <div className="snowfall"></div>

      <div className="landing-page">
        <section className="hero">
          <h2>Welcome</h2>
          <button className="cta-button" onClick={() => navigate("/store")}>
            Browse Games
          </button>

          <div className="carousel-wrapper">
            <h2>Featured Games</h2>
            <div className="carousel">
              <button className="carousel-btn" onClick={prevSlide}>
                	&#xf104;
              </button>

              <div className="carousel-content">
                <img
                  className="game-image"
                  src={FEATURED_GAMES[currentIndex].image}
                  alt={FEATURED_GAMES[currentIndex].name}
                />
                <h3>{FEATURED_GAMES[currentIndex].name}</h3>
                <p>Recent Rating: {FEATURED_GAMES[currentIndex].rating}/5</p>
              </div>

              <button className="carousel-btn" onClick={nextSlide}>
                	<i  class='fas'>&#xf105;</i>
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
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
