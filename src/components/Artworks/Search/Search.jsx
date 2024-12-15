import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,image_id`
      );
      const data = await response.json();

      const artworks = data.data.map((artwork) => ({
        id: artwork.id,
        title: artwork.title,
        imageUrl: artwork.image_id
          ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
          : null, 
      }));

      onSearch(artworks);
    } catch (error) {
      console.error("Error fetching search results:", error);
      onSearch([]);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Pesquisar obras de arte..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
};

export default Search;
