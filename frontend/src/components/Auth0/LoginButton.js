import React from "react";
import { Button } from "primereact/button";

import { useAuth0 } from "@auth0/auth0-react";

import './style/LoginButton.css'


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button className="loginButton" onClick={() => loginWithRedirect()}
    >
     <label>Entrar</label>
     <i className="pi pi-sign-in"></i>
    </Button>
  );
};

export default LoginButton;