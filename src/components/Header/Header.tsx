import React from "react";
import logoSvg from "@/assets/logo.svg";
import "@/scss/components/Header/Header.scss";
import { NavLink } from "react-router-dom";
import Navbar from "@/components/Header/Navbar";

export default function Header({ headerRef, setMenuOpen }) {
  return (
    <header ref={headerRef}>
      <div className="nav-area">
        <div className="logo" alt="logo">
          <NavLink to="/">
            <img src={logoSvg} />
          </NavLink>
        </div>
        <Navbar setMenuOpen={setMenuOpen} />
      </div>
    </header>
  );
}
