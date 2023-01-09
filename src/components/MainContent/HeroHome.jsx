import React, { useRef, useState } from "react";
import "scss/components/MainContent/HeroHome.scss";
import { slideContentsData } from "components/MainContent/slideContentsData";
import SlideContent from "./SlideContent";
import Bullet from "./Bullets";
import "scss/components/MainContent/HeroHome.scss";

const HeroHome = ({ mainRef }) => {
  const [active, setActive] = useState(0);
  const bulletRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const innerSliderRef = useRef(null);
  const slideImage = (event) => {
    sliderContainerRef.current.style.transform = `translateX(${
      -100 * event.target.dataset.index
    }%)`;

    setActive(event.target.dataset.index);
    console.log(active);
  };

  return (
    <section className="HeroHome" ref={mainRef}>
      <div className="HeroHome-slider">
        <div className="slider-container" ref={sliderContainerRef}>
          {slideContentsData.map((data, index) => (
            <SlideContent
              key={index}
              slideRef={innerSliderRef}
              data={data}
              index={index}
              active={active}
            />
          ))}
        </div>
      </div>

      <div className="bullets">
        {slideContentsData.map((data, index) => {
          return (
            <Bullet
              key={index}
              idx={index}
              active={active}
              slideImage={slideImage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HeroHome;
