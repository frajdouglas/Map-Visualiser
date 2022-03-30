import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.component/Header";
import SingleScenario from "./Components/Filter.components/SingleScenario";
import Difference from "./Components/Filter.components/Difference";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="sideBar">
          <Header />
          <Routes>
            <Route path="/" element={<SingleScenario />} />
            <Route path="/Difference" element={<Difference />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
