import React, { useState } from "react";
import Logo from "./Logo";
import { FiSend } from "react-icons/fi";
import { BiMessageAltMinus, BiSearchAlt } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import LoginButton from "../../auth/Login";
const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-[100%] flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="w-[30%] relative">
          <input
            type="text"
            className="w-[100%] pl-[20px] py-[13px] rounded-3xl outline-gray-400 outline-1 bg-[#eeeeee] text-[#333]"
            placeholder="Search accounts and videos"
          />
          <span className="absolute border-l border-gray-400 top-[50%] right-[5%] pl-[10px] text-gray-400 translate-y-[-50%]">
            <span className="text-[30px]">
              <BiSearchAlt />
            </span>
          </span>
        </div>
        {isAuthenticated ? (
          <div className="flex items-center">
            <div className="py-[6px] px-[15px] border border-gray-300 mr-[35px] cursor-pointer">
              <button className="flex items-center font-medium text-[16px]">
                <span className="text-[23px] mr-[5px]">
                  <MdAdd />
                </span>{" "}
                Upload
              </button>
            </div>
            <div className="text-[26px] mr-[35px] cursor-pointer">
              <FiSend />
            </div>
            <div className="text-[26px] mr-[35px] cursor-pointer">
              <BiMessageAltMinus />
            </div>
            <div className="cursor-pointer">
              <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Stack>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="flex items-center mr-[20px]">
              <div className="py-[6px] px-[15px] border rounded-sm border-gray-300 cursor-pointer">
                <button className="flex items-center font-medium text-[16px]">
                  <span className="text-[23px] mr-[5px]">
                    <MdAdd />
                  </span>{" "}
                  Upload
                </button>
              </div>
            </div>
            <div
              className="mr-[20px] py-[6px] px-[25px] rounded-md bg-[#f80000] font-medium  text-[#fff] cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <button>Log in</button>
            </div>
            <div className="text-[26px] cursor-pointer">
              <IoMdMore />
            </div>
            <div>
              <LoginButton open={open} close={() => setOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
