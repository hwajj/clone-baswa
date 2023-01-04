import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/MainContent/Main";
import Header from "./components/Header/Header";
import GlobalFonts from "./scss/fonts/font";
import Modal from "./components/Modal/Modal";
function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <Modal />
      <Routes>
        <Route path="/*" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
