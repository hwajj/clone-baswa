import React from "react";
import "scss/components/MainContent/BaswaGallery.scss";
import primeTopImg from "assets/en_baswa_dtg_primetop_2-768x576.png";
import {
  GallerySideTextBackground,
  GallerySideTextDesc,
  GallerySideTextSpan,
  GallerySideImageCont,
  GalleryMiddleWord,
} from "components/StyledComponent/GallerySideText";

import BaswaGalleryContent from "./BaswaGalleryContent";
const BaswaGallery = ({ baswaGalleryRef }) => {
  return (
    <section className="baswa-gallery" ref={baswaGalleryRef}>
      <article className="index">
        <div className="index_title">Find the right acoustic system</div>
        <div className="index_choice">
          <div>
            <h2>01</h2>
            <h3>project type</h3>
            <span>please select </span>
          </div>
          <div>
            <h2>02</h2>
            <h3>Area of application</h3>
            <span>please select </span>
          </div>
          <div>
            <h2>03</h2>
            <h3>Thermal-active</h3>
            <span>please select </span>
          </div>
        </div>

        <div className="index_button">
          <button>Find System</button>
        </div>
      </article>
      {new Array(3).fill(0).map((e, i) => (
        <BaswaGalleryContent odd={i % 2} />
      ))}
      {/*<article className="gallery">*/}
      {/*  <GallerySideTextBackground>*/}
      {/*    <div>*/}
      {/*      <h2>*/}
      {/*        {"BASWA "}*/}
      {/*        <br />*/}
      {/*        <span className="dark-beige-color">DTG</span>*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*    <GallerySideTextDesc>*/}
      {/*      Suitable for all building types, BASWA is engineered for*/}
      {/*      versatility, performance, appearance and long term durability.*/}
      {/*      Design for acoustic comfort, without compromise.*/}
      {/*    </GallerySideTextDesc>*/}

      {/*    <GallerySideTextSpan fontSize="1rem">*/}
      {/*      BASWA Systems*/}
      {/*    </GallerySideTextSpan>*/}
      {/*  </GallerySideTextBackground>*/}
      {/*  <GallerySideImageCont>*/}
      {/*    <img src={primeTopImg} alt="baswa primetop image" />*/}
      {/*  </GallerySideImageCont>*/}
      {/*  <GalleryMiddleWord>SYSTEM</GalleryMiddleWord>*/}
      {/*</article>*/}

      {/*<article className="gallery">*/}
      {/*  <GallerySideTextBackground>*/}
      {/*    <div>*/}
      {/*      <h2>*/}
      {/*        {"BASWA "}*/}
      {/*        <br />*/}
      {/*        <span className="dark-beige-color">DTG</span>*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*    <GallerySideTextDesc>*/}
      {/*      Suitable for all building types, BASWA is engineered for*/}
      {/*      versatility, performance, appearance and long term durability.*/}
      {/*      Design for acoustic comfort, without compromise.*/}
      {/*    </GallerySideTextDesc>*/}

      {/*    <GallerySideTextSpan fontSize="1rem">*/}
      {/*      BASWA Systems*/}
      {/*    </GallerySideTextSpan>*/}
      {/*  </GallerySideTextBackground>*/}
      {/*  <GallerySideImageCont>*/}
      {/*    <img src={primeTopImg} alt="baswa primetop image" />*/}
      {/*  </GallerySideImageCont>*/}
      {/*  <GalleryMiddleWord>SYSTEM</GalleryMiddleWord>*/}
      {/*</article>*/}

      {/*<article className="gallery">*/}
      {/*  <GallerySideTextBackground>*/}
      {/*    <div>*/}
      {/*      <h2>*/}
      {/*        {"BASWA "}*/}
      {/*        <br />*/}
      {/*        <span className="dark-beige-color">DTG</span>*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*    <GallerySideTextDesc>*/}
      {/*      Suitable for all building types, BASWA is engineered for*/}
      {/*      versatility, performance, appearance and long term durability.*/}
      {/*      Design for acoustic comfort, without compromise.*/}
      {/*    </GallerySideTextDesc>*/}

      {/*    <GallerySideTextSpan fontSize="1rem">*/}
      {/*      BASWA Systems*/}
      {/*    </GallerySideTextSpan>*/}
      {/*  </GallerySideTextBackground>*/}
      {/*  <GallerySideImageCont>*/}
      {/*    <img src={primeTopImg} alt="baswa primetop image" />*/}
      {/*  </GallerySideImageCont>*/}
      {/*  <GalleryMiddleWord>SYSTEM</GalleryMiddleWord>*/}
      {/*</article>*/}
    </section>
  );
};

export default BaswaGallery;
