import React from "react";

import banner from "../resources/images/HomeBanner.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <NavBar />
      <img src={banner} alt="Classic Cinema Company Banner" />
    </>
  );
};

export default Header;
