import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

//ProtectedRoute para que solo admin pueda ver su respectiva página.
function ProtectedRoute({ children }) {
  //usuario logueadp.
  const { user } = useContext(UserContext);
  //Si no hay usuario o no es admin, vuelve al home.
  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }
  //Si es admin muestra la página.
  return children;
}

//Exporto el componente para usarlo en otros archivos.
export default ProtectedRoute;