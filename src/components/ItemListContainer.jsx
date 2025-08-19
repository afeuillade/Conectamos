import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import rescoldo from '../assets/alrescoldo.JPG';
import treking from '../assets/treking.JPG';
import networking from '../assets/networking.JPG';

export default function ItemListContainer({ filterText }) {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { 
            id: 1, 
            title: "Evento Al Rescoldo", 
            description: "Almuerzo en 'Al Rescoldo Campo' que se realiza el 23/08/2025 con bandas invitadas", 
            price: 35000, 
            pictureUrl: rescoldo,
            link: "https://alrescoldo.com/evento/manuel-wirtz-en-el-pary-y-nene-malo-sabado-26-de-julio-al-rescoldo-sunset-xl-conectamos/"
          },
          { 
            id: 2, 
            title: "Treking con Desconocidos", 
            description: "Se realiza el 15/09/2025 en 'Los Gigantes', un evento para conocer gente nueva", 
            price: 8900, 
            pictureUrl: treking,
            link:"https://www.instagram.com/p/DLTFElHxEVt/"
          },
          { 
            id: 3, 
            title: "Networking", 
            description: "Se realiza el 30/10/2025 en 'Café de Barrio', un evento para conectar con profesionales", 
            price: 23000, 
            pictureUrl: networking,
            link:"https://www.instagram.com/p/DLstnEsxj-9/?img_index=1"
          }
        ]);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>Lista de Productos</h2>
      {products.length === 0 
        ? <p>Cargando productos...</p> 
        : filteredProducts.length === 0
          ? <p>No se encontraron eventos.</p>
          : <ItemList products={filteredProducts} />}
    </div>
  );
}