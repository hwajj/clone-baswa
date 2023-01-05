import React, { useEffect } from 'react';
import 'scss/components/MainContent/Main.scss';
import HeroHome from './HeroHome';
const Main = ({ mainRef }) => {
  return (
    <main>
      <HeroHome />
      <article className='content' ref={mainRef}></article>
      <section className='productFinder'>
        <div className='HeroHome__slider'></div>
      </section>
      <article className='content'></article>
      <section className='referenceSlider'>
        <div className='referenceSlider'></div>
      </section>
    </main>
  );
};

export default Main;
