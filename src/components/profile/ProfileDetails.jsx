import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, useData } from "contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CART_OPERATION,
  WISHLIST_OPERATION,
  SET_ADDRESS,
  SET_ORDERS,
} from "../../constants";
import "./profile.css";

function ProfileDetails() {
  const { setAuthToken, authUser, setAuthUser } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setAuthToken("");
    setAuthUser(null);
    dispatch({ type: CART_OPERATION, payload: { cart: [] } });
    dispatch({ type: WISHLIST_OPERATION, payload: { wishlist: [] } });
    dispatch({ type: SET_ADDRESS, payload: { address: [] } });
    dispatch({ type: SET_ORDERS, payload: { orders: [] } });
    navigate("/products");
  }

  return (
    <>
      <div className="flex-row-start">
        <div className="logout-container">
          <div className="large-font-size">
            Account Details<hr className="section-line"></hr>
          </div>

          <div className="flex-row-center profile-details">
            <div className="flex-column profile-column">
              <p>Name</p>
              <p>Email</p>
            </div>
            <div className="flex-column  profile-column">
              <p>{` ${authUser.firstName} ${authUser.lastName}`}</p>
              <p>{` ${authUser.email}`}</p>
            </div>
          </div>
          <div className="large-font-size">
            Account Settings<hr className="section-line"></hr>
          </div>
          <button
            className="btn btn-outline-error logout-btn"
            onClick={logoutHandler}
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="flex-column mobile-tabs-container">
        <Link to="/profile/address" className="mobile-tab ">
          <FontAwesomeIcon icon="address-book" className="p-right-5" />
          Your Addresses
        </Link>
        <hr className="section-line" />
        <Link to="/profile/orders" className="mobile-tab ">
          <FontAwesomeIcon icon="box-open" className="p-right-5" />
          Your Orders
        </Link>
      </div>
    </>
  );
}

export { ProfileDetails };
