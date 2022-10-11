import React from "react";
import "./OpeningTimes";
import OpeningTimes from "./OpeningTimes";

const Footer = () => {
  return (
    <footer className="footer footer-content">
      <OpeningTimes />
      <div id="copyright">
        Copyright &copy; The Classic Cinema Company Ltd 2022.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
