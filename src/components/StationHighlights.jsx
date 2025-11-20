import React from "react";

export default function StationHighlights() {
  return (
    <section className="highlight-section">
      <h2 className="section-title">Station Highlights</h2>

      <div className="highlight-grid">
        <div className="highlight-card">
          <h3>🎤 Exclusive Interviews</h3>
          <p>Chatting with top artists & creators every week.</p>
        </div>

        <div className="highlight-card">
          <h3>🎧 24/7 Live Music</h3>
          <p>Always live, always fresh — music all day long.</p>
        </div>

        <div className="highlight-card">
          <h3>⭐ Award-Winning Hosts</h3>
          <p>Professional DJs bringing the best vibes.</p>
        </div>
      </div>
    </section>
  );
}
