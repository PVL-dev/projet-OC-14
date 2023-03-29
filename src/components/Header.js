import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpg'

const Header = () => {
    return (
        <header className="header">
            <Link className="logo" to="/home">
                <img src={logo} alt="Wealth Health logo" />
                <h1>HRnet</h1>
            </Link>
            
            <nav className="nav">
                <Link className="nav__link" to="/home">
                    <p>Create Employee</p>
                </Link>

                <Link className="nav__link" to="/employees">
                    <p>View Employees</p>
                </Link>
            </nav>
        </header>
    );
};

export default Header;

