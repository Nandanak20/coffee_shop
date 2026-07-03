import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-container">
        <img
          src={logo}
          alt="Coffee Cafe Logo"
          className="logo"
        />
        <h2>COFFEE CAFE</h2>
      </div>

      {/* Navigation */}
      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/gift">Gift</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>

      </ul>

      {/* Search Box */}
      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Coffee..."
        />

      </div>

      {/* Profile */}
      <div className="profile">

        <FaUserCircle className="profile-icon" />

      </div>

    </nav>
  );
}

export default Navbar;