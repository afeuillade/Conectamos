import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Carrito from '../assets/png.webp';

export default function CartWidget() {
  const { cart, getTotal, addToCart, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const increase = (item) => addToCart(item, 1);
  const decrease = (item) =>
    item.quantity > 1 ? addToCart(item, -1) : removeFromCart(item.id);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={Carrito}
          alt="Carrito de compras"
          style={{ cursor: "pointer", width: "40px" }}
          onClick={() => setShowCart(!showCart)}
        />
        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-6px",
              right: "-6px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "3px 7px",
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            {totalItems}
          </span>
        )}
      </div>

      {showCart && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "120%",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "1rem",
            minWidth: "360px",
            maxHeight: "450px",
            overflowY: "auto",
            boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
            zIndex: 100,
            transition: "all 0.3s ease",
          }}
        >
          <h4
            style={{
              marginBottom: "0.8rem",
              fontSize: "1.1rem",
              borderBottom: "1px solid #eee",
              paddingBottom: "0.3rem",
            }}
          >
            Resumen de reserva
          </h4>

          {cart.length === 0 ? (
            <p style={{ textAlign: "center", color: "#555" }}>
              No hay items en el carrito.
            </p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.7rem",
                  }}
                >
                  <div style={{ flex: 2 }}>{item.title}</div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <button
                      onClick={() => decrease(item)}
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        border: "1px solid #ccc",
                        backgroundColor: "#f8f8f8",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      −
                    </button>

                    <span style={{ minWidth: "20px", textAlign: "center" }}>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increase(item)}
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        border: "1px solid #ccc",
                        backgroundColor: "#f8f8f8",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div
                    style={{
                      flex: 1,
                      textAlign: "right",
                      fontWeight: "500",
                    }}
                  >
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}

              <hr style={{ margin: "0.5rem 0", borderColor: "#eee" }} />

              <div
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Total: ${getTotal()}
              </div>

              <button
                onClick={() => {
                  setShowCart(false);
                  navigate("/checkout");
                }}
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "0.6rem",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Finalizar reserva
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}