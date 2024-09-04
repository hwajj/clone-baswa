import React, { useEffect, useState, useRef, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";
import Dropdown from "@/components/Header/Dropdown";
import { HEADER_MENU_TYPE } from "@/utils/constant";
import "@/scss/components/Header/MenuItems.scss";
import { openModalAction } from "@/redux/reducer/modal";
import { useNavigate } from "react-router";

interface MenuItemProps {
  items: {
    title: string;
    url: string;
    mode: HEADER_MENU_TYPE;
    submenu: { title: string; url?: string }[];
  };
}

export default function MenuItems({ items }: MenuItemProps) {
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
    if (items.mode === HEADER_MENU_TYPE.MODAL) {
      dispatch(openModalAction({ payload: { isOpenModal: true } }));
    }
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
      {items.submenu.length ? (
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
        <button onClick={() => navigate(items.url)}>{items.title}</button>
      )}
    </li>
  );
}
