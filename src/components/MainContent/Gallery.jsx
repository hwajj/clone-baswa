import React, { useRef } from "react";
import "@/scss/components/MainContent/Gallery.scss";
import GalleryContent from "@/components/MainContent/GalleryContent";

import {
  gallerySideContentData,
  galleryChoiceData,
} from "./galleryContentData";
import GalleryIndex from "./GalleryIndex";

const Gallery = ({ galleryIndexRef, allRefs }) => {
  const indexRef = useRef(null);

  const onShowToggleMenu = (event) => {
    console.log(event.target);
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
};

export default Gallery;
