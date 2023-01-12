import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "components/MainContent/Main";
import Header from "components/Header/Header";
import { sampleModalSelector } from "redux/reducer/modal";
import Modal from "components/Modal/Modal";
import Footer from "./components/Footer/Footer";

function App() {
  const modalState = useSelector(sampleModalSelector);
  const [menuToggle, setMenuToggle] = useState(false);
  const setMenuOpen = () => {
    setMenuToggle((menuToggle) => !menuToggle);
    console.log(menuToggle);
  };
  const appRef = useRef(null);
  const mainRef = useRef(null);
  const headerRef = useRef(null);
  const galleryIndexRef = useRef(null);
  const systemRef = useRef(null);

  const allRefs = {};

  useEffect(() => {
    // const headerHeight = headerRef.current.offsetHeight;
    console.log(allRefs);
    const onScroll = () => {
      if (scrollY > 10) {
        // add class

        headerRef.current.classList.add("header-scroll-up");
      } else {
        headerRef.current.classList.remove("header-scroll-up");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const currentTarget = headerRef.current;
    console.log(allRefs.current);
    const observer = new IntersectionObserver(
      (entries, observer) => {
        //console.log(observer);
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            console.log("not");
            entry.target.classList.remove("upMotionClass");
          } else {
            console.log("intersecting");
            entry.target.classList.add("upMotionClass");
            // mainRef.current.style.animation = "upMotion 3s ease-out 1";
            //console.log();
          }
        });
      },
      {
        //      root: document.querySelector('#scrollArea'),
        // rootMargin: "-200px",
        //  threshold: [0, 0.2],
      }
    );
    for (const item in allRefs) {
      observer.observe(allRefs[item]);
    }
    // observer.observe(allRefs.current);
    observer.observe(systemRef.current);
    observer.observe(galleryIndexRef.current);
    //console.log(observer);
    return () => {
      for (const item in allRefs) {
        observer.unobserve(allRefs[item]);
      }
      // observer.observe(allRefs.current);
      observer.unobserve(systemRef.current);
      observer.unobserve(galleryIndexRef.current);
    };
  }, []);

  return (
    <div
      className={`App ${modalState.isOpenModal ? "modal-height" : ""}`}
      ref={appRef}
    >
      <Header headerRef={headerRef} setMenuOpen={setMenuOpen} />
      {modalState.isOpenModal && <Modal />}
      {menuToggle && <Menu />}
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Main
                mainRef={mainRef}
                systemRef={systemRef}
                galleryIndexRef={galleryIndexRef}
                allRefs={allRefs}
              />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
