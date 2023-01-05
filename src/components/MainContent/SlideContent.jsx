import React from "react";
import "scss/components/MainContent/SlideContent.scss";
const SlideContent = ({ active, data, index, slideRef }) => {
  return (
    <div
      ref={slideRef}
      className={`slide-content ${active == index ? "active" : ""}`}
    >
      <div>
        <div className="number">{index + 1} - 4</div>
        <div className="title">{data.title}</div>
        <div className="desc">{data.desc}</div>
        <div className="more">
          <button>{data.more}</button>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
