import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenid@ a ConectaMos! Para gente que quiere conocer gente" />
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
