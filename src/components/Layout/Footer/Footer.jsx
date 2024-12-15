import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container_footer">
        <div className="newsletter">
          <h1>VOCÊ TEM ARTSTYLE?</h1>
          <p>Quer saber mais sobre arte, design e ainda receber ofertas especiais? Cadastre-se em nosso e-mail marketing.</p>
          <input type="email" placeholder="E-mail" />
          <div className="button">
            <a>ENVIAR</a>
          </div>
        </div>
        <div className="adress">
        <ul>
            <li>Michigan Avenue Entrance</li>
            <li>111 South Michigan Avenue</li>
            <li>Chicago, IL 60603</li>
          </ul>
          <ul>
            <li>Modern Wing Entrance</li>
            <li>159 East Monroe Street</li>
            <li>Chicago, IL 60603</li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <li>Fale Conosco</li>
            <li>Termos de serviço</li>
            <li>Política de reembolso</li>
          </ul>
        </div>
        <div className="about">
          <ul>
            <li>Mission and History</li>
            <li>Departments</li>
            <li>Financial Reporting</li>
          </ul>
        </div>
        <div className="follow">
          <ul>
            <li><a href="https://www.facebook.com/artic">Facebook</a></li>
            <li><a href="https://twitter.com/artinstitutechi">Twitter</a></li>
            <li><a href="https://www.instagram.com/artinstitutechi/">Instagram</a></li>
            <li><a href="https://www.youtube.com/user/ArtInstituteChicago">YouTube</a></li>
          </ul>
        </div>
        <hr />
      </div>
      <div className="copyright">
        <p>© 2024 Art Gallery. All rights reserved - Desenvolvido por Yale Designer</p>
      </div>
    </footer>
  );
};

export default Footer;
