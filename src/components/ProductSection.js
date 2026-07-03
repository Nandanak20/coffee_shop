import MenuCard from "./MenuCard";
import "../styles/Products.css";

function ProductSection({ title, products }) {
  return (
    <section className="product-section">

      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-line"></div>
      </div>

      <div className="products-grid">

        {products.map((product, index) => (
          <MenuCard
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}

      </div>

    </section>
  );
}

export default ProductSection;