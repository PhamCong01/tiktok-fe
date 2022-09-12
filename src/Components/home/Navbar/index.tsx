import React from "react";
import Discover from "./Discover";
import Fllowing from "./Fllowing";
import NavbarNavigate from "./NavbarNavigate";
import RecommendedAccount from "./RecommendedAccount";

function Navbar() {
  return (
    <>
      <NavbarNavigate />
      <RecommendedAccount/>
      <Fllowing/>
      <Discover/>
    </>
  );
}
export default Navbar;
