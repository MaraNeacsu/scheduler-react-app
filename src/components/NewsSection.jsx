import React from "react";

export default function NewsSection() {
  return (
    <section className="news-section">
      <h2 className="section-title">Latest News</h2>

      <div className="news-list">
        <div className="news-item">
          <h3>New Studio Opening!</h3>
          <p>We just upgraded to a brand new recording studio.</p>
        </div>

        <div className="news-item">
          <h3>Special Guest Coming Soon</h3>
          <p>Stay tuned for our exclusive artist interview next week.</p>
        </div>

        <div className="news-item">
          <h3>Weekend Party Mix</h3>
          <p>This Saturday, our DJs go live with a 3-hour megamix.</p>
        </div>
      </div>
    </section>
  );
}
