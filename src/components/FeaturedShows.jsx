import React from "react";
import djAlex from "/pexels-danielnouri-8448563.jpg";   
import djMaya from "/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg";   

function FeaturedShows() {
  return (
    <section className="featured">
      <div className="container">
        <h2>🔥 Featured Shows</h2>
        <div className="show-grid">
          <div className="show-card">
            <img src={djAlex} alt="DJ Alex" />
            <h3>Night Vibes with DJ Alex</h3>
          </div>

          <div className="show-card">
            <img src={djMaya} alt="DJ Maya" />
            <h3>Weekend Mix with DJ Maya</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedShows;
