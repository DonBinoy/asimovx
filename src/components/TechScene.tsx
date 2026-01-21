"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Box, OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three';

const RotatingTorus = () => {
    const torusRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (torusRef.current) {
            torusRef.current.rotation.x += 0.01;
            torusRef.current.rotation.y += 0.005;
        }
    });

    return (
        <Torus ref={torusRef} args={[1, 0.3, 16, 100]} scale={1.2}>
            <meshStandardMaterial
                color="#0ea5e9"
                emissive="#0ea5e9"
                emissiveIntensity={0.5}
                wireframe
            />
        </Torus>
    );
};

const FloatingBoxes = () => {
    const box1 = useRef<THREE.Mesh>(null);
    const box2 = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (box1.current) {
            box1.current.rotation.x += 0.008;
            box1.current.rotation.y += 0.008;
            box1.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
        }
        if (box2.current) {
            box2.current.rotation.x -= 0.006;
            box2.current.rotation.z += 0.006;
            box2.current.position.y = Math.cos(state.clock.elapsedTime) * 0.3;
        }
    });

    return (
        <>
            <Box ref={box1} args={[0.5, 0.5, 0.5]} position={[-2, 0, 0]}>
                <meshStandardMaterial
                    color="#ec4899"
                    emissive="#ec4899"
                    emissiveIntensity={0.6}
                    wireframe
                />
            </Box>
            <Box ref={box2} args={[0.4, 0.4, 0.4]} position={[2, 0, 0]}>
                <meshStandardMaterial
                    color="#0ea5e9"
                    emissive="#0ea5e9"
                    emissiveIntensity={0.6}
                    wireframe
                />
            </Box>
        </>
    );
};

const TechScene = () => {
    const [isMobile, setIsMobile] = React.useState(true);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) return null;

    return (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ opacity: 0.4, pointerEvents: 'none' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.2} />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
                <RotatingTorus />
                <FloatingBoxes />
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default TechScene;
