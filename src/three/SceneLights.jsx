export default function SceneLights({ intensity }) {
  return (
    <>
      <ambientLight intensity={0.4 * intensity} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5 * intensity}
      />
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.8 * intensity}
        color="#ff2a2a"
      />
    </>
  );
}
