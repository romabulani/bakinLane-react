import React from "react";
import { Footer, Navigation, ProfileDetails } from "../components";

function ProfilePage() {
  return (
    <div className="pagewrapper">
      <Navigation />
      <div className="middle-content">
        <ProfileDetails />
      </div>
      <Footer />
    </div>
  );
}

export { ProfilePage };
