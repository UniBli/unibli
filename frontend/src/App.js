import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import ConsultarTitulos from './components/ConsultarTitulos/ConsultarTitulos';
import NavBar from "./components/NavbarLogin/NavBar";
import FooterPage from "./components/FooterPage/FooterPage";

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} />
      <ConsultarTitulos/>
      <FooterPage/>
    </>
  );
}

export default App;
