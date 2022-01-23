import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WhitePaper from "./components/whitePaper/WhitePaper";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="whitePaper" element={<WhitePaper />} />
        </Route>
      </Routes>
  );
}

export default App;
