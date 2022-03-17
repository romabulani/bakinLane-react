import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import logo from "../../assets/images/logo.webp";
import { Sidebar } from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <nav className="nav-container">
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="muffin-logo" className="logo" />
          </Link>
          <Link to="/" className="brand-name">
            Bakin Lane
          </Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item nav-active" : "nav-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-item nav-active" : "nav-item"
            }
          >
            Buy Now
          </NavLink>
        </div>
        <div className="nav-right">
          <div className="searchbar-container" aria-label="search">
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
            ></FontAwesomeIcon>
            <input
              type="search"
              placeholder="Search for Items"
              className="nav-search-field"
            />
          </div>
          <div className="nav-icons-container">
            <div className="nav-item nav-icon">
              <div className="badge">
                <Link to="/wishlist">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="icon-style"
                  ></FontAwesomeIcon>
                </Link>
                <span className="badge-icon badge-number badge-right badge-lg">
                  3
                </span>
              </div>
            </div>
            <div className="nav-item nav-icon">
              <div className="badge">
                <Link to="/cart">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="icon-style"
                  ></FontAwesomeIcon>
                </Link>
                <span className="badge-icon badge-number badge-right badge-lg">
                  2
                </span>
              </div>
            </div>
            <div className="nav-item nav-icon icon-person">
              <Link to="/signup">
                <FontAwesomeIcon
                  icon={faUser}
                  className="icon-style"
                ></FontAwesomeIcon>
              </Link>
            </div>
            <div
              className="nav-item nav-icon icon-hamburger"
              onClick={() => setSidebar(!sidebar)}
            >
              <a href="#" rel="noreferrer" aria-label="hamburger">
                <FontAwesomeIcon
                  icon={faBars}
                  className="icon-style"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile-searchbar-container" aria-label="search">
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
        ></FontAwesomeIcon>
        <input
          type="search"
          placeholder="Search for Items"
          className="nav-search-field"
        />
      </div>
      {sidebar && <Sidebar />}
    </>
  );
}

export { Navigation };
