import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'; 

export const NavbarComponent = () => {

    const navigate = useNavigate();

    const onLogOut = () => {

        navigate('login', {
            replace: true
        })

    }

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            <a className="navbar-brand" href="#">VentaTodo</a>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ofertas</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                        Categorías
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Categoria 1</a>
                        <a className="dropdown-item" href="#">Categoria 2</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Categoria 3</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Novedades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Rebajas</a>
                </li>
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        Usuario
                    </span>
                    <button className="nav-item nav-link btn" onClick={ onLogOut }>
                        Log Out
                    </button>
                </ul>
            </div>
        </nav>

    )

}
