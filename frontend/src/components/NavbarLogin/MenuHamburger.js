import React,  { useState }  from "react";
import { Button } from "primereact/button";
import { Sidebar } from 'primereact/sidebar';
import { Divider } from 'primereact/divider';

        
import LogoutButton from '../Auth0/LogoutButton'
import Profile from "../Auth0/Profile";


import './styles/MenuHamburger.css'

const MenuHamburger = () => {
  const [visibleRight, setVisibleRight] = useState(false);

  return (
    <>
      <Button 
        icon="pi pi-bars" 
        severity="success"
        className="btn-hamburger"
        onClick={() => setVisibleRight(true)}
        text 
      />
      
      <Sidebar 
        visible={visibleRight} 
        position="right" 
        onHide={() => setVisibleRight(false)}
      >
        <Profile/>
        <Divider  />
        <LogoutButton/>
      </Sidebar>
    </>
  );
};

export default MenuHamburger;