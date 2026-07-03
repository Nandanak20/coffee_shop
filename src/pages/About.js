import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";

import "../styles/About.css";

function About() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <section className="about-container">

        <div className="about-section">

          <div className="about-image">
            <img
              src={require("../assets/images/heritage.jpg")}
              alt="Our Heritage"
            />
          </div>

          <div className="about-content">
            <h2>Our Heritage</h2>

            <p>
              Coffee Cafe began with a simple dream of bringing people together
              over exceptional coffee. Every cup we serve reflects our passion
              for quality, craftsmanship, and creating memorable experiences.
            </p>

            <p>
              From freshly roasted beans to handcrafted beverages, our journey
              has always been about offering the perfect cup while creating a
              warm and welcoming place for everyone.
            </p>
          </div>

        </div>

        <div className="about-section reverse">

          <div className="about-image">
            <img
              src={require("../assets/images/coffeehouse.jpg")}
              alt="Coffeehouse"
            />
          </div>

          <div className="about-content">
            <h2>Coffeehouse Experience</h2>

            <p>
              Our cafés are designed to be more than coffee shops. They are
              places where people meet friends, study, work, celebrate, and
              relax while enjoying premium coffee.
            </p>

            <p>
              Every visit is crafted to make you feel comfortable with friendly
              service and a cozy atmosphere.
            </p>
          </div>

        </div>

        <div className="about-section">

          <div className="about-image">
            <img
              src={require("../assets/images/company.jpg")}
              alt="Company"
            />
          </div>

          <div className="about-content">
            <h2>Our Company</h2>

            <p>
              Coffee Cafe is committed to serving premium coffee while embracing
              innovation, sustainability, and customer satisfaction.
            </p>

            <p>
              We believe every customer deserves an exceptional experience,
              whether enjoying a quick coffee or spending hours with family and
              friends.
            </p>
          </div>

        </div>

      </section>

      <section className="mission-section">

        <h2>Mission & Vision</h2>

        <div className="mission-cards">

          <div className="mission-card">
            <h3>Our Mission</h3>

            <p>
              To inspire people by serving exceptional coffee and creating
              meaningful experiences every day.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>

            <p>
              To become the most loved coffee destination through quality,
              innovation, and hospitality.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Values</h3>

            <p>
              Quality • Community • Sustainability • Integrity • Customer First
            </p>
          </div>

        </div>

      </section>

      <section className="review-section">

        <h2>What Our Customers Say</h2>

        <div className="review-container">

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <h3>Anjali</h3>
            <p>
              "Amazing coffee and wonderful ambience. I love spending my
              evenings here."
            </p>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <h3>Rahul</h3>
            <p>
              "Excellent customer service and delicious beverages. Highly
              recommended!"
            </p>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <h3>Sneha</h3>
            <p>
              "Beautiful interiors, fresh coffee, and friendly staff. A perfect
              place to relax."
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;