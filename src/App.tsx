import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
       <div className="w-[100%] border-b p-[10px] border-[#999] ">
        <div className="w-[80%] my-0 mx-auto realative">
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
