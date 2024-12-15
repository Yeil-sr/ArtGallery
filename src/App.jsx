import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home/Home";
import Gallery from './pages/Artworks/Artworks';
import Favorites from "./pages/Favorites/Favorites";
import MenuBar from "./components/Layout/MenuBar/MenuBar";
import Footer from "./components/Layout/Footer/Footer";
import Artwork from "./pages/Artwork/Artwork";
import Article from './pages/Article/Article'

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <MenuBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/artworks" element={<Gallery />} />
          <Route path="/artwork/:id" element={<Artwork />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
