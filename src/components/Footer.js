import "../styles/Footer.css";
import logo from "../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <img src={logo} alt="Starbucks Logo" />

          <p>
            Brewing happiness, one cup at a time.
          </p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>

        </div>

       

        <div className="footer-section">
          <h3>Responsibility</h3>
          <a href="/">Community</a>
          <a href="/">Diversity</a>
          <a href="/">Ethical Sourcing</a>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Contact Us</a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 COFFEE CAFE | Designed by Nandana K
      </p>

    </footer>
  );
}

export default Footer;