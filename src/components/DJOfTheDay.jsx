import React from "react";

export default function DJOfTheDay() {
  return (
    <section className="dj-day-section">
      <div className="dj-day-card">
        <div className="dj-info">
          <span className="live-badge">FEATURED DJ</span>
          <h2>DJ Skyline</h2>
          <p>Live every morning · 7AM – 10AM</p>
        </div>

        <img
          src="/aaron-paul-JMpnwlDTSBM-unsplash.jpg"
          alt="DJ Skyline"
          className="dj-photo"
        />
      </div>
    </section>
  );
}
