import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../resources/images/CCC-Logo.png";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="navbar-brand">
        <img src={logo} alt="Classic Cinema Company" />
      </NavLink>
      <NavItem name="What's On" />
      <NavItem name="Common Soon" />
      <NavItem name="Sign Up" />
      <NavItem name="Your Visit" />
      <NavItem name="Book Tickets" />
    </div>
  );
};

export default NavBar;
