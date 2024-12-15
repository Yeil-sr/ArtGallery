import React from "react";
import './Home.css'
import TitleSection from "../../components/Layout/TitleSection/TitleSection";
import CollectionList from "../../components/Home/CollectionList/CollectionList";
import ArticleList from '../../components/Home/ArticleList/ArticleList';
import SectionBox from '../../components/Home/SectionBox/SectionBox';
import Carousel from '../../components/Home/Carousel/Carousel';

const Home = () => {
  return (
   
    <div className="container_home">
      <Carousel/>
      <TitleSection title="COMPRE POR FORMATO" paragraph="Escolha o formato que você precisa. E navegue pelas obras de artes mais incríveis."/>
      <CollectionList/>
      <hr />
      <TitleSection title="DESCUBRA SEU ESTILO!" paragraph="Você é apaixonado por arte e se encanta com as coleções icônicas do Instituto de Artes de Chicago?"/>
      <ArticleList/>
      <hr />
      <SectionBox/>
    </div>
  );
}

export default Home;
