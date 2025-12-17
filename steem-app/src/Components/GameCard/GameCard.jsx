import "./GameCard.css";

function GameCard({ image, title, description, price, onAddToCart }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <div className="game-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="game-card-footer">
        <span>${price}</span>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default GameCard;
