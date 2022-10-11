import React from "react";

const NavItem = (props) => {
  return (
    <div>
      <ul className="chevron">
        <li>
          <a href="/">{props.name}</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
