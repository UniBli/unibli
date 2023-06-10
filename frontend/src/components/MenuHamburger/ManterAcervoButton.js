import React from "react";
import { Button } from "primereact/button";


import './styles/ManterAcervoButton.css'

const ManterAcervoButton = () => {

  return (
        <>
          <div className="containerManterAcervoButton">
            <Button
              label="Manter Acervo" 
              icon="pi pi-plus" 
              iconPos="right"
              severity="success"
              className="manterAcervoButton"
              text
            />
          </div>
        </>
  );
};

export default ManterAcervoButton;
