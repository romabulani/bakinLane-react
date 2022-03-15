import "./nav.css";
import logo from "../../assets/images/logo.webp";
import { useState } from "react";
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
          <img src={logo} alt="muffin-logo" className="logo" />
          <a href="#" className="brand-name">
            Bakin Lane
          </a>
          <a href="#" className="nav-item">
            Home
          </a>
          <a href="#" className="nav-item">
            Buy Now
          </a>
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
              <a href="#" rel="noreferrer" aria-label="wishlist">
                <div className="badge">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="icon-style"
                  ></FontAwesomeIcon>
                  <span className="badge-icon badge-number badge-right badge-lg">
                    3
                  </span>
                </div>
              </a>
            </div>
            <div className="nav-item nav-icon">
              <a href="#" rel="noreferrer" aria-label="cart">
                <div className="badge">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="icon-style"
                  ></FontAwesomeIcon>
                  <span className="badge-icon badge-number badge-right badge-lg">
                    2
                  </span>
                </div>
              </a>
            </div>
            <div className="nav-item nav-icon icon-person">
              <a href="#" rel="noreferrer" aria-label="user">
                <FontAwesomeIcon
                  icon={faUser}
                  className="icon-style"
                ></FontAwesomeIcon>
              </a>
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
