import React, { useRef } from "react";

const Bullet = ({ active, slideImage, idx }) => {
  // const ref = useRef(null);
  console.log(active);
  console.log(idx);
  return (
    <span
      className={active == idx ? "clicked" : ""}
      data-index={idx}
      onClick={slideImage}
    ></span>
  );
};

export default Bullet;
