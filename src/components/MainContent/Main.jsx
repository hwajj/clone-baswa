import React, { useState, useEffect, useRef } from "react";
import "@/scss/components/MainContent/Main.scss";
import HeroHome from "@/components/MainContent/HeroHome";
import System from "@/components/MainContent/System";
import Gallery from "@/components/MainContent/Gallery";
import References from "./References";
import Pioneers from "./Pioneers";
import Blog from "./Blog";

const Main = ({ mainRef, galleryIndexRef, systemRef, allRefs }) => {
  // console.log(referencesData);

  return (
    <main>
      <HeroHome mainRef={mainRef} />
      <System systemRef={systemRef} />
      {/*<article className="content" ref={mainRef}></article>*/}
      <Gallery galleryIndexRef={galleryIndexRef} allRefs={allRefs} />
      <References />
      <Blog />
      <Pioneers />
    </main>
  );
};

export default Main;
