/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LogoJ from "../imageSvg/LogoJ";
import LogoWhite from "../imageSvg/LogoWhite";

function Footer() {
  return (
    <div className="w-full pb-[50px] bg-black">
      <div className="w-[80%] my-0 mx-auto">
        <div className="pt-[40px]">
          <div className="flex justify-between">
            <div className="flex">
              <span className="mr-[5px]">
                <LogoJ />
              </span>
              <LogoWhite />
            </div>
            <div className="text-[#fff]">
              <h4 className="font-medium">Company</h4>
              <ul>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Introduce</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">TikTok Browse</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">News</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Contact</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Career</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">ByteDance</a>
                </li>
              </ul>
            </div>
            <div className="text-[#fff]">
              <h4 className="font-medium">Program</h4>
              <ul>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">TikTok for Good</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Advertisement</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Developers</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">TikTok Rewards</a>
                </li>
              </ul>
            </div>
            <div className="text-[#fff]">
              <h4 className="font-medium">Support</h4>
              <ul>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Help Center</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Safety Center</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Creator Portal</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Community Guide</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Transparent</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Accessibility</a>
                </li>
              </ul>
            </div>
            <div className="text-[#fff]">
              <h4 className="font-medium">Juridical</h4>
              <ul>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Terms of Use</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">TIKTOK . LAW ENFORCEMENT</a>
                </li>
                <li className="mt-[10px] text-[#999] hover:underline">
                  <a href="#">PRINCIPLES</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex mt-[50px]">
            <span className="text-[#999] w-full flex justify-end">© 2022 TikTok</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
