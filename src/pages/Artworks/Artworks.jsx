import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArtworkCard from "../../components/Artworks/ArtworkCard/ArtworkCard";
import "./Artworks.css";
import TitleSection from "../../components/Layout/TitleSection/TitleSection";
import Search from "../../components/Artworks/Search/Search";
import useArtworks from "../../hooks/useArtworks";
import Loading from "../../components/Layout/Loading/Loading.jsx";

const Gallery = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [queryResults, setQueryResults] = useState(null); 

  const { artworks, loading, error, hasMore } = useArtworks(page, limit);

  const handleArtworkClick = (id) => {
    navigate(`/artwork/${id}`);
  };

  const handlePageChange = (event) => {
    setPage(Number(event.target.value));
  };

  const handleLimitChange = (event) => {
    setLimit(Number(event.target.value));
  };

  const handleSearchResults = (results) => {
    setQueryResults(results); 
  };

  const displayedArtworks = queryResults ?? artworks; 

  if (error) return <p>{error}</p>;

  return (
    <div>
      <TitleSection
        title="A COLEÇÃO"
        paragraph="Explore milhares de obras de arte da coleção do museu – desde nossos ícones renomados até obras menos conhecidas de todos os cantos do mundo – bem como nossos livros, escritos, materiais de referência e outros recursos."
      />
      <hr />
      <Search onSearch={handleSearchResults} />

      <div className="pagination-controls">
        <label>
          Página:
          <select value={page} onChange={handlePageChange} disabled={!!queryResults}>
            {Array.from({ length: 9400 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
        <label>
          Obras por página:
          <select value={limit} onChange={handleLimitChange} disabled={!!queryResults}>
            {[8, 12, 24, 48].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="gallery">
        {displayedArtworks?.length > 0 ? (
          displayedArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              thumbnail={artwork.thumbnail}
              title={artwork.title}
              onClick={() => handleArtworkClick(artwork.id)}
            />
          ))
        ) : (
          <p className="not-found-message"></p>
        )}
      </div>
      {loading && <Loading />}
      
      <div className="pagination-controls">
        <label>
          Página:
          <select value={page} onChange={handlePageChange} disabled={!!queryResults}>
            {Array.from({ length: 9400 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
        <label>
          Obras por página:
          <select value={limit} onChange={handleLimitChange} disabled={!!queryResults}>
            {[8, 12, 24, 48].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>

    </div>
    
    
  );
};

export default Gallery;
