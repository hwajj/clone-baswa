import React, { useEffect, useState, useRef } from "react";
import { HEADER_MENU_TYPE } from "utils/constant";
import Dropdown from "components/Header/Dropdown";

import "scss/components/Header/MenuItems.scss";
import { AiFillCaretDown } from "react-icons/ai";
import { openModalAction } from "redux/reducer/modal";
import { useDispatch } from "react-redux";
const MenuItems = ({ items }) => {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        console.log(ref.current);
        console.log(event.target);
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
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
    items.mode === HEADER_MENU_TYPE.MODAL &&
      dispatch(openModalAction({ payload: { isOpenModal: true } }));
  };
  return (
    <li
      key={items.title}
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu ? (
        <>
          <button
            aria-expanded={dropdown ? "true" : "false"}
            aria-haspopup="menu"
            className={
              items.mode === HEADER_MENU_TYPE.MODAL
                ? "modal"
                : items.mode === HEADER_MENU_TYPE.LANGUAGE
                ? "language"
                : ""
            }
            onClick={openModal}
          >
            {items.title}{" "}
            {items.mode === HEADER_MENU_TYPE.LANGUAGE && <AiFillCaretDown />}
          </button>

          <Dropdown dropdown={dropdown} submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
