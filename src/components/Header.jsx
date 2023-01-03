import React, { useState, useRef } from "react";
import logoSvg from "../assets/logo.svg";
import "../scss/Header.scss";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
const Header = () => {
  const ulRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClickMenu = (e) => {
    //    console.log(ulRef);
    // console.log(e.target);
    // ulRef.map((li) => {
    //   if (li == e.target) {
    //   }
    // });
  };
  return (
    <header>
      <nav>
        <div className="logo" alt="logo">
          <img src={logoSvg} />
        </div>
        <div className="nav-wrapper">
          <ul ref={ulRef} onClick={onClickMenu}>
            <li className={`nav-link ${isActive}`}>
              <span>Systems</span>
              <div className="submenu-container ">
                <div>System overview</div>
                <div>BASWA HOME</div>
                <div>BASWA Commercial</div>
                <div>Worth Knowing</div>
                <div>Downloads</div>
              </div>
            </li>
            <li> About us</li>
            <li> Reference</li>
            <li> Healthy Architecture</li>
            <li> Contact</li>
          </ul>
          <div className="sample-modal">
            <NavLink>Order sample</NavLink>
          </div>
          <div className="language-select">
            <span>EN</span>
            <AiFillCaretDown />
            <ul className="language-option none">
              <li>DE</li>
              <li>FR</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
