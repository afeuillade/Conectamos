export default function Item({ product }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "1rem", 
      borderRadius: "8px", 
      maxWidth: "250px" 
    }}>
      <img 
        src={product.pictureUrl} 
        alt={product.title} 
        style={{ width: "100%", borderRadius: "8px" }} 
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
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