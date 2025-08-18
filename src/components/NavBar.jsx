import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import '../App.css'
import Logo from '../assets/conectam.JPG';

export default function NavBar(){
    return(
    <nav>
      <div className="logo">   
        <Link to="/">
        <img src={Logo} alt="Logo de mi tienda"/>
        </Link>
        <Link to="/">
        <h2 className="h2">ConectaMos</h2>
        </Link>
        

        </div>

      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', fontSize: '1.2rem', margin: 0, padding: 0 , color: 'black'}}>
        <li><Link to="/conocenos">Conocenos</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/networking">Networking</Link></li>
        <li><Link to="/faqs">FAQ's</Link></li>
        <li><Link to="/Sponsors">Sponsors</Link></li>
      </ul>

      <CartWidget />
    </nav>
    )
}