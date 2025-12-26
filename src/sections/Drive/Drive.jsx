import { useEffect, useRef } from "react";
import { driveTimeline } from "../../animation/driveTimeline";

export default function Drive() {
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    driveTimeline(textRef.current, bgRef.current);
  }, []);

  return (
    <section
      ref={bgRef}
      className="center"
      style={{
        backgroundImage: "url(/assets/images/road1.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange: "filter, transform",
      }}
    >
      <h1
        ref={textRef}
        style={{
          fontSize: "clamp(3rem, 8vw, 10rem)",
          fontWeight: 700,
          letterSpacing: "12px",
          transition: "all 0.2s ease-out",
        }}
      >
        DRIVE
      </h1>
    </section>
  );
}
