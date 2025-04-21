import React from 'react';
import Logo from "../../assets/logo/logo.png";
import './Navbar.css'

const Navbar: React.FC = () => {
    return (
        <nav className="navbar-stuff">
            <div className="container">
                <a href="/">
                    <img src={Logo} alt="logo" className="logo" />
                </a>
                <ul className="nav-buttons">
                    <li className="nav-item">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#videos">Videos</a>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;