import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: false,
  };

  return (
    <div className="carousel_container">
      <div className="carousel_text">
        <h2>DESCUBRA O INCRÍVEL ACERVO DO INSTITUTO DE ARTES DE CHICAGO</h2>
        <p>Explore milhares de obras de arte do renomado Instituto de Artes de Chicago – desde clássicos icônicos que atravessam séculos até peças menos conhecidas de diversas culturas ao redor do mundo. Conheça também nossa vasta coleção de livros, manuscritos, materiais de estudo e outros recursos fascinantes.</p>
      </div>
      <Slider {...settings}>
        <div className="carousel_slide">
          <img src="../../../assets/banner1.jpg" alt="Banner 1" />
        </div>
        <div className="carousel_slide">
          <img src="../../../assets/banner2.jpg" alt="Banner 2" />
        </div>
        <div className="carousel_slide">
          <img src="../../../assets/banner3.jpg" alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
