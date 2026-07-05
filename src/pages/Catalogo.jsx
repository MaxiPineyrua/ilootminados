import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { VeladoresContext } from "../context/VeladoresContext";

//Página del catálogo de veladores.
function Catalogo() {
  const { veladores } = useContext(VeladoresContext);
  //estado para iluminar un velador del catálogo.
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h1>Catálogo de Veladores Gamer</h1>
      {/*Lista de cards*/}
      <div style={styles.grid}>
        {veladores.map((item) => (
          <div
            key={item.id}
            style={{
              ...styles.card,
              backgroundColor:
                hoveredId === item.id ? "#555" : "#222",
              boxShadow:
                hoveredId === item.id ? "0 0 15px rgba(255, 255, 0, 0.7)" : "none",
              transition: "0.2s"
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => navigate(`/catalogo/${item.id}`)}
          >
            <img src={item.imagen} alt={item.nombre} style={styles.imagen} />
            <h3>{item.nombre}</h3>
            <p>${item.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
//Estilos tipo "cards"
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    padding: "15px",
    backgroundColor: "#222",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
  },
  imagen: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  }
};

//Exporto la página para usarla en otros archivos.
export default Catalogo;