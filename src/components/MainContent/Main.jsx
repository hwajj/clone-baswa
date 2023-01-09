import React, { useEffect } from "react";
import "scss/components/MainContent/Main.scss";
import HeroHome from "./HeroHome";
import BaswaSystem from "./BaswaSystem";
import BaswaGallery from "./BaswaGallery";
const Main = ({ mainRef, baswaGalleryRef, baswaSystemRef }) => {
  return (
    <main>
      <HeroHome mainRef={mainRef} />
      <BaswaSystem baswaSystemRef={baswaSystemRef} />
      {/*<article className="content" ref={mainRef}></article>*/}
      <BaswaGallery baswaGalleryRef={baswaGalleryRef} />
      <section className="productFinder">
        <div className="HeroHome__slider"></div>
      </section>
      <article className="content"></article>
      <section className="referenceSlider">
        <div className="referenceSlider"></div>
      </section>
    </main>
  );
};

export default Main;
