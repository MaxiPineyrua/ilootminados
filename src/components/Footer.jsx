//Footer de la página.
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>©2026 iLOOTminados</p>

      <div style={styles.links}>
        <a href="https://www.instagram.com" target="_blank">Instagram</a>
        <a href="https://www.facebook.com" target="_blank">Facebook</a>
        <a href="https://www.tiktok.com" target="_blank">TikTok</a>
        <a href="https://www.youtube.com" target="_blank">YouTube</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#111",
    color: "white",
    textAlign: "center",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
};

export default Footer;