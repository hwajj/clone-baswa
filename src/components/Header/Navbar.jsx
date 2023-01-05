import React, { useRef, useState } from "react";
import "scss/components/Header/Navbar.scss";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import menuItemInfo from "./menuItemInfo";
import MenuItems from "./MenuItems";
const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <ul className="menus">
        {menuItemInfo.map((menu, index) => {
          return <MenuItems key={index} items={menu} />;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
