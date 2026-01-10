import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, Environment } from "@react-three/drei";

function RotatingTorus() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <TorusKnot
      ref={meshRef}
      args={[0.7, 0.25, 128, 32]}
      position={[0, 0, 0]}
    >
      <meshPhysicalMaterial
        color="#ffffff"
        transmission={0.95}
        roughness={0.05}
        metalness={0}
        clearcoat={1}
        clearcoatRoughness={0.05}
        thickness={0.5}
        ior={1.5}
      />
    </TorusKnot>
  );
}

const TorusScene = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Environment preset="studio" />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <RotatingTorus />
      </Canvas>
    </div>
  );
};

export default TorusScene;

