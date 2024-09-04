import React, { useState } from "react";
import Menu from "@/components/Header/Menu";

export default function MenuToggle() {
  const [menuToggle, setMenuToggle] = useState(false);

  const setMenuOpen = () => {
    setMenuToggle((menuToggle) => !menuToggle);
    console.log(menuToggle);
  };

  return (
    <>
      <button onClick={setMenuOpen}>Toggle Menu</button>
      {menuToggle && <Menu />}
    </>
  );
}
