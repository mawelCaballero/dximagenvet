import React from "react";
import logo from './logo.png';

export const Header = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container px-4">
                <img style={{width: "50px",  paddingRight: "10px"}} src={logo} className="App-logo" alt="logo" />

                <a className="navbar-brand" href="#page-top">DxImagenVet</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    {/* <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
                    </ul> */}
                </div>
            </div>
        </nav>
        <header className="bg-primary bg-gradient text-white">
            <div className="container px-4 text-center">
                <h1 className="fw-bolder">Diagnóstico por Imagen Veterinario</h1>
                <p className="lead">Accede a nuestro software de gestión</p>
                <a className="btn btn-lg btn-light" href="https://dximagenvet.actualpacs.com/actualpacs/login">Entra aquí</a>
            </div>
        </header>
  </>;
};
