import { useRef } from "react";

export default function useEngineSound() {
  const audioRef = useRef(null);

  const startEngineSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/audio/engine_idle.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }
    audioRef.current.play();
  };

  return startEngineSound;
}
