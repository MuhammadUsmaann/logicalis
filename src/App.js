import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DigitalFabricAction from "./components/digital fabric/action";
import MainBody from "./components/main";
import Detailview from "./components/main/detailview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/clientview" element={<MainBody />} />
        <Route path="/detail-view" element={<Detailview />} />
        <Route
          path="/digital-fabric-action"
          element={<DigitalFabricAction />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
