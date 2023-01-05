import React, { useState, useEffect, useRef } from "react";
import logoSvg from "assets/logo.svg";
import "scss/components/Header/Header.scss";
import { NavLink } from "react-router-dom";
import Navbar from "components/Header/Navbar";
import useIntersectionObserver from "../../utils/hook/useIntersectionObserver";

const Header = () => {
  const callbackFn = (entries) => {
    console.log(entries);

    //setIsIntersecting(entry.isIntersecting);
  };

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
