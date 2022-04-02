import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";
import "./profile.css";

function ProfileDetails() {
  const { setAuthToken, authUser, setAuthUser } = useAuth();
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
  );
}

export { ProfileDetails };
