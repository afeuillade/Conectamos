import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import Events from './pages/Events.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Networking from './pages/Networking.jsx';
import Faqs from './pages/Faqs.jsx';
import { CartProvider } from './context/CartContext';
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
      <div className='main-container'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>

  );
}

export default App;


/***
 * 
 *   const [count, setCount] = useState(0);
  const [user, setUser] = useState('Angi');

  const handleClick = () => {
    setUser('Mariela');
  };
 * <>
 * 
 * <h1>Vite + React</h1>
 * 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          este es un párrafo de prueba para ver si funciona el hot reload
        </p>
      </div>
      <div id='root'>
      <h1>Hola soy un titulo y vengo a molestar</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    

    <div>
      <h1>Hello {user}</h1>
      <button onClick={handleClick}>Cambiar nombre</button>
    </div>
    </> */
