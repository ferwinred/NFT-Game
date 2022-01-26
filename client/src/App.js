import { Routes, Route, Navigate } from "react-router-dom";
// import { useState } from 'react'
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import GameHome from "./components/game/GameHome";
import LoginLayout from "./components/game/login/LoginLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const {isLogged} =useSelector((state) => state.authReducer);
  console.log('logge?: ', isLogged);

  useEffect(() =>{
    
  },[isLogged])

  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/game" element={ isLogged ? <GameHome /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginLayout />} />
      </Routes>
  );
}

export default App;
