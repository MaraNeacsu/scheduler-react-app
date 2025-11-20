import React from "react";

export default function TrendingPodcasts() {
  return (
    <section className="podcast-section">
      <h2 className="section-title">Trending Podcasts</h2>

      <div className="podcast-grid">
        <div className="podcast-card">
          <img src="/night vibes.jpg" />
          <h3>The Night Vibes Show</h3>
          <p>Episode 45 — Chill Beats & Talk</p>
        </div>

        <div className="podcast-card">
          <img src="/deep.jpg" />
          <h3>Deep Conversations</h3>
          <p>Special Guest: Mark Wilson</p>
        </div>

        <div className="podcast-card">
          <img src="/sunset.jpg" />
          <h3>Weekend Mixdown</h3>
          <p>Top hits & DJ mix</p>
        </div>
      </div>
    </section>
  );
}
