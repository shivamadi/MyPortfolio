import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';

const FloatingShapes = () => {
  return (
    <group>
      {/* Cinematic Distorted Cores - Dark Theme Palette */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[5, 2, -5]}>
          <MeshDistortMaterial
            color="#3b82f6"
            speed={2}
            distort={0.4}
            radius={1}
            transparent
            opacity={0.15}
            roughness={0}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[0.8, 32, 32]} position={[-6, -3, -8]}>
          <MeshDistortMaterial
            color="#818cf8"
            speed={3}
            distort={0.5}
            radius={1}
            transparent
            opacity={0.12}
            roughness={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
        <Sphere args={[1.2, 32, 32]} position={[2, -5, -12]}>
          <MeshDistortMaterial
            color="#c084fc"
            speed={1.5}
            distort={0.3}
            radius={1}
            transparent
            opacity={0.1}
            metalness={0.2}
          />
        </Sphere>
      </Float>
    </group>
  );
};

const ParticleField = () => {
  const ref = useRef();

  const positions = useMemo(() => {
    const p = new Float32Array(4000 * 3);
    for (let i = 0; i < 4000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 30;
    ref.current.rotation.x += delta / 40;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

const WireframeCube = ({ position, size, color, speed }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
    </mesh>
  );
};

const Background3D = () => {
  const mouse = useRef([0, 0]);

  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full bg-[#020617] overflow-hidden pointer-events-none"
      onMouseMove={(e) => {
        mouse.current = [
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1
        ];
      }}
    >
      {/* Deep Space Dust Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15)_0%,rgba(2,6,23,1)_80%)]" />

      {/* 3D Render Engine */}
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <ambientLight intensity={0.5} />

        <FloatingShapes />
        <ParticleField />

        {/* Floating Architectural Cubes */}
        <WireframeCube position={[-8, 4, -10]} size={2} color="#3b82f6" speed={0.2} />
        <WireframeCube position={[10, -5, -12]} size={3} color="#818cf8" speed={0.15} />
        <WireframeCube position={[-5, -8, -15]} size={4} color="#6366f1" speed={0.1} />

        {/* Global mouse light follow effect */}
        <spotLight
          position={[mouse.current[0] * 10, mouse.current[1] * 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.5}
          color="#3b82f6"
        />
      </Canvas>

      {/* Cinematic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-40" />

      {/* Atmospheric noise layer */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default Background3D;
