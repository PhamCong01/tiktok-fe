import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useAuth0 } from "@auth0/auth0-react";

import { styled } from "@mui/material/styles";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { handlerLoginWithGoogle } from "./functionLogin";
import Google from "../imageSvg/Google";
import QRCode from "../imageSvg/QRCode";
import User from "../imageSvg/User";
import FaceBook from "../imageSvg/FaceBook";
import Twitter from "../imageSvg/Twitter";
import Line from "../imageSvg/Line";
import KakaoTalk from "../imageSvg/KakaoTalk";
import Apple from "../imageSvg/Apple";
import Intagram from "../imageSvg/Intagram";

const BootstrapDialogTitle = (props: any) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 3 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[900],
            background: (theme) => theme.palette.grey[200],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
export default function LoginButton(props: any) {
  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  return (
    <>
      <Dialog onClose={props.close} open={props.open}>
        <BootstrapDialog
          onClose={props.close}
          aria-labelledby="customized-dialog-title"
          open={props.open}
          fullWidth
          maxWidth="sm"
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={props.close}
          ></BootstrapDialogTitle>
          <DialogContent dividers>
            <h1 className="text-[32px] font-bold text-center mb-[20px]">
              Sign in to TikTok
            </h1>
            <div>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <QRCode />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Use QR code
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <User />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Phone Number / Email / TikTok ID
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <FaceBook />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Continue with Facebook
                </span>
              </div>
            </div>
            <div onClick={() =>
                handlerLoginWithGoogle(user, isAuthenticated, loginWithPopup)
              }>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <Google />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Continue with Google
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <Twitter />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Continue with Twitter
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <Line />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Continue with LINE
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <KakaoTalk />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Continue with KakaoTalk
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <Apple />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Continue with Apple
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center py-[10px] px-[10px] w-full border border-slate-800 mb-[20px] cursor-pointer">
                <Intagram />
                <span className="my-0 mx-auto font-medium text-[18px]">
                  Continue with Intagram
                </span>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
      </Dialog>
    </>
  );
}
