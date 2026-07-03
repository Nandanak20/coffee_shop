import "../styles/MenuCard.css";
import { FaStar, FaShoppingCart } from "react-icons/fa";

function MenuCard({ image, name, description, price }) {
  return (
    <div className="menu-card">

      <div className="menu-image">

        <img
          src={image}
          alt={name}
        />

      </div>

      <div className="menu-content">

        <h3>{name}</h3>

        <p>{description}</p>

        <div className="rating">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span>5.0</span>

        </div>

        <div className="price-row">

          <h2>{price}</h2>

          <button className="cart-btn">

  <FaShoppingCart className="cart-icon" />

  Add to Cart

</button>

        </div>

      </div>

    </div>
  );
}

export default MenuCard;