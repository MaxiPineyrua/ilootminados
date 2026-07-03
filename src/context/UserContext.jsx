import { createContext, useState } from "react";

//Creo el contexto.
export const UserContext = createContext();

//Creo el proveedor del contexto.
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  //Login simulado.
  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      setUser({ name: "admin", role: "admin" });
    } else if (username === "usuario" && password === "1234") {
      setUser({ name: "usuario", role: "usuario" });
    } else {
      setUser(null);
      alert("Usuario o contraseña incorrectos.");
    }
  };
  //Logout simulado.
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};