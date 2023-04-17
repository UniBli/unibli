import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Avatar } from 'primereact/avatar';
// import { Container } from 'react-bootstrap'; NÃO ESTOU CONSEGUINDO USAR 

import './styles/Profile.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <div className="containerProfile">
        <Avatar image={user.picture} alt={user.name} size="xlarge" shape="circle"/>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        </div>
      </>
    )
  );
};

export default Profile;