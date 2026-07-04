//Página principal de mi app.
function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎮 Bienvenidos a iLOOTminados 💡</h1>
      <img
        style={{ width: "50vw", height: "auto" }}
        src="/images/iLOOTminados.png" alt="logo ilootminados" />
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Acá encontrarás los mejores veladores inspirados en tus videojuegos favoritos.
      </p><br />
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        No te quedes en la oscuridad! Iluminá tus noches con la mejor calidad y diseño.
      </p><br />
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Explorá nuestro catálogo y encontrá el velador perfecto para vos.
      </p><br />
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        ¡No te pierdas esta oportunidad única de tener un velador único y original!
      </p>
    </div>
  );
}

//Exporto la página para usarla luego.
export default Home;