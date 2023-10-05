import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ConsultarTitulos from './components/ConsultarTitulos/ConsultarTitulos';
import NavBar from "./components/NavbarLogin/NavBar";
import FooterPage from "./components/FooterPage/FooterPage";

import './App.css'

const App = () => {
  
  // hook do auth0
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
