import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Item({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", maxWidth: "250px" }}>
      <img src={product.pictureUrl} alt={product.title} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>

      <div style={{ marginTop: "0.5rem" }}>
        <label>
          Cantidad:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            style={{ width: "50px", marginLeft: "0.5rem" }}
          />
        </label>
      </div>

      <button
        onClick={() => addToCart(product, quantity)}
        style={{
          display: "block",
          marginTop: "0.5rem",
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Agregar al carrito
      </button>

      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          textDecoration: "none",
          marginTop: "0.5rem"
        }}
      >
        Comprar entradas
      </a>
    </div>
  );
}