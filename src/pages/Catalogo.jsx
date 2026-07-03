import { useState } from "react";
import veladoresData from "../data/veladores.json";
import { useNavigate } from "react-router-dom";

//Página del catálogo de veladores.
function Catalogo() {
  const [veladores] = useState(veladoresData);
  const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h1>Catálogo de Veladores Gamer</h1>
      {/*Lista de cards*/}
      <div style={styles.grid}>
        {veladores.map((item) => (
          <div
            key={item.id}
            style={styles.card}
            onClick={() => navigate(`/catalogo/${item.id}`)}
          >
            <h3>{item.nombre}</h3>
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
  },
};

//Exporto la página para usarla en otros archivos.
export default Catalogo;
