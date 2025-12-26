import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import MustangModel from "../../three/MustangModel";
import SceneLights from "../../three/SceneLights";
import useDriveMode from "../../hooks/useDriveMode";

function CameraShake({ strength }) {
  const ref = useRef();
  useFrame(({ camera }) => {
    camera.position.x += (Math.random() - 0.5) * strength;
    camera.position.y += (Math.random() - 0.5) * strength;
  });
  return null;
}

export default function Machine() {
  const { mode, setMode, config } = useDriveMode();

  return (
    <section>
      <Canvas camera={{ position: [0, 1.2, 6], fov: 35 }}>
        <SceneLights intensity={config.intensity} />
        <MustangModel />
        <CameraShake strength={config.shake} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* MODE UI */}
      <div
        className="glass"
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 20,
          padding: 20,
        }}
      >
        {["STREET", "TRACK", "BEAST"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              background: "transparent",
              border: "none",
              color: mode === m ? "#ff2a2a" : "white",
              fontSize: "1rem",
              letterSpacing: "2px",
              cursor: "pointer",
            }}
          >
            {m}
          </button>
        ))}
      </div>
    </section>
  );
}
