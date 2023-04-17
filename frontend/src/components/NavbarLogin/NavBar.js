import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from "../Auth0/LoginButton.js";
import './styles/NavBar.css'


import InputPesquisa from './InputPesquisa.js'
import MenuHamburger from './MenuHamburger.js'

const NavBar = ({ isAuthenticated  }) => {
    return (

            <Navbar className="navbar">
                <Navbar.Brand className="logo">
                    <img
                    src="https://raw.githubusercontent.com/thyagoerick/unibli/1c3262dea4dcfe8fffc68eff66435db76f77a40b/frontend/public/img/logoUniBliNav_F-Positivo.svg"
                    className="d-inline-block align-top"
                    alt="Logo UniBli"
                    />
                </Navbar.Brand>
                <InputPesquisa className="search"/>
                {isAuthenticated ? <MenuHamburger/> : <LoginButton className="loginButton"/>  }              
            </Navbar>
    )
}

export default NavBar;
