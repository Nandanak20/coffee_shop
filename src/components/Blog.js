import "../styles/Blog.css";
import blogImage from "../assets/images/blog.jpg";

function Blog() {
  return (
    <section className="blog">

      <div className="blog-header">
        <h2>Learn More About Coffee</h2>
        <button className="view-btn">Discover More</button>
      </div>

      <div className="blog-card">

        <img
          src={blogImage}
          alt="Coffee Blog"
          className="blog-image"
        />

        <div className="blog-overlay">

          <span className="blog-tag">
            Coffee Culture
          </span>

          <h1>
            Art & Science Of Coffee Brewing
          </h1>

          <p>
            Discover brewing techniques, coffee beans,
            roasting methods, and everything that makes
            every Starbucks cup special.
          </p>

          <button className="learn-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Blog;