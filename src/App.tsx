import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import LoginButton from "./Components/auth/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginButton />} />
      </Routes>
    </div>
  );
}

export default App;
