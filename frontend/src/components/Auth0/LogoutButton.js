import React from "react";
import { Button } from "primereact/button";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Button 
        label="Sair" icon="pi pi-sign-out" iconPos="right" 
        onClick={() => logout({ 
          logoutParams: { returnTo: window.location.origin } 
        })}
      />
    </>
  );
};

export default LogoutButton;