import "../styles/About.css";
import banner from "../assets/images/about-banner.jpg";

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="about-overlay">

        <h1>About Coffee Cafe</h1>

        <p>
          Brewing Happiness, One Cup at a Time.
          <br />
          Experience handcrafted coffee, delicious treats,
          and memorable moments with every visit.
        </p>


      </div>
    </section>
  );
}

export default AboutHero;