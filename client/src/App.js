import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import GameHome from "./components/game/GameHome";
import LoginLayout from "./components/game/login/LoginLayout";

function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/game" element={<GameHome />} />
        <Route path="/login" element={<LoginLayout />} />
      </Routes>
  );
}

export default App;
