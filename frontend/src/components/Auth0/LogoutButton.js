import React from "react";
import { Button } from "primereact/button";
import { useAuth0 } from "@auth0/auth0-react";

import './styles/LogoutButton.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
          <Button
            label="Sair" 
            icon="pi pi-sign-out" 
            iconPos="right"
            severity="success"
            className="logoutButton"
            onClick={() => logout({ 
              logoutParams: { returnTo: window.location.origin } 
            })}
            text
          />
  );
};

export default LogoutButton;
