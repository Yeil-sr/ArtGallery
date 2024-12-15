import React from "react";
import CardCollection from "../CardCollection/CardCollection";
import './CardCollection.css'


const CollectionList = () => {
  return (
    <div className="container_collectionList">
      <CardCollection 
        category="HORIZONTAL" 
        photoCover="../../../assets/horizontal.jpg" 
      />
      <CardCollection 
        category="VERTICAL" 
        photoCover="../../../assets/vertical.jpg" 
      />
      <CardCollection 
        category="QUADRADO" 
        photoCover="../../../assets/quadrado.jpg" 
      />
      <CardCollection 
        category="GRANDES FORMATOS" 
        photoCover="../../../assets/large.jpg" 
      />
    </div>
  );
};

export default CollectionList;
