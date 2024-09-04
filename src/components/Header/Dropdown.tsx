import React from "react";
import {
  DropdownSubmenuContainer,
  DropdownSubmenuList,
} from "@/components/StyledComponent/DropdownSubmenu";

interface DropdownProps {
  submenus: { title: string; url?: string }[];
  dropdown: boolean;
}

export default function Dropdown({ submenus, dropdown }: DropdownProps) {
  return (
    <DropdownSubmenuContainer show={dropdown ? "block" : "none"}>
      {submenus.map((submenu, index) => (
        <DropdownSubmenuList key={index} className="submenu-list">
          <a href={submenu.url}>{submenu.title}</a>
        </DropdownSubmenuList>
      ))}
    </DropdownSubmenuContainer>
  );
}
