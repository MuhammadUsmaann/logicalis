import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import MainBody from "./components/main";
import Detailview from "./components/main/detailview";

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/detail-view" element={<Detailview />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
