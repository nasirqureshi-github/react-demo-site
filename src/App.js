import './App.css';
import Navbar from './components/Includes/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/Includes/Footer';


function App() {
  return (
    //Rect-router-dom version 6.22.0

    <Router>
    <div className="App">
    <Navbar/>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Services" element={<Services/>} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

    </div>
    <Footer/>
    </Router>
  );
}

export default App;
