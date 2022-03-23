import { Link, NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import logo from "assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth, useData } from "contexts";

function Navigation() {
  const { authToken } = useAuth();
  const { state } = useData();
  const navigate = useNavigate();
  const isUserLoggedIn = (to) =>
    authToken ? navigate(to) : navigate("/login");

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
                <FontAwesomeIcon
                  icon={faHeart}
                  className="icon-style"
                  onClick={() => isUserLoggedIn("/wishlist")}
                ></FontAwesomeIcon>
                {authToken && state.wishlist.length > 0 && (
                  <span className="badge-icon badge-number badge-right badge-lg">
                    {state.wishlist.length}
                  </span>
                )}
              </div>
            </div>
            <div className="nav-item nav-icon">
              <div className="badge">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="icon-style"
                  onClick={() => isUserLoggedIn("/cart")}
                ></FontAwesomeIcon>
                {authToken && state.cart.length > 0 && (
                  <span className="badge-icon badge-number badge-right badge-lg">
                    {state.cart.length}
                  </span>
                )}
              </div>
            </div>
            <div className="nav-item nav-icon icon-person">
              <FontAwesomeIcon
                icon={faUser}
                className="icon-style"
                onClick={() => isUserLoggedIn("/profile")}
              ></FontAwesomeIcon>
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
    </>
  );
}

export { Navigation };
