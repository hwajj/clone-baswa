import React, { useRef, useState, useEffect } from "react";
import "@/scss/components/MainContent/References.scss";
import { referencesData } from "@/components/MainContent/referencesData";
import ReferencesItem from "@/components/MainContent/ReferencesItems";

const References = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const onPlusCurrentPage = () => {
    setCurrentPage((state) => state + 1);
    //   console.log(currentPage);
  };
  const onMinusCurrentPage = () => {
    setCurrentPage((state) => state - 1);
  };
  const slideContainerRef = useRef(null);

  return (
    <div className="references">
      <section className="references-frame">
        <div className="references-container" ref={slideContainerRef}>
          {referencesData.map((data, index) => (
            <ReferencesItem
              data={data}
              currentIdx={currentPage}
              index={index}
              key={index}
              containerRef={slideContainerRef}
            />
          ))}
        </div>
      </section>
      <div className="pagination">
        <div className="number">
          <span>{(currentPage + 1 + "").padStart(2, "0")}</span>
          <span></span>
          <span>{referencesData.length}</span>
        </div>
        <div className="backforward">
          <span
            className={`${currentPage === 0 ? "notClickable" : "clickable"}`}
            onClick={onMinusCurrentPage}
          >
            {"<"}
          </span>
          <span
            className={`${
              currentPage + 1 === referencesData.length
                ? "notClickable"
                : "clickable"
            }`}
            onClick={onPlusCurrentPage}
          >
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default References;
