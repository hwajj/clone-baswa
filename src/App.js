import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "components/MainContent/Main";
import Header from "components/Header/Header";
import { sampleModalSelector } from "redux/reducer/modal";
import Modal from "components/Modal/Modal";

function App() {
  const modalState = useSelector(sampleModalSelector);
  const [menuToggle, setMenuToggle] = useState(false);
  const setMenuOpen = () => {
    setMenuToggle((menuToggle) => !menuToggle);
    console.log(menuToggle);
  };

  console.log(modalState);
  const mainRef = useRef(null);
  const targetRef = useRef(null);
  useEffect(() => {
    const currentTarget = targetRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          console.log("is intersecting");
          targetRef.current.style.backgroundColor = "#fff";
          targetRef.current.style.height = "6rem";
          console.log(entry.intersectionRatio);
          if (entry.intersectionRatio > 0.1) {
            console.log("0.5");
            mainRef.current.style.animation = "upMotion 3s ease-out 1";
          }
        } else {
          console.log("not intersecting");
          targetRef.current.style.backgroundColor = "transparent";
          targetRef.current.style.height = "8rem";
          mainRef.current.style.animation = "none";
        }
      },
      {
        //      root: document.querySelector('#scrollArea'),
        rootMargin: "-20px",
        threshold: [0, 0.1],
      }
    );
    observer.observe(mainRef.current);
    console.log(observer);
    return () => {
      observer.unobserve(currentTarget);
    };
  }, []);

  return (
    <div className={`App ${modalState.isOpenModal ? "modal-height" : null}`}>
      <Header targetRef={targetRef} setMenuOpen={setMenuOpen} />
      {modalState.isOpenModal && <Modal />}
      {menuToggle && <Menu />}
      <Routes>
        <Route path="/*" element={<Main mainRef={mainRef} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
