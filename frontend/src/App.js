import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import NavbarLogin from "./components/NavbarLogin/NavbarLogin";
import LogoutButton from "./components/Auth0/LogoutButton";
import Profile from "./components/Auth0/Profile";



function App() {
  const {isAuthenticated} = useAuth0();

  return (
    
    <>
      {//contexto JSX
        isAuthenticated 
        ?(//Para inserir REACT no contexto JSX
            <>
              <LogoutButton/>
              <Profile/>
            </>
         ) 
        :(
            <NavbarLogin/>
         )
      }
    </>
  );
}

export default App;
