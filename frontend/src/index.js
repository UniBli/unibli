import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react"; //serviço de autenticação
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";//theme    
import "primereact/resources/primereact.min.css";//core
import "primeicons/primeicons.css";//icons                                      

import { Scrollbars } from 'react-custom-scrollbars';


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
      <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          thumbSize={400}
          style={{ width: '100%', height: '100vh' }}
          renderThumbVertical={props => (
            <div {...props} style={{ backgroundColor: '#055904', borderRadius:'5px' }}/>
          )}
        >
          <App/>
        </Scrollbars>
      </Auth0Provider>
  </React.StrictMode>
);