import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/home" className="navbar-brand" href="#">
                <img src={logo} classNameName="img-fluid w-50" alt=""/>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-4 active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="/review">Review</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="/order">Order</a>
                    </li>
                    <li className="nav-item mt-2">
                        <Link to="/login" className="login-btn" href="#">Login</Link>
                    </li>
                    <li  className="nav-item ml-3">
                        <Link to="/admin" className="login-btn" href="/admin">Admin</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;