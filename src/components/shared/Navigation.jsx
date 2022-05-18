import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth, useData, useProductsData } from "contexts";
import logo from "assets/images/logo.webp";
import "./nav.css";
import { useEffect, useRef, useState } from "react";

function Navigation() {
  const { authToken } = useAuth();
  const { state, searchBarText, setSearchBarText, dispatch } = useData();
  const [searchResult, setSearchResult] = useState([]);
  const searchKeywords = [
    "Red Velvet",
    "Cake",
    "Muffin",
    "Chocolate",
    "Pineapple",
    "Vanilla",
    "Strawberry",
  ];
  const timerId = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (searchBarText)
        setSearchResult(
          searchKeywords.filter((word) =>
            word.toLowerCase().includes(searchBarText.trim().toLowerCase())
          )
        );
      else setSearchResult([]);
    }, 300);

    return () => clearTimeout(timerId.current);
  }, [searchBarText]);

  const searchHandler = (e, word) => {
    if (e) e.preventDefault();
    if (searchBarText.trim().length > 0) {
      dispatch({
        type: "SET_SEARCH_TEXT",
        payload: { searchText: word ? word : searchBarText },
      });
      navigate({
        pathname: "/products",
        search: `query=${word ? word : searchBarText.trim()}`,
      });
    }
  };
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
          <form onSubmit={searchHandler} className="searchbar-container">
            <input
              type="search"
              placeholder="Search for Items"
              className="nav-search-field"
              value={searchBarText}
              onChange={(e) => setSearchBarText(e.target.value)}
            />
            <button className="btn-no-decoration" type="submit">
              <FontAwesomeIcon icon="search" className="search-icon" />
            </button>
            <div className="suggestions">
              {searchResult.length > 0
                ? searchResult.map((word) => (
                    <div
                      className="suggestion"
                      key={word}
                      onClick={() => {
                        searchHandler(null, word);
                      }}
                    >
                      {word}
                    </div>
                  ))
                : searchBarText && (
                    <div className="suggestion">{`No results found for ${searchBarText}`}</div>
                  )}
            </div>
          </form>

          <div className="nav-icons-container">
            <div className="nav-item nav-icon">
              <div className="badge">
                <FontAwesomeIcon
                  icon="heart"
                  className="icon-style"
                  onClick={() => navigate("/wishlist")}
                />
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
                  icon="cart-shopping"
                  className="icon-style"
                  onClick={() => navigate("/cart")}
                />
                {authToken && state.cart.length > 0 && (
                  <span className="badge-icon badge-number badge-right badge-lg">
                    {state.cart.length}
                  </span>
                )}
              </div>
            </div>
            <div className="nav-item nav-icon icon-person">
              <FontAwesomeIcon
                icon="user"
                className="icon-style"
                onClick={() => navigate("/profile/")}
              />
            </div>
          </div>
        </div>
      </nav>
      <form
        className="mobile-searchbar-container"
        aria-label="search"
        onSubmit={searchHandler}
      >
        <input
          type="search"
          placeholder="Search for Items"
          className="nav-search-field"
          value={searchBarText}
          onChange={(e) => setSearchBarText(e.target.value)}
        />
        <button className="btn-no-decoration" type="submit">
          <FontAwesomeIcon icon="search" className="search-icon" />
        </button>
        <div className="suggestions">
          {searchResult.length > 0
            ? searchResult.map((word) => (
                <div
                  className="suggestion"
                  key={word}
                  onClick={() => {
                    searchHandler(null, word);
                  }}
                >
                  {word}
                </div>
              ))
            : searchBarText && (
                <div className="suggestion">{`No results found for ${searchBarText}`}</div>
              )}
        </div>
      </form>
    </>
  );
}

export { Navigation };
