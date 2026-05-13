"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";

function RotatingModel() {
  const modelRef = useRef<THREE.Group | null>(null);

  const { scene } = useGLTF(
    "https://res.cloudinary.com/duijfl1pq/image/upload/v1778053408/e9704a56-3cc1-4d4c-b4d6-f16ab6baec85_v5xwxn.glb"
  );

  useFrame((state) => {
    if (!modelRef.current) return;
    const t = state.clock.getElapsedTime();

    // slow rotation
    modelRef.current.rotation.y += 0.003;

    // subtle floating
    modelRef.current.position.y = Math.sin(t) * 0.08;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      position={[0, -0.5, 0]}
      rotation={[0.3, 0.6, 0]}
    />
  );
}

function Loader({ onLoaded }: { onLoaded: () => void }) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return null;
}

export default function Splash() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const goToWork = useCallback(() => {
    if (leaving) return;

    setLeaving(true);

    setTimeout(() => {
      router.push("/work");
    }, 1000);
  }, [leaving, router]);

  useEffect(() => {
    const handleClick = () => goToWork();

    window.addEventListener("click", handleClick, { once: true });

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [goToWork]);

  return (
    <div
      onClick={goToWork}
      className={`
        relative h-screen w-screen overflow-hidden
        transition-opacity duration-1000 flex flex-col justify-center items-center
        ${loaded && !leaving ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* 3D Background */}
      <div className="h-[70dvh] w-full">
        <Canvas 
          className={`
            transition-opacity duration-1000
            ${loaded && !leaving ? "opacity-100" : "opacity-0"}
          `}
          camera={{ position: [0, 0, 5], fov: 50 }}
        >
          <Loader onLoaded={() => setLoaded(true)} />
          {/* Lighting */}
          <ambientLight intensity={1.2} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
          />

          <directionalLight
            position={[-5, -5, 2]}
            intensity={1}
          />

          {/* Model */}
          <RotatingModel />
        </Canvas>
      </div>
      <div className="flex items-center justify-center pointer-events-none">
        <h1
        >
          WELCOME
        </h1>
      </div>
    </div>
  );
}