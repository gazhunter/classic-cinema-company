import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../resources/images/CCC-Logo.png";
import NavItem from "./NavItem";
import NavItemModel from "./NavItemModel";

const NavBar = () => {
  const navItems = [
    { id: 1, name: "What's On", link: "/whatson" },
    { id: 2, name: "Coming Soon", link: "/" },
    { id: 3, name: "Sign Up", link: "/signup" },
    { id: 4, name: "Your Visit", link: "/" },
    { id: 5, name: "Book Tickets", link: "/" },
  ];

  const populateItems = () => {
    if (navItems?.length > 0) {
      return navItems.map((item) => {
        const navItem = new NavItemModel(item.id, item.name, item.link);
        return <NavItem navItem={navItem} key={item.id} />;
      });
    }
  };

  return (
    <div className="nav">
      <NavLink to="/" className="navbar-brand">
        <img src={logo} alt="Classic Cinema Company" />
      </NavLink>
      {populateItems()}
    </div>
  );
};

export default NavBar;
