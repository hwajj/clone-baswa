import React, { useRef, useState } from "react";
import "scss/components/MainContent/Gallery.scss";
import GalleryContent from "./GalleryContent";
import {
  gallerySideContentData,
  galleryChoiceData,
} from "./galleryContentData";
import GalleryIndex from "./GalleryIndex";
const Gallery = ({ galleryIndexRef, allRefs }) => {
  const [arrowUp, setArrowUp] = useState(false);
  const indexRef = useRef(null);
  console.log(allRefs);
  const onShowToggleMenu = (event) => {
    console.log(event.target);
  };
  return (
    <section className="baswa-gallery">
      <article className="index" ref={galleryIndexRef}>
        <div className="index_title">Find the right acoustic system</div>
        <div className="index_choice" ref={indexRef} onClick={onShowToggleMenu}>
          {galleryChoiceData.map((data, i) => {
            return <GalleryIndex key={i} data={data} index={i} />;
          })}
        </div>

        <div className="index_button">
          <button>Find System</button>
        </div>
      </article>
      {gallerySideContentData.map((data, i) => (
        <GalleryContent key={i} odd={i % 2} data={data} allRefs={allRefs} />
      ))}
    </section>
  );
};

export default Gallery;
