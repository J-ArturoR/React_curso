import React, { Component } from "react";
import Logo from '../assets/img/logo.svg';
class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    {/* Logo */}
                    <div id="logo">
                        <img src={Logo} className="app-logo" alt="AR"></img>
                        <span id="brand">
                             <strong> Curso</strong> React
                        </span>
                    </div>
                    {/*Menu*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Formulario </a>
                            </li>
                            <li>
                                <a href="#">Pagina 1 </a>
                            </li>
                            <li>
                                <a href="#">Pagina 2 </a>
                            </li>
                        </ul>
                    </nav>
                    {/*Limpiar Flotados*/}
                    <div classNameName="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;