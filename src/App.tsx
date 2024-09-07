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
import PageNotFound from "@/pages/PageNotFound";

function App() {
  const modalState = useSelector(sampleModalSelector);
  const appRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className={`App ${modalState.isOpenModal ? "modal-height" : ""}`}
      ref={appRef}
    >
      <Header />
      {modalState.isOpenModal && <Modal />}
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
      </Routes>
    </div>
  );
}

export default App;
