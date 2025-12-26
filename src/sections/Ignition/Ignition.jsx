import useEngineSound from "../../hooks/useEngineSound";

export default function Ignition() {
  const startSound = useEngineSound();

  const startEngine = () => {
    startSound(); // ✅ user interaction
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="center">
      <button onClick={startEngine} className="glass">
        START ENGINE
      </button>
    </section>
  );
}
