import React from "react";
import './CardCollection.css'

const CardCollection = ({ photoCover, category }) => {
  return (
    <div className="container_cardCollection">
      <div className="photoCover">
        <img src={photoCover} alt={category}     width= "280px"
 />
      </div>
      <div className="container_category">
        <span>{category}</span>
      </div>
    </div>
  );
};

export default CardCollection;
