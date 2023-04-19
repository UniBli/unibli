import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavbarLogin/NavBar";

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <NavBar isAuthenticated={isAuthenticated} />
  );
}

export default App;
