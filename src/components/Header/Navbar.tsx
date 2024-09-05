import React, { useRef, useState } from "react";
import "@/scss/components/Header/Navbar.scss";
import menuItemInfo from "./menuItemInfo";
import MenuItem from "./MenuItem";
import { HEADER_MENU_TYPE } from "@/utils/constant";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "@/components/Header/Dropdown";
import logoSvg from "@/assets/logo.svg";
import { useNavigate } from "react-router";
import MobileNavbar from "@/components/Header/MobileNavbar";
const Navbar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    // console.log("toggleNav");
    setIsNavOpen(!isNavOpen); // 햄버거 버튼을 누르면 상태를 변경
  };
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="nav-wrapper flex text-[.875rem] font-flamabook justify-end items-center w-full h-full">
      {/*lg 일때 메뉴*/}
      <ul
        className={`z-50 hidden lg:flex lg:justify-end lg:items-center lg:h-full`}
      >
        {menuItemInfo.map((menu, index) => {
          return <MenuItem key={index} menuInfo={menu} isNavOpen={isNavOpen} />;
        })}
      </ul>
      {/*햄버거*/}
      <div className={`z-50 flex relative`}>
        <ul className={`absolute top-1 right-12  `}>
          {menuItemInfo
            .filter((menu) => menu.mode === HEADER_MENU_TYPE.LANGUAGE)
            .map((menu, index) => (
              <div
                key={index}
                className={`lg:hidden top-0 right-0 flex-col text-[11px] tracking-[.3rem] gap-4 ${isNavOpen ? "block" : "hidden"}`}
              >
                <button
                  className={`language flex items-center mb-6 justify-center w-10 text-[11px] "`}
                  aria-expanded={dropdown ? "true" : "false"}
                  onClick={() => setDropdown(!dropdown)}
                >
                  {" "}
                  {menu.title}
                  <FaChevronDown className="w-2 ml-1" />
                </button>
                <Dropdown
                  mode={menu.mode}
                  dropdown={dropdown}
                  submenus={menu.submenu}
                />
              </div>
            ))}
        </ul>
        <div
          className="flex cursor-pointer lg:hidden flex-col items-center justify-center w-8 h-8 "
          onClick={toggleNav}
        >
          <span
            className={`block w-6 h-0.5 bg-black my-1 transition-transform  
            
            duration-100  ${isNavOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block h-0.5 bg-black my-1 transition-transform duration-100  ${isNavOpen ? "-rotate-45 translate-y-0 w-6" : "w-4"}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black my-1 transition-transform duration-100  ${isNavOpen ? "rotate-45 -translate-y-2.5 " : ""}`}
          ></span>
        </div>
      </div>
      {/* 1024px 이상일때 Navbar */}
      <div
        className={`${isNavOpen ? "flex" : "hidden"} lg:hidden items-center justify-center flex-col  navbar-sm transition-opacity duration-300 absolute w-screen bg-white top-0 left-0 py-[1rem] px-[3rem] h-screen z-30`}
      >
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
