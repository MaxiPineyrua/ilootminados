import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  //estado para usuario y contraseña.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Obtengo la función login del context.
  const { login } = useContext(UserContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Iniciar sesión</h1>
      <div>
        <label>Usuario:</label>
        <br />
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </div>
      <br />
      <div>
        <label>Contraseña:</label>
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <br />
      <button onClick={() => login(username, password)}>Ingresar</button>
    </div>
  );
}

//Exporto la página para usarla en otros archivos.
export default Login;