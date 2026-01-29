import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * A "server-ish" cube:
 * - dark physical body
 * - emissive strips
 * - front bays grid
 * - laser scan planes sweeping across
 */
const ServerCube = () => {
  const group = useRef();
  const scanA = useRef();
  const scanB = useRef();

  // Precompute bay positions (small panels on the front face)
  const bays = useMemo(() => {
    const items = [];
    const rows = 4;
    const cols = 3;
    const spacingX = 0.55;
    const spacingY = 0.38;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - (cols - 1) / 2) * spacingX;
        const y = ((rows - 1) / 2 - r) * spacingY;
        items.push({ x, y, id: `${r}-${c}` });
      }
    }
    return items;
  }, []);

  useFrame((state, dt) => {
    // Subtle rotation (feels premium even if OrbitControls is paused)
    if (group.current) {
      group.current.rotation.y += dt * 0.25;
      group.current.rotation.x = 0.15 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
    }

    // Laser scan motion
    const t = state.clock.elapsedTime;

    if (scanA.current) {
      scanA.current.position.y = -0.9 + ((t * 0.9) % 1.8); // -0.9 -> +0.9 looping
      scanA.current.material.opacity = 0.25 + 0.15 * Math.sin(t * 2.0);
    }

    if (scanB.current) {
      scanB.current.position.y = 0.9 - ((t * 0.7) % 1.8); // opposite direction
      scanB.current.material.opacity = 0.18 + 0.12 * Math.sin(t * 2.4 + 1.2);
    }
  });

  return (
    <group ref={group}>
      {/* Main body */}
      <mesh>
        <boxGeometry args={[2.1, 2.1, 2.1]} />
        <meshPhysicalMaterial
          color="#0b1220"
          metalness={0.85}
          roughness={0.25}
          clearcoat={0.7}
          clearcoatRoughness={0.25}
          emissive="#915EFF"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Inner glow core (slightly smaller, additive-ish look) */}
      <mesh>
        <boxGeometry args={[1.9, 1.9, 1.9]} />
        <meshStandardMaterial
          color="#050914"
          emissive="#915EFF"
          emissiveIntensity={0.18}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Front face panel (gives "server front" vibe) */}
      <mesh position={[0, 0, 1.06]}>
        <boxGeometry args={[1.9, 1.9, 0.12]} />
        <meshStandardMaterial
          color="#0a0f1f"
          metalness={0.65}
          roughness={0.35}
          emissive="#3b82f6"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Bay grid (like server drive bays) */}
      {bays.map((b) => (
        <mesh key={b.id} position={[b.x, b.y, 1.13]}>
          <boxGeometry args={[0.42, 0.22, 0.06]} />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.35}
            roughness={0.65}
            emissive="#22d3ee"
            emissiveIntensity={0.03}
          />
        </mesh>
      ))}

      {/* LED strips (thin glowing lines) */}
      <mesh position={[-0.95, 0.0, 1.14]}>
        <boxGeometry args={[0.05, 1.6, 0.05]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#915EFF"
          emissiveIntensity={0.9}
          transparent
          opacity={0.75}
        />
      </mesh>

      <mesh position={[0.95, 0.0, 1.14]}>
        <boxGeometry args={[0.05, 1.6, 0.05]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#22d3ee"
          emissiveIntensity={0.75}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Laser scan planes */}
      <mesh ref={scanA} position={[0, 0, 1.18]}>
        <planeGeometry args={[1.75, 0.12]} />
        <meshBasicMaterial
          color="#915EFF"
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={scanB} position={[0, 0, 1.19]}>
        <planeGeometry args={[1.55, 0.07]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

const DataCenterCubeCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [4.2, 2.6, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        {/* Lights */}
        <ambientLight intensity={0.55} />
        <directionalLight position={[6, 6, 5]} intensity={1.25} />
        <pointLight position={[-6, -4, -6]} intensity={0.55} color={"#22d3ee"} />
        <pointLight position={[0, 3, 6]} intensity={0.45} color={"#915EFF"} />

        {/* Float adds a premium "alive" feel */}
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.25}>
          <ServerCube />
        </Float>

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.9}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  );
};

export default DataCenterCubeCanvas;
