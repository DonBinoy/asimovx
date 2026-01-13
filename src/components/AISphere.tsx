"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const SphereContent = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
                <MeshDistortMaterial
                    color="#ef118fff"
                    attach="material"
                    distort={0.5}
                    speed={3}
                    roughness={0}
                    emissive="#ff00b3ff"
                    emissiveIntensity={0.8}
                />
            </Sphere>
        </Float>
    );
};

const AISphere = () => {
    return (
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ opacity: 0.7 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
                <SphereContent />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default AISphere;
