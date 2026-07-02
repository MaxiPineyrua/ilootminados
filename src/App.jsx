//Importo las rutas
import { Routes, Route } from 'react-router-dom';
//Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Catalogo from './pages/Catalogo';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';

//Función principal de mi app.
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
//Exporto la función para poder usarla en otros archivos.
export default App;
