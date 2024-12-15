import React from "react";
import "./SectionBox.css";
import { Link } from "react-router-dom";

const SectionBox = () => {
  return (
    <div className="container_sectionBox">
      <div className="sectionBox_photoCover">
        <img src="../../../assets/photobox.jpg" width="500px" alt="" />
      </div>
      <div className="sectionBox_description">
        <div className="sectionBox_title">
          <h1>A casa de férias de Chicago</h1>

          <p>
          Ao darmos as boas-vindas à temporada de gratidão e admiração, esperamos que você faça do Art Institute uma parte de suas lembranças de férias.
          </p>

          <p>
          Você e seus entes queridos estão convidados a visitar suas obras de arte favoritas, explorar nossas exposições mais recentes e cultivar sua alegria, seja posando para uma foto de família sob os leões coroados ou desfrutando de uma apresentação na Grande Escadaria.
          </p>

          <p>
          Simultaneamente, Ciccy sempre esteve atuando com a arte na moda. A Mixed, marca fundado por sua mãe, foi um vetor de criação para alguns desdobramentos de sua arte: calça jeans e lenços pintados a mão, gravuras de Nossa Senhora Aparecida que se tornaram estampas de camisetas e envolvimento nas criações de outras peças com estampas e cores.
          </p>

          <div className="sectionBox_button">
            <Link href="/artworks" >Colecionar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBox;
