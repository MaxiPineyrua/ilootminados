import { createContext, useState } from "react";
import veladoresData from "../data/veladores.json";

// Creo el contexto.
export const VeladoresContext = createContext();

// Creo el proveedor.
export function VeladoresProvider({ children }) {
  const [veladores, setVeladores] = useState(veladoresData);

  return (
    <VeladoresContext.Provider value={{ veladores, setVeladores }}>
      {children}
    </VeladoresContext.Provider>
  );
};


