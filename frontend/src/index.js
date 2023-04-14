import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react"; //serviço de autenticação
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";//theme    
import "primereact/resources/primereact.min.css";//core
import "primeicons/primeicons.css";//icons                                      
        
//variaveis de ambiente configuradas no .env
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
      }}>
        <App/>
      </Auth0Provider>
  </React.StrictMode>
);