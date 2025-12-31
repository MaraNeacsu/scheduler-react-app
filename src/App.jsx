/// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import FeaturedShows from "./components/FeaturedShows";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
import Contributor from "./components/Contributor"; // your contributors page
import Login from "./components/Login";
import RegisterContributor from "./components/RegisterContributor";



import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/shows" element={<FeaturedShows />} />
           <Route path="/login" element={<Login />} />
  <Route path="/register" element={<RegisterContributor />} />  
          <Route
            path="/contact"
            element={
              <h2 style={{ textAlign: "center", marginTop: "5rem" }}>
                Contact page coming soon!
              </h2>
            }
          />

          {/* 🔹 New route for the contributors assignment */}
          <Route path="/contributor" element={<Contributor />} />
        </Routes>
      </main>

      <AudioPlayer />
      <Footer />
    </>
  );
}

export default App;
