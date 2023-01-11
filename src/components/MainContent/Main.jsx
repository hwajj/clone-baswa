import React, { useState, useEffect, useRef } from "react";
import "scss/components/MainContent/Main.scss";
import HeroHome from "components/MainContent/HeroHome";
import System from "components/MainContent/System";
import Gallery from "components/MainContent/Gallery";
import References from "./References";
import { referencesData } from "components/MainContent/referencesData";
const Main = ({ mainRef, galleryIndexRef, systemRef, allRefs }) => {
  // console.log(referencesData);

  return (
    <main>
      <HeroHome mainRef={mainRef} />
      <System systemRef={systemRef} />
      {/*<article className="content" ref={mainRef}></article>*/}
      <Gallery galleryIndexRef={galleryIndexRef} allRefs={allRefs} />
      <References />

      <section className="productFinder">
        <div className="HeroHome__slider"></div>
      </section>

      <section className="referenceSlider">
        <div className="referenceSlider"></div>
      </section>
    </main>
  );
};

export default Main;
