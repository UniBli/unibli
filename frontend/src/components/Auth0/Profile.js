import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Avatar } from 'primereact/avatar';
// import { Container } from 'react-bootstrap'; NÃO ESTOU CONSEGUINDO USAR 

import './styles/Profile.css'

const Profile = () => {

  //Para adicionar a palavra 'Menu' no header do componente Sidebar 
  useEffect(() => {
    const sidebarHeader = document.querySelector(".p-sidebar-header");
    const txtMenu = document.createElement("h2");
    
    txtMenu.textContent = "Menu";
    txtMenu.style.color = "#055904";
    txtMenu.style.margin = "0";
    
    //Verificação para escrever o txtMenu apenas 1 vez
    if (!sidebarHeader.querySelector("h2")) {
      sidebarHeader.insertBefore  (txtMenu, sidebarHeader.firstChild);
    }
  }, []);

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <div className="avatarProfile">
          <Avatar image={user.picture} alt={user.name} size="xlarge" shape="circle"/>
        </div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </>
    )
  );
};

export default Profile;