import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    }
  }, [user]);
  return (
    <>
      <button onClick={() => loginWithPopup()}>Log in</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </button>
    </>
  );
};

export default LoginButton;
