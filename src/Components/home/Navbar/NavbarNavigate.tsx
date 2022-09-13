import React from "react";
import Fllowing from "../../imageSvg/Fllowing";
import Home from "../../imageSvg/Home";
import Live from "../../imageSvg/Live";

function NavbarNavigate() {
  return (
    <>
      <div className="w-[100%] border-b border-gray-300 mb-[10px]">
        <div className="flex items-center py-[10px] px-[5px] cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          <Home />
          <span className="text-[20px] ml-[18px] font-bold">For you</span>
        </div>
        <div className="flex items-center py-[10px] px-[5px] cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          <Fllowing />
          <span className="text-[20px] ml-[18px] font-bold">Fllowing</span>
        </div>
        <div className="flex items-center py-[10px] px-[5px] mb-[5px] cursor-pointer hover:bg-gray-100 hover:rounded-lg">
          <Live />
          <span className="text-[20px] ml-[18px] font-bold">Live</span>
        </div>
      </div>
    </>
  );
}
export default NavbarNavigate;
