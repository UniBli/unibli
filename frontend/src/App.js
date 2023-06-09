import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavbarLogin/NavBar";
import ConsultarTitulos from './components/ConsultarTitulos/ConsultarTitulos';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} />
      <ConsultarTitulos/>
    </>
  );
}

export default App;
