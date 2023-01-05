import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "components/MainContent/Main";
import Header from "components/Header/Header";
import { sampleModalSelector } from "redux/reducer/modal";
import GlobalFonts from "scss/fonts/font";
import Modal from "components/Modal/Modal";
function App() {
  const modalState = useSelector(sampleModalSelector);
  console.log(modalState);
  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      {modalState.isOpenModal && <Modal />}
      <Routes>
        <Route path="/*" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
