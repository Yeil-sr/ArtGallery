import React from "react";
import "./ArtworkCard.css";

const ArtworkCard = ({ thumbnail, title, onClick }) => {
  return (
    <div className="artwork-card" onClick={onClick}>
      <img
        src={thumbnail || "../../../public/assets/default.jpg"}
        alt={title}
        className="artwork-thumbnail"
      />
      <h3 className="artwork-title">{title}</h3>
    </div>
  );
};

export default ArtworkCard;
