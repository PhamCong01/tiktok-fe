import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
