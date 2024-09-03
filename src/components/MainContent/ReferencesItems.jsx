import React, { useEffect, useRef } from "react";
import "@/scss/components/MainContent/References.scss";
import {
  GallerySideTextDesc,
  GallerySideTextSpan,
} from "@/components/StyledComponent/GallerySideText";
import pic_1_1 from "@/assets/references_1_1.jpeg";
import pic_1_2 from "@/assets/references_1_2.jpeg";
import pic_2_1 from "@/assets/references_2_1.jpeg";
import pic_2_2 from "@/assets/references_2_2.jpeg";
import pic_3_1 from "@/assets/references_3_1.jpeg";
import pic_3_2 from "@/assets/references_3_2.jpeg";

const ReferencesItem = ({ data, index, currentIdx, containerRef }) => {
  console.log(currentIdx, index);
  const picArr = [
    [pic_1_1, pic_1_2],
    [pic_2_1, pic_2_2],
    [pic_3_1, pic_3_2],
  ];
  const referenceItemRef = useRef(null);
  const referenceLeftImageRef = useRef(null);
  const referenceRightImageRef = useRef(null);
  useEffect(() => {
    containerRef.current.style.transform = `translateX(${-100 * currentIdx}%)`;

    referenceItemRef.current.style.animation = "none";
    referenceLeftImageRef.current.style.animation = "none";
    referenceRightImageRef.current.style.animation = "none";

    setTimeout(() => {
      referenceItemRef.current.style.animation = "lightUp .5s ease-in";
      referenceLeftImageRef.current.style.animation = "upMotion .8s ease-out";
      referenceRightImageRef.current.style.animation =
        "rightMotion .8s ease-out";
    }, 1);

    return () => {};
  }, [currentIdx]);

  return (
    <div
      className={`references-item ${currentIdx === index ? "" : "opacityDown"}`}
    >
      <div className="left">
        <div className="top">
          <div className="title">
            <h2>
              Endless <br />
              <span className="dark-beige-color">versatility</span>
            </h2>
            <GallerySideTextSpan>Reference overview</GallerySideTextSpan>
          </div>
          <div className="desc" ref={referenceItemRef}>
            <span>{data.category}</span>
            <h3>{data.title}</h3>
            <GallerySideTextDesc>{data.desc}</GallerySideTextDesc>

            <GallerySideTextSpan>learn more</GallerySideTextSpan>
          </div>
        </div>
      </div>

      <div className="right">
        <div ref={referenceLeftImageRef}>
          <img src={picArr[currentIdx][0]} alt={`${data.title} image 1`} />
        </div>
        <div ref={referenceRightImageRef}>
          <img src={picArr[currentIdx][1]} alt={`${data.title} image 2`} />
        </div>
      </div>
    </div>
  );
};

export default ReferencesItem;
