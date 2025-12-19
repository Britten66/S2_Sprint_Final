// importing navigation between pages via router
import { useNavigate } from "react-router-dom";

//adding useState and useEffect
import { useState, useEffect } from "react";
import "./landing.css";

// featured games here

// this is a hard coded section with images linked by https


// landing page with navigation
function LandingPage() {
  const navigate = useNavigate();
  // current index set state = 0
  const [currentIndex, setCurrentIndex] = useState(0);

const [featuredGames, setFeaturedGames] = useState([]);
const [loading, setLoading] = useState(true);
const [isPaused, setIsPaused] = useState(false);
// Fetch featured games from API
useEffect(() => {
  const fetchFeaturedGames = async () => {
    try {
      const response = await fetch("https://sprint-final-endpoint.onrender.com/featuredGames");
      const data = await response.json();
      setFeaturedGames(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch featured games:", err);
      setLoading(false);
    }
  };

  fetchFeaturedGames();
}, []);

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
      }, 10000);
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
      prev === featuredGames.length - 1 ? 0 : prev + 1
    );
  };
  // like this 4 === 4 ? (loops back)
  // since 4 is the end

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      // HERE if we are on the FIRST slide we are going to loop to the last slide ( - 1 )
      // otherwise it just will subtract 1
      // usign the :
      prev === 0 ? featuredGames.length - 1 : prev - 1
    );
  };

  //0 === 0  = YES (loops to end) = 4
  // this is good practice because it keeps everything up to the most recent state increasing efficiency
useEffect(() => {
  if (isPaused || featuredGames.length === 0) return;  // Add the || check

  const interval = setInterval(() => {
    nextSlide();
  }, 3000);

  return () => clearInterval(interval);
}, [isPaused, featuredGames.length]); 


if (loading || featuredGames.length === 0) {
  return (
    <>
      <div className="snow"></div>
      <div className="snowfall"></div>
      <div className="landing-page">
        <section className="hero">
          <h2>Welcome</h2>
          <p>Loading...</p>
        </section>
      </div>
    </>
  );
}
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
                &larr;
              </button>

              <div className="carousel-content">
                <img
                  className="game-image"
                  src={featuredGames[currentIndex].image}
                  alt={featuredGames[currentIndex].name}
                />
                <h3>{featuredGames[currentIndex].name}</h3>
                <p>Recent Rating: {featuredGames[currentIndex].rating}/5</p>
              </div>

              <button className="carousel-btn" onClick={nextSlide}>
                <i className="fas">&rarr;</i>
              </button>
            </div>

            <div className="dots">
              {featuredGames.map((_, index) => (
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
