import axios from "axios";
import { apiBase } from "../api";

export const handlerLoginWithGoogle = (user: any, isAuthenticated:boolean, loginWithPopup:any) => {
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
