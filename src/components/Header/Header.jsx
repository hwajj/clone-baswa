import React, { useState, useRef } from "react";
import logoSvg from "assets/logo.svg";
import "scss/components/Header/Header.scss";
import { NavLink } from "react-router-dom";
import Navbar from "components/Header/Navbar";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <div className="logo" alt="logo">
          <NavLink to="/">
            <img src={logoSvg} />
          </NavLink>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
