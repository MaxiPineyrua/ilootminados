import { useParams, useNavigate } from "react-router-dom";
import veladoresData from "../data/veladores.json";

//Función para obtener el velador por ID.
function VeladorDetalle() {
  //Obtengo el ID desde la URL.
  const { id } = useParams();
  //Obtengo navigate para navegar a otra página.
  const navigate = useNavigate();

  //Busco el velador por ID.
  const velador = veladoresData.find(
    (item) => item.id === parseInt(id)
  );
  //Si no se encuentra el velador, muestro un mensaje de error.
  if (!velador) {
    return <h2>Velador no encontrado.</h2>;
  }

  //Muestro los datos del velador.
  return (
    <div style={{ padding: "20px" }}>
      <h1>{velador.nombre}</h1>
      <p>{velador.descripcion}</p>
      <p>{velador.precio}</p>

      {/*Boton para volver a la lista de veladores*/}
      <button onClick={() => navigate("/catalogo")}>Volver al catálogo.</button>
    </div>
  );
}

//Exporto la función.
export default VeladorDetalle;