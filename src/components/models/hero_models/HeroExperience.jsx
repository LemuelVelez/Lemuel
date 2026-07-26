import {
  ContactShadows,
  Float,
  OrbitControls,
  Sparkles,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";

const PortfolioAsset = ({ path, ...props }) => {
  const { scene } = useGLTF(path);
  const model = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [model]);

  return <primitive object={model} {...props} />;
};

const PortfolioScene = () => {
  const sceneGroup = useRef();

  useFrame(({ clock }, delta) => {
    if (!sceneGroup.current) return;

    sceneGroup.current.rotation.y += delta * 0.08;
    sceneGroup.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.08;
  });

  return (
    <group ref={sceneGroup}>
      <Float speed={1.35} rotationIntensity={0.3} floatIntensity={0.35}>
        <PortfolioAsset
          path="/models/portfolio/developer-core.glb"
          position={[-0.35, 0.35, 0]}
          rotation={[0.18, -0.35, 0.08]}
          scale={0.95}
        />
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.55}>
        <PortfolioAsset
          path="/models/portfolio/code-modules.glb"
          position={[2.15, -1.15, -0.65]}
          rotation={[-0.08, -0.45, 0.18]}
          scale={0.72}
        />
      </Float>

      <mesh position={[-0.25, -2.05, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <torusGeometry args={[2.45, 0.025, 12, 100]} />
        <meshStandardMaterial
          color="#f7c948"
          emissive="#f7c948"
          emissiveIntensity={1.35}
          metalness={0.45}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
};

const HeroExperience = () => (
  <div className="hero-canvas">
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.25, 8.4], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.7} color="#cad8ff" />
      <hemisphereLight args={["#8bb7ff", "#090d1e", 1.3]} />
      <spotLight
        castShadow
        position={[4.5, 6.5, 5]}
        angle={0.45}
        penumbra={0.9}
        intensity={55}
        color="#ffffff"
      />
      <pointLight position={[-4, 1.5, 3]} intensity={18} color="#557dff" />
      <pointLight position={[3, -1, 2]} intensity={12} color="#f7c948" />

      <Suspense fallback={null}>
        <PortfolioScene />
        <Sparkles
          count={80}
          scale={[8, 6, 5]}
          size={1.8}
          speed={0.25}
          color="#9eb5ff"
          opacity={0.55}
        />
        <ContactShadows
          position={[0, -2.1, 0]}
          opacity={0.48}
          scale={8}
          blur={2.4}
          far={5}
          color="#02040d"
        />
      </Suspense>

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.55}
        minPolarAngle={Math.PI / 3.1}
        maxPolarAngle={Math.PI / 1.85}
      />
    </Canvas>
  </div>
);

useGLTF.preload("/models/portfolio/developer-core.glb");
useGLTF.preload("/models/portfolio/code-modules.glb");

export default HeroExperience;
