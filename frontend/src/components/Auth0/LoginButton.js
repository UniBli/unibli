import React from "react";
import { Button } from "primereact/button";

import { useAuth0 } from "@auth0/auth0-react";

import './styles/LoginButton.css'


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (

    <Button
    label="Entrar"
    icon="pi pi-sign-in"
    iconPos="right"
    severity="success"
    className="loginButton"
    onClick={() => loginWithRedirect()}
    rounded
  />
  );
};

export default LoginButton;