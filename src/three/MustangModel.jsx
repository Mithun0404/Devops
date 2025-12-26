import { useTexture } from "@react-three/drei";

export default function MustangModel() {
  const texture = useTexture("/assets/images/mustang.jpeg");

  return (
    <mesh>
      <planeGeometry args={[4.5, 2.5]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.4}
        metalness={0.3}
      />
    </mesh>
  );
}
