import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Navbar from "./Components/Navbar";
import UploadContent from "./Components/Upload";
function App() {
  return (
    <div className="App">
       <div className="fixed bg-[#fff] top-0 w-[100%] border-b p-[10px] border-[#999] z-[999]">
        <div className="w-[80%] my-0 mx-auto realative">
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadContent />} />
      </Routes>
    </div>
  );
}

export default App;
