import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-[100%] border-b p-[10px] border-[#999] ">
        <div className="w-[80%] my-0 mx-auto ">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
