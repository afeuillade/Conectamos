import "../App.css"; 
import rescoldo from "../assets/rescoldo.JPG";

function HeroSection() {
  return (
    <div
      className="fullscreen-overlay"
      style={{ backgroundImage: `url(${rescoldo})` }}
    >
      <div className="overlay-content">
        <h1>ConectaMos</h1>
        <p>Eventos y conexiones reales en la vida real</p>
      </div>
    </div>
  );
}

export default HeroSection;