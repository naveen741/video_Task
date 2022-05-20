import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './ConactUs';
import BussinesCard from './component/BusinessCard';
import AirBNB from './component/AirBNB';
import MemeGenerator from './component/MemeGenerator';
import TravelJournel from './component/TravelJournel';
import Tenzies from './component/Tenzies';
import Quiz from './component/Quiz';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="navBar">
        <div className="heading">
          <h1>Video Task</h1>
        </div>
        
        <nav className="navi">
        <Link className="item" to="/">Home</Link>
        <Link className="item" to="/about">About</Link>
        <Link className="item" to="/contact">Contact</Link>
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/contact" element={<Contactus/>}/>
          <Route path="/businessCard" element={<BussinesCard/>}/>
          <Route path="/airBNB" element={<AirBNB/>}/>
          <Route path="/travelJournel" element={<TravelJournel/>}/>
          <Route path="/memeGenerator" element={<MemeGenerator/>}/>
          <Route path="/tenzies" element={<Tenzies/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
