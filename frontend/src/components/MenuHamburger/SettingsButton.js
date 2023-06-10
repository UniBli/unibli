import React from "react";
import { Button } from "primereact/button";


import './styles/SettingsButton.css'

const SettingsButton = () => {

  return (
        <>
          <div className="containerSettingsButton">
            <Button
              label="Configurações" 
              icon="pi pi-cog" 
              iconPos="right"
              severity="success"
              className="settingsButton"
              text
            />
          </div>
        </>
  );
};

export default SettingsButton;
