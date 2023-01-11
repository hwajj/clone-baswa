import React from "react";
import {
  DropdownSubmenuContainer,
  DropdownSubmenuList,
} from "components/StyledComponent/DropdownSubmenu";
// import 'scss/components/Header/Dropdown.scss';
const Dropdown = ({ submenus, dropdown }) => {
  console.log(dropdown);
  return (
    <DropdownSubmenuContainer show={dropdown ? "block" : "none"}>
      {submenus.map((submenu, index) => (
        <DropdownSubmenuList key={index} className="submenu-list">
          <a href={submenu.url}>{submenu.title}</a>
        </DropdownSubmenuList>
      ))}
    </DropdownSubmenuContainer>
  );
};

export default Dropdown;
