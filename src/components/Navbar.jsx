import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

//Barra de navegación de mi app.
function Navbar() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>iLOOTminados</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/catalogo" style={styles.link}>Catálogo</Link>
        {!user && (
          <Link to="/login" style={styles.link}>Login</Link>
        )}
        {user?.role === "admin" && (
          <Link to="/admin" style={styles.link}>Admin</Link>
        )}
        {user && (
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            style={styles.logoutButton}
          >Logout
          </button>
        )}
      </div>
    </nav>
  );
}

//Estilos de la navbar.
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  logoutButton: {
    backgroundColor: '#5e0000ff',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

//Exporto la navbar para usarla en otros archivos.
export default Navbar;