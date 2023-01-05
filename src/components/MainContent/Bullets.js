import React, { useRef } from "react";

const Bullet = ({ active, slideImage, idx }) => {
  return (
    <span
      className={active === idx ? "clicked" : ""}
      data-index={idx}
      onClick={slideImage}
    ></span>
  );
};

export default Bullet;
