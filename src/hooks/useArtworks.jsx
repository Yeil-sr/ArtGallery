import { useState, useEffect } from "react";

const BASE_URL = "https://api.artic.edu/api/v1";

const useArtworks = (page = 1, limit = 8) => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchArtworks = async (page, limit, query = "") => {
    setLoading(true);
    try {
      const endpoint = query
        ? `${BASE_URL}/artworks/search?q=${query}&page=${page}&limit=${limit}`
        : `${BASE_URL}/artworks?page=${page}&limit=${limit}&sort=id`;

      const response = await fetch(endpoint);
      const data = await response.json();

      const artworksData = data.data
        .filter((art) => art.image_id)
        .map((art) => ({
          id: art.id,
          title: art.title,
          thumbnail: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
          category: art.classification_title || "Unknown",
          artist: art.artist_title || "Unknown",
        }))
        

      setArtworks((prevArtworks) =>
        page === 1 ? artworksData : [...prevArtworks, ...artworksData]
      );
      setHasMore(artworksData.length === limit);
    } catch (err) {
      setError("Failed to fetch artworks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks(page, limit);
  }, [page, limit]);

  return {
    artworks,
    loading,
    error,
    hasMore,
    fetchArtworks,
  };
};

export default useArtworks;
