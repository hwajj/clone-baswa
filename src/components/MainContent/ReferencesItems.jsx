import React, { useEffect, useRef } from "react";
import "scss/components/MainContent/References.scss";
import {
  GallerySideTextDesc,
  GallerySideTextSpan,
} from "../StyledComponent/GallerySideText";

const ReferencesItem = ({ data, index, currentIdx, containerRef }) => {
  console.log(currentIdx, index);
  const referenceItemRef = useRef(null);
  const referenceLeftImageRef = useRef(null);
  const referenceRightImageRef = useRef(null);
  useEffect(() => {
    containerRef.current.style.transform = `translateX(${-100 * currentIdx}%)`;

    referenceItemRef.current.style.animation = "none";
    referenceLeftImageRef.current.style.animation = "none";
    referenceRightImageRef.current.style.animation = "none";

    referenceLeftImageRef.current.style.setProperty(
      "--backgroundUrl",
      "url('/assets/references_1_1.jpeg')"
    );
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
          <img src={`src/assets/references_1_1.jpeg`} alt="" />
        </div>
        <div ref={referenceRightImageRef}></div>
      </div>
    </div>
  );
};

export default ReferencesItem;
