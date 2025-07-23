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

      <div className="links">
        <a href="#">Inicio</a>
        <a href="#">Quienes somos?</a>
        <a href="#">Se parte</a>
        <a href="#">Comprar mi entrada</a>
      </div>

      <CartWidget />
    </nav>
    )
}