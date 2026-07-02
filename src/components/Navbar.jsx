import { Link } from 'react-router-dom';

//Barra de navegación de mi app.
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>iLOOTminados</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/catalogo" style={styles.link}>Catálogo</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>
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
};

//Exporto la navbar para usarla en otros archivos.
export default Navbar;