import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from 'components/MainContent/Main';
import Header from 'components/Header/Header';
import { sampleModalSelector } from 'redux/reducer/modal';
import Modal from 'components/Modal/Modal';

function App() {
  const modalState = useSelector(sampleModalSelector);
  const mainRef = useRef(null);
  const targetRef = useRef(null);
  useEffect(() => {
    const currentTarget = targetRef.current;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log('is intersecting');
        targetRef.current.style.backgroundColor = '#fff';
      } else {
        console.log('not intersecting');
        targetRef.current.style.backgroundColor = 'transparent';
      }
    });
    observer.observe(mainRef.current, { rootMargin: '10px', threshold: 0.2 });

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  return (
    <div className='App'>
      <Header targetRef={targetRef} />
      {modalState.isOpenModal && <Modal />}
      <Routes>
        <Route path='/*' element={<Main mainRef={mainRef} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
