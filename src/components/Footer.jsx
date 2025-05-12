import React from "react";
import "./Footer.css"; // ou module.css se preferir

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">ClickCão 🐾</h3>
        <p className="footer-text">Transformando vidas, uma adoção por vez.</p>

        <div className="footer-links">
          <a href="/sobre">Sobre</a>
          <a href="/racas">Raças</a>
          <a href="/contato">Contato</a>
        </div>

        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} ClickCão. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
