import React, { useEffect, useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import { useParams } from "react-router-dom";
import "./Artwork.css";
import Loading from "../../components/Layout/Loading/Loading";

const BASE_URL = "https://api.artic.edu/api/v1";

const Artwork = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false); 

  useEffect(() => {
    const fetchArtwork = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/artworks/${id}`);
        const data = await response.json();

        const artData = {
          id: data.data.id,
          title: data.data.title,
          imageUrl: data.data.image_id
            ? `https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`
            : null,
          artist: data.data.artist_title,
          date: data.data.date_display,
          place: data.data.place_of_origin,
          medium: data.data.medium_display,
          dimensions: data.data.dimensions,
          creditLine: data.data.credit_line,
          description: data.data.publication_history || "No description available.",
        };

        setArtwork(artData);
      } catch (err) {
        setError("Failed to fetch artwork details.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtwork();
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!isFavorited) {
      localStorage.setItem("favorites", JSON.stringify([...savedFavorites, artwork]));
    } else {
      const updatedFavorites = savedFavorites.filter((fav) => fav.id !== artwork.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!artwork) return <p>Artwork not found.</p>;

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const descriptionToShow = showFullDescription
    ? artwork.description
    : artwork.description.substring(0, Math.floor(artwork.description.length / 8)) + "...";

  return (
    <div className="container_artwork">
      <div className="container_photo-art">
        {artwork.imageUrl ? (
          <img src={artwork.imageUrl} alt={artwork.title} width="500" />
        ) : (
          <p>Image not available</p>
        )}
      </div>
      <div className="container_description">
        <h1>{artwork.title}</h1>
        <span>{artwork.date}</span>
        <span>{artwork.artist}</span>
        <p>{descriptionToShow}</p>
        {artwork.description.length > Math.floor(artwork.description.length / 3) && (
          
          
          <button onClick={toggleDescription} className="toggle_button">
            {showFullDescription ? "VER MENOS" : "VER MAIS"}
          </button>
        )}
        <button
          onClick={toggleFavorite}
          className={`favorite_button ${isFavorited ? "favorited" : ""}`}
        >
          {isFavorited ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
      <div className="container_information">
        <ul>
          <hr />
          <li>
            Artist: <span>{artwork.artist || "Unknown"}</span>
          </li>
          <hr />
          <li>
            Title: <span>{artwork.title}</span>
          </li>
          <hr />
          <li>
            Place: <span>{artwork.place || "Unknown"}</span>
          </li>
          <hr />
          <li>
            Date: <span>{artwork.date || "Unknown"}</span>
          </li>
          <hr />
          <li>
            Medium: <span>{artwork.medium || "Unknown"}</span>
          </li>
          <hr />
          <li>
            Dimensions: <span>{artwork.dimensions || "Unknown"}</span>
          </li>
          <hr />
          <li>
            Credit Line: <span>{artwork.creditLine || "Unknown"}</span>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Artwork;

