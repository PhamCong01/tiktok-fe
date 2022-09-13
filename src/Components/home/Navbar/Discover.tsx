import React, { useEffect } from "react";
import { dataDiscover,randomDiscover } from "../../../data/dataFunctions";
import Hashtag from "../../imageSvg/Hashtag";
function Discover() {
    randomDiscover()
  return (
    <div className="w-[100%]">
      <div className="mb-[10px]">
        <h4 className="font-[600] text-[#666] mb-[5px] px-[10px]">Discover</h4>
      </div>
      <div className="flex items-center flex-wrap">
        {dataDiscover &&
          dataDiscover.map((data, index) => {
            return (
              <div className="border border-gray-400 mb-[10px] cursor-pointer hover:bg-[#f3f3f3] flex items-center rounded-[40px] p-[7px] text-[14px] mr-[15px]" key={index}>
                <Hashtag /> <span className="ml-[6px]"> {data.name}</span>
              </div>
            );
          })}
      </div>
      <div className=" border-b border-gray-300 mt-[20px]"></div>
    </div>
  );
}

export default Discover;
