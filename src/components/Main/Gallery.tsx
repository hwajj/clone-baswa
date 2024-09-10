import React, { useRef } from "react";
import "@/scss/components/MainContent/Gallery.scss";
import GalleryContent from "@/components/Main/GalleryContent";
import {
  gallerySideContentData,
  galleryChoiceData,
} from "./galleryContentData";
import GalleryIndex from "./GalleryIndex";

interface GalleryProps {
  galleryIndexRef: React.RefObject<HTMLElement>;
  allRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}

export default function Gallery({ galleryIndexRef, allRefs }: GalleryProps) {
  const indexRef = useRef<HTMLDivElement>(null);

  const onShowToggleMenu = (event: React.MouseEvent) => {
    // console.log(event.target);
  };

  return (
    <section className="baswa-gallery">
      <article className="index" ref={galleryIndexRef}>
        <div className="index_title">
          <p>Find the right acoustic system</p>
        </div>

        <div className="index_choice" ref={indexRef} onClick={onShowToggleMenu}>
          {galleryChoiceData.map((data, i) => {
            return <GalleryIndex key={i} data={data} index={i} />;
          })}
        </div>
        <div className="index_button">
          <button>Find System</button>
        </div>
      </article>
      <div className="gallery-container">
        {gallerySideContentData.map((data, i) => (
          <GalleryContent key={i} odd={i % 2} data={data} allRefs={allRefs} />
        ))}
      </div>
    </section>
  );
}
