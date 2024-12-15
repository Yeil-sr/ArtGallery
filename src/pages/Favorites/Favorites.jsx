import React, { useEffect, useState } from "react";
import ArtworkCard from "../../components/Artworks/ArtworkCard/ArtworkCard";
import TitleSection from "../../components/Layout/TitleSection/TitleSection";
import "./Favorite.css";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorite-gallery">

      <TitleSection
        title="FAVORITOS"
      />
     
      {favorites.length > 0 ? (
        <div className="gallery">
          {favorites.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              thumbnail={artwork.imageUrl}
              title={artwork.title}
              onClick={() => console.log(`Redirect to artwork ${artwork.id}`)}
            />
          ))}
        </div>
      ) : (
        <p>Nenhuma obra favoritada ainda.</p>
      )}
    </div>
  );
};

export default Favorite;
