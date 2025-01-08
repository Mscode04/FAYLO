import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is included

function Navbar() {
  return (
    <>
      {/* Navigation Bar */}
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

      {/* Small Red Banner */}
      <div
        className="text-center"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px',
          position: 'fixed',
          top: '56px',
          width: '100%',
          zIndex: 99,
          fontSize: '14px',
        }}
      >
        <span>Read the document to learn how Fylo works</span>
        <Link
          to="/doc"
          style={{
            marginLeft: '10px',
            padding: '5px 15px',
            backgroundColor: 'black',
            color: 'red',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Docs
        </Link>
      </div>
    </>
  );
}

export default Navbar;
