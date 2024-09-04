import React from "react";

interface BulletProps {
  active: number;
  slideImage: (event: React.MouseEvent<HTMLSpanElement>) => void;
  idx: number;
}
const Bullet = ({ active, slideImage, idx }) => {
  return (
    <span
      className={Number(active) === idx ? "clicked" : ""}
      data-index={idx}
      onClick={slideImage}
    ></span>
  );
};

export default Bullet;
