import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import LoginButton from "./Components/auth/Login";
import Home from "./Components/home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginButton />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
