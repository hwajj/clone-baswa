import React, { useRef, useState } from "react";
import "scss/components/MainContent/HeroHome.scss";
import { slideContentsData } from "components/MainContent/slideContentsData";
import SlideContent from "./SlideContent";
import Bullet from "./Bullets";
import "scss/components/MainContent/HeroHome.scss";

const HeroHome = () => {
  const [active, setActive] = useState(0);
  const bulletRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const innerSliderRef = useRef(null);
  const slideImage = () => {
    // sliderContainerRef.current.style.transform = `translateX(${
    //   -innerSliderRef.current.clientWidth * event.target.dataset.index
    // }px)`;

    setActive(() => event.target.dataset.index);
  };

  return (
    <section className="HeroHome">
      <div className="HeroHome-slider">
        <div className="slider-container" ref={sliderContainerRef}>
          {slideContentsData.map((data, index) => (
            <SlideContent
              slideRef={innerSliderRef}
              data={data}
              index={index}
              active={active}
            />
          ))}
          <div></div>
        </div>
      </div>

      <div className="bullets">
        {slideContentsData.map((data, index) => {
          return <Bullet idx={index} active={active} slideImage={slideImage} />;
        })}
      </div>
    </section>
  );
};

export default HeroHome;
