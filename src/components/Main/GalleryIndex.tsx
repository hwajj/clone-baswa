import React, { useState, useRef, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  DropdownSubmenuContainer,
  DropdownSubmenuList,
} from "@/components/StyledComponent/DropdownSubmenu";

interface GalleryIndexProps {
  data: { title: string; select: string[] };
  index: number;
  baswaGalleryDtgRef: React.RefObject<HTMLElement>;
}

export default function GalleryIndex({
  data,
  index,
  baswaGalleryDtgRef,
}: GalleryIndexProps) {
  const [dropdown, setDropdown] = useState(false);

  const number = String(index + 1).padStart(2, "0");

  const dispatch = useDispatch();

  let listRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        listRef.current &&
        !listRef.current.contains(event.target)
      ) {
        console.log(listRef.current);
        console.log(event.target);
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [dropdown]);

  const onDropdown = () => {
    setDropdown((state) => !state);
    console.log(dropdown);
  };

  return (
    <div className="menu-container" ref={listRef} onClick={onDropdown}>
      <div className="menu">
        <h2>{number}</h2>
        <h3>{data.title}</h3>
        <span data-arrow={`${dropdown ? "\u2191" : "\u2193"}`}>
          please select{" "}
        </span>
      </div>

      <div className={`submenu-container ${dropdown ? "show" : "hide"}`}>
        {data.select.map((submenu, index) => (
          <DropdownSubmenuList key={index}>
            <a href={submenu.url}>{submenu}</a>
          </DropdownSubmenuList>
        ))}
      </div>
    </div>
  );
}
