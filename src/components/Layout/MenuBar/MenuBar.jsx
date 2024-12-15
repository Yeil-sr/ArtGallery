import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="menu-bar">
      <div className="container_logo">
        <div className="logo">
          <img src="../../../../public/assets/logo.jpeg" alt="logo" width="36px" />
        </div>
        <h1>ArtGallery</h1>
      </div>

      {/* Botão de Menu Hambúrguer */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Menu Responsivo */}
      <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/artworks" onClick={() => setIsMenuOpen(false)}>OBRAS</Link></li>
        <li><Link to="/favorites" onClick={() => setIsMenuOpen(false)}>FAVORITOS</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
