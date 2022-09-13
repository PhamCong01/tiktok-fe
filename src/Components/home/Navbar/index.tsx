import React from "react";
import Discover from "./Discover";
import Fllowing from "./Fllowing";
import Introduce from "./Introduce";
import NavbarNavigate from "./NavbarNavigate";
import RecommendedAccount from "./RecommendedAccount";

function Navbar() {
  return (
    <div className=" w-[30%]  h-[calc(100vh-100px)] overflow-hidden hover:overflow-auto ">
      <NavbarNavigate />
      <RecommendedAccount/>
      <Fllowing/>
      <Discover/>
      <Introduce/>
    </div>
  );
}
export default Navbar;
