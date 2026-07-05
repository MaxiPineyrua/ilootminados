import { useState } from "react";
import categoriasData from "../data/categorias.json";
import { useContext } from "react";
import { VeladoresContext } from "../context/VeladoresContext";

//Página del admin.
function Admin() {
  //Pongo los veladores del json.
  const { veladores, setVeladores } = useContext(VeladoresContext);
  //Estado para el nombre del nuevo velador.
  const [nuevoNombre, setNuevoNombre] = useState("");

  //Estado para la descripción del nuevo velador.
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");

  //Estado para el precio del nuevo velador.
  const [nuevoPrecio, setNuevoPrecio] = useState("");

  //Estado para la categoría del nuevo velador.
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  //Estado para la imagen del nuevo velador.
  const [nuevaImagen, setNuevaImagen] = useState("");

  const [categorias] = useState(categoriasData);

  //Estado para saber qué velador se está editando.
  const [veladorEditando, setVeladorEditando] = useState(null);

  //Función para eliminar un velador.
  const eliminarVelador = (id) => {
    //Confirmación.
    const confirmar = window.confirm(
      "Estás seguro de eliminar este velador?"
    );
    //Si cancelo, no lo hago.
    if (!confirmar) {
      return;
    }
    //Si confirmo, lo elimino.
    const nuevaLista = veladores.filter((item) => item.id !== id);
    setVeladores(nuevaLista);
  };

  //Agregar un nuevo velador.
  const agregarVelador = () => {
    //Verifico que esten completos los campos.
    if (
      nuevoNombre.trim() === "" ||
      nuevaDescripcion.trim() === "" ||
      nuevoPrecio === "" ||
      nuevaCategoria === "" ||
      nuevaImagen.trim() === ""
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    //Verifico que el precio sea mayor a 0.
    if (Number(nuevoPrecio) <= 0) {
      alert("El precio debe ser mayor a 0.");
      return;
    }

    //Creo el nuevo velador.
    const nuevoVelador = {
      id: veladores.length + 1,
      nombre: nuevoNombre,
      descripcion: nuevaDescripcion,
      precio: Number(nuevoPrecio),
      categoriaId: parseInt(nuevaCategoria),
      imagen: nuevaImagen,
    };

    //Si estoy editando, modifico el velador.
    if (veladorEditando) {
      const nuevaLista = veladores.map((item) =>
        item.id === veladorEditando ? nuevoVelador : item
      );
      setVeladores(nuevaLista);
      setVeladorEditando(null);
    } else {
      //Si no estoy editando, agrego el nuevo velador.
      setVeladores([...veladores, nuevoVelador]);
    }

    //Limpio los campos.
    setNuevoNombre("");
    setNuevaDescripcion("");
    setNuevoPrecio("");
    setNuevaCategoria("");
    setNuevaImagen("");
  };
  //Cargo los datos del velador en el formulario para editarlo.
  const editarVelador = (velador) => {
    setVeladorEditando(velador.id);
    setNuevoNombre(velador.nombre);
    setNuevaDescripcion(velador.descripcion);
    setNuevoPrecio(velador.precio);
    setNuevaCategoria(velador.categoriaId);
    setNuevaImagen(velador.imagen);
  };


  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de administración</h1>
      <h3>Agregar Nuevo Velador</h3>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nombre del velador"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)} />
        <br /><br />
        <textarea
          placeholder="Descripción del velador"
          value={nuevaDescripcion}
          onChange={(e) => setNuevaDescripcion(e.target.value)} />
        <br /><br />
        <input
          type="number"
          placeholder="Precio del velador"
          value={nuevoPrecio}
          onChange={(e) => setNuevoPrecio(e.target.value)} />
        <br /><br />
        <select
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}>
          <option value="">Seleccionar categoría</option>
          {categorias.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nombre}
            </option>
          ))}
        </select>
        <br /><br />
        <input
          type="text"
          placeholder="Imagen del velador"
          value={nuevaImagen}
          onChange={(e) => setNuevaImagen(e.target.value)} />
        <br /><br />
        <button onClick={agregarVelador}>
          {veladorEditando ? "Guardar Cambios" : "Agregar"}</button>
      </div>
      <h3>Veladores Disponibles</h3>
      <ul>
        {veladores.map((item) => (
          <li key={item.id}>
            {item.nombre}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => editarVelador(item)}
            > ✏️
            </button>
            <button style={{ marginLeft: "5px" }}
              onClick={() => eliminarVelador(item.id)}
            >🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

//Exporto la página para usarla en otros archivos.
export default Admin;