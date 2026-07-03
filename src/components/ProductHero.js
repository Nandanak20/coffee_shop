import { FaCoffee } from "react-icons/fa";
import "../styles/Products.css";
import banner from "../assets/images/product-banner.jpg";

function ProductHero() {
  return (
    <section
      className="product-hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="product-overlay">

        <h1>Our Menu</h1>

        <p>
          Discover our handcrafted coffee, refreshing beverages,
          delicious desserts, and freshly prepared snacks.
        </p>


      </div>
    </section>
  );
}

export default ProductHero;