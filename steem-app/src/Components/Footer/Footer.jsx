import { useEffect, useState } from "react";
import "./footer.css";

function Footer() {
  // State to track buildup height and clearing status
  const [buildupHeight, setBuildupHeight] = useState(0);
  const [isClearing, setIsClearing] = useState(false);

  // SNOW BUILDUP - Gradually grows snow on footer
  useEffect(() => {
    function simulateBuildup() {
      setBuildupHeight((prev) => {
        // Max buildup to 150px
        if (prev >= 150) {
          return prev;
        }
        return prev + 0.5; // Increase this value to build up snow faster
      });
    }

    const buildupInterval = setInterval(simulateBuildup, 500);

    // Cleanup when component unmounts
    return () => {
      clearInterval(buildupInterval);
    };
  }, []);

  // CLEAR SNOW - Shovel button functionality
  const clearSnow = () => {
    setIsClearing(true);
    // Animate clearing (fade out quickly)
    const clearingInterval = setInterval(() => {
      // CHANGED THIS LINE
      setBuildupHeight((prev) => {
        if (prev <= 0) {
          clearInterval(clearingInterval); // CHANGED THIS LINE
          setIsClearing(false);
          return 0;
        }
        return prev - 5; // Clear faster than it builds
      });
    }, 50);
  };

  return (
    <footer className="snow-footer">
      {/* SHOVEL BUTTON - Clears accumulated snow */}
      <button
        className="shovel-btn"
        onClick={clearSnow}
        disabled={isClearing || buildupHeight === 0}
        title="Clear the snow!"
      >
        <img
          src="/assets/Images/shovel.png"
          alt="Shovel"
          className="shovel-img"
        />
      </button>

      {/* ACCUMULATED SNOW - Grows from bottom */}
      <div className="buildup" style={{ height: `${buildupHeight}px` }}></div>

      {/* DECORATIVE SNOW PILE - Static lumpy snow */}
      <div className="snow-pile"></div>

      <div className="footer-content">
        <p>© 2025 Semester Final </p>
      </div>
    </footer>
  );
}

export default Footer;
