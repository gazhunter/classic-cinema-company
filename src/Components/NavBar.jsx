import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../resources/images/CCC-Logo.png";

const NavBar = () => {
  return (
    <div className="navbar-brand">
      <NavLink to="/">
        <img src={logo} alt="Classic Cinema Company" className="navbar-brand" />
      </NavLink>
    </div>
  );
};

export default NavBar;
