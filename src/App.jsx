import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import Events from './pages/Events.jsx';

function App() {
  return (
    <div className='main-container'>
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/eventos" element={<Events />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
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
