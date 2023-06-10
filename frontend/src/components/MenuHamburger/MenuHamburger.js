import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';
import { Sidebar } from 'primereact/sidebar';
import React, { useState } from "react";

        
import LogoutButton from '../Auth0/LogoutButton';
import Profile from "../Auth0/Profile";

import SettingsButton from "./SettingsButton";
import DetalhesReservaButton from "./DetalhesReservaButton";
import ManterAcervoButton from "./ManterAcervoButton";

import './styles/MenuHamburger.css';

import { useAuth0 } from "@auth0/auth0-react";

const MenuHamburger = () => {
  const [visibleRight, setVisibleRight] = useState(false);

  const {user } = useAuth0();

  return (
    <>
      <Button 
        icon="pi pi-bars"
        className="btn-hamburger"
        onClick={() => setVisibleRight(true)}
        text 
      />
      
      <Sidebar 
        visible={visibleRight} 
        position="right" 
        onHide={() => setVisibleRight(false)}
      >
        <div className="usersActions">

          <Profile/>
          <Divider/>
          <LogoutButton/>
          <SettingsButton/>
          <DetalhesReservaButton/>

        </div>

        {/* Ajustar usando a requisição da role*/}
        {
         user.picture 
          ? (
              <div className="bibliotecarioActions">
                <ManterAcervoButton/>
              </div>
            ) 
          : (<div></div>)
        }
      </Sidebar>
    </>
  );
};

export default MenuHamburger;