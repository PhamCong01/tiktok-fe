import { Button } from "@mui/material";
import React from "react";
import Upload from "../imageSvg/Upload";
function UploadContent() {
  return (
    <>
      <div className="w-[80%] h-[100vh] shadow-2xl mb-[15px] rounded-lg mt-[100px] my-0 mx-auto py-[20px] px-[50px]">
        <h1 className="text-[30px] mb-[5px] font-medium">Upload video</h1>
        <p className="text-[20px] text-[#999] font-[300]">
          Post videos to your account
        </p>
        <div className="mt-[30px] flex justify-center">
          <div className="relative border-[2px] rounded-xl hover:border-[red] hover:bg-[#f4f3f3] w-[30%] mr-[20px] h-[60vh] border-dashed">
            <div className="absolute w-[100%] flex justify-center flex-col items-center text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Upload />
              <h2 className="text-[18px] font-medium mt-[25px] mb-[15px]">
                Select video to upload
              </h2>
              <p className="text-[#999]">Or drag and drop files</p>
              <p className="text-[#999] my-[7px]">MP4 or WebCODE</p>
              <p className="text-[#999] my-[7px]">
                Resolution 720x1280 or <br /> higher
              </p>
              <p className="text-[#999] my-[7px]">
                Up to 10 minutes <br /> Less than 2 GB
              </p>
              <button className="w-[80%] mt-[10px] py-[8px] bg-[#fe2c55] rounded-sm text-[#fff] font-medium">Select files</button>
            </div>
          </div>
          <div className="w-[70%] ">asdasdasdasd</div>
        </div>
      </div>
    </>
  );
}

export default UploadContent;
