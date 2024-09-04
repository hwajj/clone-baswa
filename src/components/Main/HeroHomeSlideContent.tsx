import React from "react";
import "@/scss/components/MainContent/HeroHomeSlideContent.scss";

interface HeroHomeSlideContentProps {
  active: number;
  data: { title: string; desc: string; more: string };
  index: number;
  slideRef: React.RefObject<HTMLDivElement>;
}

export default function HeroHomeSlideContent({
  active,
  data,
  index,
  slideRef,
}: HeroHomeSlideContentProps) {
  return (
    <div
      ref={slideRef}
      className="slide-content"
      //className={`slide-content ${active == index ? "active" : ""}`}
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
}
