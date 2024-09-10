import React from "react";

import { HEADER_MENU_TYPE } from "@/utils/constant";

interface DropdownProps {
  submenus: { title: string; url?: string }[];
  dropdown: boolean;
  mode: HEADER_MENU_TYPE;
}

export default function Dropdown({ submenus, dropdown, mode }: DropdownProps) {
  return (
    <div
      className={`${dropdown ? "block" : "none"} z-50 absolute menu-shadow bg-white  top-[90%] w-full"`}
      style={{
        width: mode === HEADER_MENU_TYPE.LANGUAGE ? "w-auto" : "267%", // LANGUAGE일 때 width 제한
      }}
    >
      {submenus.map((submenu, index) => (
        <div
          key={index}
          className={`submenu-list border-b-[1px] border-menu-beige border-solid last:border-b-0  ${mode === HEADER_MENU_TYPE.LANGUAGE && "text-[11px] h-10 w-14 text-center tracking-[.3rem]"}`}
        >
          <a
            href={submenu.url}
            className={`flex  items-center p-[.7rem] h-full transition-colors duration-200 ease-in-out 
             hover:bg-[#f1e4dc] 
             ${mode === HEADER_MENU_TYPE.LANGUAGE ? "justify-center" : "justify-start"}`}
          >
            {submenu.title}
          </a>
        </div>
      ))}
    </div>
  );
}
