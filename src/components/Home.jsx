import React from "react";
import { FaPlay } from "react-icons/fa";
import { useAudio } from "./AudioContext.jsx";
import NowPlaying from "./NowPlaying";

import DJOfTheDay from "./DJOfTheDay";
import TrendingPodcasts from "./TrendingPodcasts";
import StationHighlights from "./StationHighlights";
import NewsSection from "./NewsSection";


export default function Home() {
  const { togglePlay } = useAudio();

  return (
    <>
      <section className="hero">
        <h1>Welcome to Lexicon Radio</h1>
        <p>Playing your favorite music and exclusive shows all week long!</p>
        <button className="listen-btn" onClick={togglePlay}>
          <FaPlay /> Listen Live
        </button>
      </section>

      <NowPlaying />
      <DJOfTheDay />
      <TrendingPodcasts />
      <StationHighlights />
      <NewsSection />
    </>
  );
}
