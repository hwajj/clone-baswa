import React, { useRef, useState } from "react";
import "@/scss/components/Header/Navbar.scss";
import menuItemInfo from "./menuItemInfo";
import MenuItems from "./MenuItems";
const Navbar = ({ setMenuOpen }) => {
  return (
    <div className="nav-wrapper">
      <ul className="menus">
        {menuItemInfo.map((menu, index) => {
          return <MenuItems key={index} items={menu} />;
        })}
      </ul>
      <div className="hamburger" onClick={setMenuOpen}>
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
    </div>
  );
};

export default Navbar;
