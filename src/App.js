import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Vid from './Navlinks/Vid';
import About from './Navlinks/About';
import Doc from './Navlinks/Doc';
import Contact from './Navlinks/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashbord from './components/Dashbord';
import './App.css'
function App() {
    return (
        <div className="app">
            <div className='nav-bar'>
                <Navbar />
                <div className="side-and-body">
                    <div className='main-body'>
                        <Routes>
                            <Route path="/tutorials" element={<Vid />} />
                            <Route path="/about" element={< About />} />
                            <Route path="/contact" element={< Contact />} />
                            <Route path="/doc" element={< Doc />} />
                            <Route path="/" element={<Dashbord />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
