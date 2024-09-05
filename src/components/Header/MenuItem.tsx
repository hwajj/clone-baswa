import React, { useEffect, useState, useRef, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "@/components/Header/Dropdown";
import { HEADER_MENU_TYPE } from "@/utils/constant";
import { openModalAction } from "@/redux/reducer/modal";
import { useNavigate } from "react-router";

interface MenuItemProps {
  menuInfo: {
    title: string;
    url: string;
    mode: HEADER_MENU_TYPE;
    submenu: { title: string; url?: string }[];
  };
  isNavOpen: boolean;
}

export default function MenuItem({ menuInfo }: MenuItemProps) {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const openModal = () => {
    if (menuInfo.mode === HEADER_MENU_TYPE.MODAL) {
      dispatch(openModalAction({ payload: { isOpenModal: true } }));
    }
  };

  return (
    <li
      key={menuInfo.title}
      className="menu-items h-full w-auto flex items-start justify-center text-left flex-col relative p-4 cursor-pointer"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      <>
        <button
          onClick={() =>
            menuInfo.mode === HEADER_MENU_TYPE.MODAL
              ? openModal()
              : navigate(menuInfo.url)
          }
          aria-expanded={dropdown ? "true" : "false"}
          aria-haspopup="menu"
          className={`
            ${menuInfo.mode != HEADER_MENU_TYPE.MODAL ? "menu-effect" : "my-4 px-5"}
            bg-none 
            hover:text-menu-beige
            transition-colors ease-in-out duration-300
            block p-[.4rem] 
            cursor-pointer
            w-full h-full
             
            ${
              menuInfo.mode === HEADER_MENU_TYPE.MODAL
                ? "modal font-bold border-solid border-l-[1px] border-r-[1px] border-menu-beige p-2"
                : menuInfo.mode === HEADER_MENU_TYPE.LANGUAGE
                  ? "language flex items-center justify-center w-10 text-[11px] tracking-[.3rem]"
                  : ""
            }`}
        >
          <span className="flex justify-center items-center">
            {menuInfo.title}
            {menuInfo.mode === HEADER_MENU_TYPE.LANGUAGE && (
              <FaChevronDown className="w-2 ml-1" />
            )}
          </span>
        </button>
        <Dropdown
          mode={menuInfo.mode}
          dropdown={dropdown}
          submenus={menuInfo.submenu}
        />
      </>
    </li>
  );
}
