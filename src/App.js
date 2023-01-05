import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "components/MainContent/Main";
import Header from "components/Header/Header";
import { sampleModalSelector } from "redux/reducer/modal";
import Modal from "components/Modal/Modal";
import useIntersectionObserver from "./utils/hook/useIntersectionObserver";

function App() {
  const target = useRef(null);
  const modalState = useSelector(sampleModalSelector);
  console.log(modalState);

  return (
    <div className="App">
      <Header />
      {modalState.isOpenModal && <Modal />}
      <Routes>
        <Route path="/*" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
