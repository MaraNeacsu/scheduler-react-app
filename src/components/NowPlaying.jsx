import React from "react";
import noMusicImg from "/simon-noh-0rmby-3OTeI-unsplash.jpg";

export default function NowPlaying() {
  return (
    <section className="now-playing-container">
      <div className="now-playing-card">

        <div className="now-playing-info">
          <span className="live-badge">NOW</span>

          <h2 className="station-name">Lexicon Radio</h2>
          <p className="host-name">No live show currently</p>

          <button className="listen-btn">▶ LISTEN</button>
        </div>

        <div className="now-playing-image">
          <img src={noMusicImg} alt="No Music No Life" />
        </div>

      </div>
    </section>
  );
}
