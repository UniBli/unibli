import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavbarLogin/NavBar";
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
            <NavBar/>
         )
      }
    </>
  );
}

export default App;
