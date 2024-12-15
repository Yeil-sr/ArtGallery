import React from "react";
import './ArticleCard.css'

const ArticleCard= ({ thumbnail, title }) => {
  return (
    <div className="container_card">
      <div className="photoCover">
        <img src={thumbnail} alt={title}  width= "280px"
 />
      </div>
      <div className="container_title">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
