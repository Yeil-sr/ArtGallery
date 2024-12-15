import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articlesData from '../../data/articles.json'; 
import './Article.css'; // Reutilizando o mesmo CSS do componente Artwork

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchedArticle = articlesData.find((article) => article.id === parseInt(id));
    setArticle(fetchedArticle);
  }, [id]);

  if (!article) return <p>Artigo não encontrado.</p>;

  return (
    <div className="container_artwork">
      <div className="container_photo-art">
        <img src={article.thumbnail} alt={article.title} width="500" />
      </div>
      <div className="container_description">
        <h1>{article.title}</h1>
        <p>{article.copy}</p>
      </div>
    </div>
  );
};

export default Article;
