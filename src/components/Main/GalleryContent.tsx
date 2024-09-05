import React, { useCallback } from "react";
import {
  GalleryMiddleWord,
  GallerySideImageCont,
  GallerySideTextBackground,
  GallerySideTextDesc,
  GallerySideTextSpan,
} from "@/components/StyledComponent/GallerySideText";

import primeTopImg from "../../assets/en_baswa_dtg_primetop_2-768x576.png";

interface GalleryContentProps {
  odd: number;
  data: {
    title: string;
    desc: string;
    imgSrc: string;
  };
  allRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}

export default function GalleryContent({
  odd,
  data,
  allRefs,
}: GalleryContentProps) {
  return (
    <article
      className="gallery"
      ref={(ref: any) => (allRefs[data.title] = ref || null)}
    >
      <GallerySideTextBackground order={odd + 1} className="gallery-side-text">
        <div>
          <h2>
            {"BASWA "}
            <br />
            <span className="dark-beige-color">{data.title}</span>
          </h2>
        </div>
        <GallerySideTextDesc className="side-text-desc">
          {data.desc}
          {/* Suitable for all building types, BASWA is engineered for versatility,
          performance, appearance and long term durability. Design for acoustic
          comfort, without compromise. */}
        </GallerySideTextDesc>
        <GallerySideTextSpan fontSize="1rem">
          BASWA {data.title}
        </GallerySideTextSpan>
      </GallerySideTextBackground>
      <GallerySideImageCont className="gallery-side-img">
        <img src={data.imgSrc} alt="baswa primetop image" />
      </GallerySideImageCont>
      <GalleryMiddleWord className="system">SYSTEM</GalleryMiddleWord>
    </article>
  );
}
