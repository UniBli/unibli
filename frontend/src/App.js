import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavbarLogin/NavBar";

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    
    <>
      {//contexto JSX
        isAuthenticated 
        ?(//Para inserir REACT no contexto JSX
            <>
             <NavBar isAuthenticated={true} />
            </>
         ) 
        :(
            <NavBar isAuthenticated={false}/>
         )
      }
    </>
  );
}

export default App;
