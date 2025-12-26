import { useEffect } from "react";

export default function Preload() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="center">
      <div
        className="glass center"
        style={{
          width: 260,
          height: 260,
          borderRadius: "50%",
          fontSize: "2rem",
          letterSpacing: "4px",
        }}
      >
        RPM
        <p
  style={{
    position: "absolute",
    bottom: 40,
    opacity: 0.6,
    letterSpacing: "2px",
    fontSize: "0.9rem",
  }}
>
  SCROLL TO START
</p>

      </div>
    </section>
  );
}
