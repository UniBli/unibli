import React from "react";
import { Button } from "primereact/button";


import './styles/DetalhesReservaButton.css'

const DetalhesReservaButton = () => {

  return (
        <>
          <div className="containerDetalhesReservaButton">
            <Button
              label="Detalhes da Reserva" 
              icon="pi pi-info-circle" 
              iconPos="right"
              severity="success"
              className="detalhesReservaButton"
              text
            />
          </div>
        </>
  );
};

export default DetalhesReservaButton;
