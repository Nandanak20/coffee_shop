import "../styles/ProductCard.css";

import { FaHeart, FaStar, FaPlus } from "react-icons/fa";

function ProductCard({ image, name, size, price }) {
  return (
    <div className="product-card">

      <div className="favorite">
        <FaHeart />
      </div>

      <img src={image} alt={name} className="product-image" />

      <div className="product-details">

        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span>4.9</span>
        </div>

        <h3>{name}</h3>

        <p>{size}</p>

        <div className="bottom-row">

          <h2>₹ {price}</h2>

          <button className="add-btn">
            <FaPlus />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;