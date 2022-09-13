import React from "react";
import {
  introData,
  tiktokDeveloperData,
  helpData,
} from "../../../data/dataFunctions";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
function Introduce() {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  return (
    <div className="w-[100%]">
      <div>
        <ul className="flex flex-wrap my-[15px] text-[#999] ">
          {introData.map((intro, index) => {
            return (
              <li
                className="mr-[14px] text-[14px] cursor-pointer mb-[5px]"
                key={index}
              >
                {intro.name}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-wrap mb-[15px] text-[#999] ">
          {tiktokDeveloperData.map((developer, index) => {
            return (
              <li
                className="mr-[14px] text-[14px] cursor-pointer mb-[5px]"
                key={index}
              >
                {developer.name}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-wrap mb-[15px] text-[#999] ">
          {helpData.map((help, index) => {
            return (
              <li
                className="mr-[14px] text-[14px] cursor-pointer mb-[5px]"
                key={index}
              >
                {help.name}
              </li>
            );
          })}
        </ul>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">
                TIKTOK . LAW ENFORCEMENT PRINCIPLES
              </Typography>
            </React.Fragment>
          }
        >
          <Button>
            <p className="mr-[14px] text-[14px] cursor-pointer mb-[5px] text-[#999]">
              More
            </p>
          </Button>
        </HtmlTooltip>

        <div>
          <p className="mr-[14px] text-[14px] cursor-pointer mb-[5px] text-[#999]">
            © 2022 TikTok
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
