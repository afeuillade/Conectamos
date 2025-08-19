import { useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';

export default function Events() {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      <h1>Eventos</h1>
      <p>Próximamente más información sobre nuestros eventos.</p>

      <input
        type="text"
        placeholder="Buscar evento..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "1rem 0",
          padding: "0.5rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem"
        }}
      />

      <ItemListContainer filterText={filterText} />
    </div>
  );
}