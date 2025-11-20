import { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const streamUrl = "https://ice2.somafm.com/groovesalad-128-mp3"; 

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.src = streamUrl;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
