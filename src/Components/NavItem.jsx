import React from "react";
import PropTypes from "prop-types";
import NavItemModel from "./NavItemModel";
import { NavLink } from "react-router-dom";

const NavItem = ({ navItem }) => {
  return (
    <div className="chevron">
      <ul>
        <li>
          <NavLink to={navItem.navLink}>{navItem.navName}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;

NavItem.propTypes = {
  navItem: PropTypes.instanceOf(NavItemModel),
};
