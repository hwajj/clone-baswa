import React from "react";
import {
  GalleryMiddleWord,
  GallerySideImageCont,
  GallerySideTextBackground,
  GallerySideTextDesc,
  GallerySideTextSpan,
} from "../StyledComponent/GallerySideText";
import primeTopImg from "../../assets/en_baswa_dtg_primetop_2-768x576.png";

const BaswaGalleryContent = ({ odd }) => {
  return (
    <article className="gallery">
      <GallerySideTextBackground>
        <div>
          <h2>
            {"BASWA "}
            <br />
            <span className="dark-beige-color">DTG</span>
          </h2>
        </div>
        <GallerySideTextDesc>
          Suitable for all building types, BASWA is engineered for versatility,
          performance, appearance and long term durability. Design for acoustic
          comfort, without compromise.
        </GallerySideTextDesc>

        <GallerySideTextSpan fontSize="1rem">BASWA Systems</GallerySideTextSpan>
      </GallerySideTextBackground>
      <GallerySideImageCont order={odd}>
        <img src={primeTopImg} alt="baswa primetop image" />
      </GallerySideImageCont>
      <GalleryMiddleWord>SYSTEM</GalleryMiddleWord>
    </article>
  );
};

export default BaswaGalleryContent;
