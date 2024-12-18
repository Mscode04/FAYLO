import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Vid from './Navlinks/Vid';
import About from './Navlinks/About';
import Doc from './Navlinks/Doc';
import Contact from './Navlinks/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from './components/Dashbord';
import './App.css';

// Placeholder component for FAYLO
const FAYLO = () => <div>Welcome to FAYLO!</div>;

function App() {
  const [buttonText, setButtonText] = useState("Let's Start");
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    if (buttonText === "Reopen Website") {
      // Open the website link
      window.location.href = "https://mscode04.github.io/FAYLO";
    } else {
      // Navigate to the Dashboard first
      navigate('/');
      setButtonText("Reopen Website"); // Change button text to 'Reopen Website' after navigating
    }
  };

  // Only show the button on the home page ('/'), dashboard ('/dashboard'), or '/FAYLO'
  const showButton = location.pathname === '/' || location.pathname === '/dashboard' || location.pathname === '/FAYLO';

  return (
    <div className="app">
      <div className="nav-bar">
        <Navbar />
        <div className="side-and-body">
          <div className="main-body">
            {showButton && (
              <div className="container start">
                {/* Button to navigate and change text */}
                <button onClick={handleButtonClick}>{buttonText}</button>
              </div>
            )}
            <Routes>
              <Route path="/tutorials" element={<Vid />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/doc" element={<Doc />} />
              <Route path="/" element={<Dashbord />} />
              <Route path="/FAYLO" element={<FAYLO />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
