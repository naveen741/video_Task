import './BusinessCard.css';
import About from './BusinessCard/About';
import Footer from './BusinessCard/Footer';
import Info from './BusinessCard/Info';
import Interests from './BusinessCard/Interests';
function BussinesCard() {
  return (
    <div className="BusinessCard">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default BussinesCard;
