import React, { useState, useEffect, useRef, RefObject } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "@/pages/Main";
import Header from "@/components/Header/Header";
import { sampleModalSelector } from "@/redux/reducer/modal";
import Modal from "@/components/Modal/Modal";
import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu";
import System from "@/pages/System";

function App() {
  const modalState = useSelector(sampleModalSelector);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const setMenuOpen = () => {
    setMenuToggle((prevToggle) => !prevToggle);
    console.log(menuToggle);
  };

  const appRef = useRef<HTMLDivElement | null>(null);

  const headerRef = useRef<HTMLElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const galleryIndexRef = useRef<HTMLElement | null>(null);
  const systemRef = useRef<HTMLElement | null>(null);
  const allRefs = useRef<
    React.MutableRefObject<Record<string, HTMLElement | null>>
  >({}).current;
  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 10) {
          headerRef.current.classList.add("header-scroll-up");
        } else {
          headerRef.current.classList.remove("header-scroll-up");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
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
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/system" element={<System />} /> {/* /system 경로 추가 */}
      </Routes>
    </div>
  );
}

export default App;
