import "../styles/GiftCard.css";

function GiftCard({ image, title, description }) {
  return (
    <div className="gift-card">

      <div className="gift-image">
        <img src={image} alt={title} />
      </div>

      <div className="gift-details">

        <span className="gift-tag">
          COFFE CAFE Gift
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <button className="gift-btn">
          Add Item
        </button>

      </div>

    </div>
  );
}

export default GiftCard;