import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'; 

export const NavbarComponent = () => {

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        Usuario
                    </span>
                    <button className="nav-item nav-link btn">
                        Log Out
                    </button>
                </ul>
            </div>
        </nav>

    )

}
