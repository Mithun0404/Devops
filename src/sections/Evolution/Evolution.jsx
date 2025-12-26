import { useEffect, useRef } from "react";
import { evolutionTimeline } from "../../animation/evolutionTimeline";

const eras = [
  { year: "1967", power: "V8 RAW", image: "/assets/models/67.webp" },
  { year: "1970", power: "BOSS", image: "/assets/models/70.webp" },
  { year: "2005", power: "REBIRTH", image: "/assets/models/05.jpg" },
  { year: "2024", power: "DARK HORSE", image: "/assets/models/24.jpg" },
];

export default function Evolution() {
  const cards = useRef([]);

  useEffect(() => {
    evolutionTimeline(cards.current);
  }, []);

  return (
    <section className="center" style={{ gap: 40 }}>
      {eras.map((era, i) => (
        <div
          key={era.year}
          ref={(el) => (cards.current[i] = el)}
          className="glass"
          style={{ width: 260, padding: 20 }}
        >
          <img src={era.image} width="100%" />
          <h2>{era.year}</h2>
          <p>{era.power}</p>
        </div>
      ))}
    </section>
  );
}
