import React from "react";

import banner from "../resources/images/HomeBanner.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="nav">
      <NavBar />
      <p>
        <img src={banner} alt="Classic Cinema Company Banner" />
      </p>
    </div>
  );
};

export default Header;
