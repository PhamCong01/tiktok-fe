import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { apiBase } from "../api";
function LoginButton() {
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
  return (
    <>
      <button onClick={() => handlerLoginWithGoogle()}>Log in</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </button>
    </>
  );
}

export default LoginButton;
