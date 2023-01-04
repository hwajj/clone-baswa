import React from "react";
import "../../scss/components/Header/Dropdown.scss";
const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`submenu-container ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="submenu-list">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
