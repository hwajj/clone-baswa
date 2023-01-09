import React, { useRef, useState } from 'react';
import 'scss/components/MainContent/BaswaGallery.scss';
import BaswaGalleryContent from './BaswaGalleryContent';
import {
  gallerySideContentData,
  galleryChoiceData,
} from './galleryContentData';
import BaswaGalleryIndex from './BaswaGalleryIndex';
const BaswaGallery = ({ baswaGalleryRef }) => {
  const [arrowUp, setArrowUp] = useState(false);
  const indexRef = useRef(null);
  const onShowToggleMenu = (event) => {
    console.log(event.target);
  };
  return (
    <section className='baswa-gallery'>
      <article className='index' ref={baswaGalleryRef}>
        <div className='index_title'>Find the right acoustic system</div>
        <div className='index_choice' ref={indexRef} onClick={onShowToggleMenu}>
          {galleryChoiceData.map((data, i) => {
            return <BaswaGalleryIndex key={i} data={data} index={i} />;
          })}
        </div>

        <div className='index_button'>
          <button>Find System</button>
        </div>
      </article>
      {gallerySideContentData.map((data, i) => (
        <BaswaGalleryContent key={i} odd={i % 2} data={data} />
      ))}
    </section>
  );
};

export default BaswaGallery;
