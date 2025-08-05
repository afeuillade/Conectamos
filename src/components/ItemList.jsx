import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div style={{ 
      display: "grid", 
      gap: "1rem", 
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" 
    }}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}