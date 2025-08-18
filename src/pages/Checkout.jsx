import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart, getTotal, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Acá podrías enviar la reserva a un backend
    alert(`🎉 ¡Reserva confirmada!\n\nGracias ${formData.name}, revisa tu correo: ${formData.email}`);
    clearCart();
  };

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Checkout - Confirmar reserva</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Lista de items */}
          <div style={{ marginBottom: "1.5rem" }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem" }}>
                <div>
                  <strong>{item.title}</strong> <br />
                  Cantidad: {item.quantity}
                </div>
                <div style={{ fontWeight: "500" }}>
                  ${item.price * item.quantity}
                </div>
              </div>
            ))}

            <h3 style={{ textAlign: "right", marginTop: "1rem" }}>
              Total: ${getTotal()}
            </h3>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input 
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              style={{ padding: "0.6rem", border: "1px solid #ccc", borderRadius: "6px" }}
            />
            <input 
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              style={{ padding: "0.6rem", border: "1px solid #ccc", borderRadius: "6px" }}
            />
            <input 
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              style={{ padding: "0.6rem", border: "1px solid #ccc", borderRadius: "6px" }}
            />

            <button 
              type="submit" 
              style={{
                marginTop: "1rem",
                padding: "0.8rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              Confirmar reserva
            </button>
          </form>
        </>
      )}
    </div>
  );
}