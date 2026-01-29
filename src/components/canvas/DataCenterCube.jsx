import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  return (
    <mesh rotation={[0.4, 0.6, 0]}>
      <boxGeometry args={[2, 2, 2]} />

      {/* Core material */}
      <meshStandardMaterial
        color="#0f172a"
        metalness={0.75}
        roughness={0.2}
        emissive="#915EFF"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
};

const DataCenterCubeCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [4, 3, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />

        {/* Cube */}
        <Cube />

        {/* Motion */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
};

export default DataCenterCubeCanvas;
