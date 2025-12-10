import { useNavigate } from "react-router-dom";
import "./landing.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Steem</h1>
        <p>Discover and browse your favorite games</p>
        <button className="cta-button" onClick={() => navigate("/store")}>
          Browse Games
        </button>
      </section>
    </div>
  );
}

export default LandingPage;
