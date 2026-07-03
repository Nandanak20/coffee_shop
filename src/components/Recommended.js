import "../styles/Recommended.css";
import ProductCard from "./ProductCard";

import coffee1 from "../assets/images/coffee1.jpg";
import coffee2 from "../assets/images/coffee2.jpg";
import coffee3 from "../assets/images/coffee3.jpg";
import coffee4 from "../assets/images/coffee4.jpg";

const products = [
  {
    id: 1,
    image: coffee1,
    name: "Java Chip Frappuccino",
    size: "Tall (354 ml)",
    price: "456.75",
  },
  {
    id: 2,
    image: coffee2,
    name: "Cappuccino",
    size: "Grande (473 ml)",
    price: "320",
  },
  {
    id: 3,
    image: coffee3,
    name: "Cold Coffee",
    size: "Tall (354 ml)",
    price: "299",
  },
  {
    id: 4,
    image: coffee4,
    name: "Caramel Macchiato",
    size: "Grande (473 ml)",
    price: "399",
  },
];

function Recommended() {
  return (
    <section className="recommended">
      <h2>Recommended for You</h2>

      <div className="recommended-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            size={product.size}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Recommended;