import "./GameCard.css";

function GameCard({
  image,
  title,
  description,
  price,
  onAddToCart,
  isLoggedIn,
}) {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <div className="game-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="game-card-footer">
        <span>${price}</span>
        <button
          onClick={onAddToCart}
          className={!isLoggedIn ? "disabled" : ""}
          title={!isLoggedIn ? "Please login" : ""}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default GameCard;
