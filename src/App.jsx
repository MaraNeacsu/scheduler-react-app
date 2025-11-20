import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import FeaturedShows from "./components/FeaturedShows";
import Footer from "./components/Footer";
import NowPlaying from "./components/NowPlaying";
import AudioPlayer from "./components/AudioPlayer";

import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/shows" element={<FeaturedShows />} />
        <Route
          path="/contact"
          element={<h2 style={{ textAlign: "center", marginTop: "5rem" }}>
            Contact page coming soon!
          </h2>}
        />
      </Routes>
      
      <AudioPlayer />
      <Footer />
    </>
  );
}

export default App;
