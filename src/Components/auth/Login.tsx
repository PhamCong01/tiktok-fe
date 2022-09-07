import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { apiBase } from "../api";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { openDashboardLogin } from "../../redux/selector";

export default function LoginButton(props: any) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  const handlerLoginWithGoogle = () => {
    loginWithPopup();
    if (user && isAuthenticated) {
      const bodyUser = {
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        picture: user.picture,
      };
      axios
        .post(
          `${apiBase}/user/create`,
          { bodyUser },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("create user ok", res);
        })
        .catch((err) => {
          console.log("create user error", err);
        });
    }
  };
  const isOpenDashboardLogin = useSelector(openDashboardLogin);
  console.log(isOpenDashboardLogin);
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
      </Dialog>
    </>
  );
}
