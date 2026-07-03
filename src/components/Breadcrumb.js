import { Link } from "react-router-dom";
import "../styles/Gift.css";

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <Link to="/" className="home-link">
        Home
      </Link>

      <span className="separator"> &gt; </span>

      <span className="current-page">Gift Cards</span>
    </div>
  );
}

export default Breadcrumb;