import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import GameHome from "./components/game/GameHome";
import Login from "./components/game/login/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/game" element={<GameHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
