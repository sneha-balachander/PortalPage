import React, { useState } from "react";

import "./Navbar.css";
const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo left">Data Extractor</div>
        <ul id="nav-mobile" className="right">
          <li>
            <div className="waves-effect waves-light btn">
              API documentation
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
