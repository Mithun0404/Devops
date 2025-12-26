import { useEffect, useState } from "react";

export default function useScrollSpeed() {
  const [speed, setSpeed] = useState(0);
  let lastY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const delta = Math.abs(window.scrollY - lastY);
      setSpeed(delta);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return speed;
}
