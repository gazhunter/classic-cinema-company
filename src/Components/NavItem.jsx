import React from "react";
import PropTypes from "prop-types";
import NavItemModel from "./NavItemModel";

const NavItem = ({ navItem }) => {
  return (
    <div>
      <ul className="chevron">
        <li>
          <a href="/">{navItem.navName}</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;

NavItem.propTypes = {
  navItem: PropTypes.instanceOf(NavItemModel),
};
