import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import WhitePaper from "./components/whitePaper/WhitePaper";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="whitePaper" element={<WhitePaper />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
