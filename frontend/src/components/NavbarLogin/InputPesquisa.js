import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./styles/InputPesquisa.css"

const InputPesquisa = () => {
    return (
        <>
            <div className="p-inputgroup container">
                <InputText placeholder="Pesquise pelo título desejado" className="input-pesquisa" />
                <Button icon="pi pi-search" className="button-pesquisa" severity="success"/>
            </div>
        </>      
    )
}

export default InputPesquisa;
