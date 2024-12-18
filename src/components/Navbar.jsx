import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Ensure this line is included

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-nav position-fixed" style={{ zIndex: 100, width: '100%' }}>
      <div className="container-fluid">
        {/* Logo and Brand */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo-main" style={{ height: '30px' }} />
          
        </Link>

        {/* Toggler Button for Responsive Navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tutorials">
                Video Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doc">
                Doc
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
