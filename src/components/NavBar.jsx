import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import '../App.css'
import Logo from '../assets/conectam.JPG';

export default function NavBar(){
    return(
    <nav>
      <div className="logo">   
        <img src={Logo} alt="Logo de mi tienda"/>
        <h2 className="h2">ConectaMos</h2>

        </div>

      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        
      </ul>

      <CartWidget />
    </nav>
    )
}