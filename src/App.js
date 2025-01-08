
import { Routes, Route,Link  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Vid from './Navlinks/Vid';
import About from './Navlinks/About';
import Doc from './Navlinks/Doc';
import Contact from './Navlinks/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from './components/Dashbord';
import './App.css';
import AnalysisReport from "./components/AnalysisReport";

function App() {
  const analysisData = JSON.parse(localStorage.getItem("analysisData"));
  return (
    <div className="app">
      <div className="nav-bar">
        <Navbar />
        <div className="side-and-body">
          <div className="main-body">
           
              <div className="container start">
                
                <Link className="nav-link" to="/">
                <button className='button-main-box'>Lets Start</button>
                              </Link>
              </div>
            
            <Routes>
              <Route path="/tutorials" element={<Vid />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/doc" element={<Doc />} />
              <Route path="/" element={<Dashbord />} />
              <Route path="/report" element={<AnalysisReport data={analysisData} />} />
            
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
