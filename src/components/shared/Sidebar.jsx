import { Link } from "react-router-dom";
import "./nav.css";
function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link to="/" className="sidenav-item">
        Home
      </Link>
      <Link to="/products" className="sidenav-item">
        Buy Now
      </Link>
      <Link to="/signup" className="sidenav-item">
        Profile
      </Link>
      <Link to="/signup" className="sidenav-item">
        Addresses
      </Link>
      <Link to="/signup" className="sidenav-item">
        Settings
      </Link>
    </div>
  );
}

export { Sidebar };
