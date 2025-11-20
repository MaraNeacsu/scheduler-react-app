import React from "react";
import { FaPlay, FaPause, FaHeadphones } from "react-icons/fa";
import { useAudio } from "./AudioContext.jsx";


export default function AudioPlayer() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="audio-player">
      <div className="player-info">
        <FaHeadphones /> <strong>Lexicon Radio</strong>
        <p>Streaming Live 24/7</p>
      </div>
      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <input type="range" min="0" max="100" className="volume-slider" />
    </div>
  );
}
