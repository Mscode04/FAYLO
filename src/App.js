import React, { useState,  } from 'react';
import { Routes, Route,  useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Vid from './Navlinks/Vid';
import About from './Navlinks/About';
import Doc from './Navlinks/Doc';
import Contact from './Navlinks/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from './components/Dashbord';
import './App.css';

function App() {
  const [buttonText, setButtonText] = useState("Lets Start");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonText === "Refresh") {
      // Refresh the page
      window.location.reload();
    } else {
      // Navigate to the Dashboard first
      navigate('/');
      setButtonText("Refresh"); // Change button text to 'Refresh' after navigating
    }
  };

  return (
    <div className="app">
      <div className='nav-bar'>
        <Navbar />
        <div className="side-and-body">
          <div className='main-body'>
            <div className='container start'>
              {/* Button to navigate and change text */}
              <button onClick={handleButtonClick}>{buttonText}</button>
            </div>
            <Routes>
              <Route path="/tutorials" element={<Vid />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/doc" element={<Doc />} />
              <Route path="/" element={<Dashbord />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
