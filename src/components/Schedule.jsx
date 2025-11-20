import React, { useState } from "react";

const scheduleData = {
  Monday: {
    show: "Morning Beats",
    dj: "DJ Moon",
    time: "09:00 – 11:00",
    genre: "Chill / Electronic",
    img: "/moon.jpg",
  },

  Tuesday: {
    show: "Retro Hits",
    dj: "DJ Max",
    time: "09:00 – 11:00",
    genre: "70s–90s Classics",
    img: "/retro.jpg",
  },

  Wednesday: {
    show: "Chill Vibes",
    dj: "DJ Maya",
    time: "09:00 – 11:00",
    genre: "Ambient / Chillhop",
    img: "/chill.jpg",
  },

  Thursday: {
    show: "EDM Hour",
    dj: "DJ Alex",
    time: "09:00 – 11:00",
    genre: "EDM / Festival Mix",
    img: "/festival.jpg",
  },

  Friday: {
    show: "Weekend Kickoff",
    dj: "DJ Nova",
    time: "09:00 – 12:00",
    genre: "Party Mix",
    img: "/weekend .jpg",
  },
};

export default function Schedule() {
  const days = Object.keys(scheduleData);
  const [activeDay, setActiveDay] = useState("Monday");

 
  const hour = new Date().getHours();
  const isLive = hour >= 9 && hour < 12; 

  const show = scheduleData[activeDay];

  return (
    <section className="schedule-container">

      <h2 className="section-title">📅 Weekly Schedule</h2>

      {/* DAY TABS */}
      <div className="day-tabs">
        {days.map((day) => (
          <button
            key={day}
            className={`tab-btn ${activeDay === day ? "active" : ""}`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* SHOW CARD */}
      <div className="schedule-card fade-in">
        <img src={show.img} alt={show.dj} className="schedule-photo" />

        <div className="schedule-info">
          {isLive && activeDay === new Date().toLocaleDateString("en-US", { weekday: "long" }) ? (
            <span className="live-now">🔴 LIVE NOW</span>
          ) : null}

          <h3 className="show-title">{show.show}</h3>
          <p className="dj-name">🎧 {show.dj}</p>
          <p className="show-time">⏰ {show.time}</p>
          <p className="show-genre">🎶 {show.genre}</p>
        </div>
      </div>
    </section>
  );
}
