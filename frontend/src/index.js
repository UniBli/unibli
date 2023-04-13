import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

/** 
 * O dotenv é um pacote que carrega variáveis de ambiente de um arquivo
 * .env na raiz do seu projeto. É útil para definir variáveis de ambiente 
 * locais ou em tempo de desenvolvimento, pois você pode definir diferentes 
 * valores de variáveis de ambiente para diferentes ambientes, como 
 * desenvolvimento, teste ou produção. O dotenv não requer que você defina 
 * variáveis de ambiente manualmente no sistema operacional ou em outras 
 * ferramentas de configuração, tornando-o fácil de usar e portátil.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
      </Auth0Provider>
  </React.StrictMode>
);