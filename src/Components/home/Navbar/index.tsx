import React from "react";
import Fllowing from "./Fllowing";
import NavbarNavigate from "./NavbarNavigate";
import RecommendedAccount from "./RecommendedAccount";

function Navbar() {
  return (
    <>
      <NavbarNavigate />
      <RecommendedAccount/>
      <Fllowing/>
    </>
  );
}
export default Navbar;
