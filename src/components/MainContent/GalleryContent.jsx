import React from "react";
import {
  GalleryMiddleWord,
  GallerySideImageCont,
  GallerySideTextBackground,
  GallerySideTextDesc,
  GallerySideTextSpan,
} from "../StyledComponent/GallerySideText";

import primeTopImg from "../../assets/en_baswa_dtg_primetop_2-768x576.png";

const GalleryContent = ({ odd, data, allRefs }) => {
  console.log(data);
  return (
    <article className="gallery" ref={(ref) => (allRefs[data.title] = ref)}>
      <GallerySideTextBackground order={odd + 1}>
        <div>
          <h2>
            {"BASWA "}
            <br />
            <span className="dark-beige-color">{data.title}</span>
          </h2>
        </div>
        <GallerySideTextDesc>
          {data.desc}
          {/* Suitable for all building types, BASWA is engineered for versatility,
          performance, appearance and long term durability. Design for acoustic
          comfort, without compromise. */}
        </GallerySideTextDesc>
        <GallerySideTextSpan fontSize="1rem">
          BASWA {data.title}
        </GallerySideTextSpan>
      </GallerySideTextBackground>
      <GallerySideImageCont>
        <img src={primeTopImg} alt="baswa primetop image" />
      </GallerySideImageCont>
      <GalleryMiddleWord>SYSTEM</GalleryMiddleWord>
    </article>
  );
};

export default GalleryContent;
