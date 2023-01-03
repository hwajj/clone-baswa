import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import GlobalFonts from "./scss/fonts/font";
function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
