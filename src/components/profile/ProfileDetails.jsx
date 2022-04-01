import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "contexts";
import "./profile.css";
import { CART_OPERATION, WISHLIST_OPERATION } from "../../constants";

function ProfileDetails() {
  const { setAuthToken, authUser, setAuthUser } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.authUser) setAuthUser(JSON.parse(localStorage.authUser));
  }, []);
  function logoutHandler() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setAuthToken("");
    setAuthUser(null);
    navigate("/products");
  }

  return (
    <div className="flex-row-center middle-content">
      <div className="logout-container flex-column-center">
        <h4 className="heading4">ACCOUNT DETAILS</h4>
        <div className="row-format">
          Name :{` ${authUser.firstName} ${authUser.lastName}`}
        </div>
        <div className="row-format">Email :{` ${authUser.email}`}</div>
        <button className="btn btn-outline-default" onClick={logoutHandler}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export { ProfileDetails };
