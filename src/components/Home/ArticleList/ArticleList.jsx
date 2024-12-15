import React, { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import './ArticleList.css';
import articlesData from '../../../data/articles.json';
import { Link } from "react-router-dom";


const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <div className="container_articleList">
      {articles.map((article) => (
        <Link key={article.id} href={`/article/${article.id}`} className="article_link">
          <ArticleCard title={article.title} thumbnail={article.thumbnail} />
        </Link>
      ))}
      
    </div>
  );
};

export default ArticleList;
