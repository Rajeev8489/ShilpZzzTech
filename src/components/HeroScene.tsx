"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
    const ref = useRef<THREE.Points>(null);

    // Create a random distribution of 5000 points
    const positions = useMemo(() => {
        const points = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            points[i * 3] = (Math.random() - 0.5) * 10;
            points[i * 3 + 1] = (Math.random() - 0.5) * 10;
            points[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return points;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00D9FF"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
            />
        </Points>
    );
}

function FloatingShapes() {
    const meshRef1 = useRef<THREE.Mesh>(null);
    const meshRef2 = useRef<THREE.Mesh>(null);
    const meshRef3 = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef1.current) {
            meshRef1.current.rotation.x += delta * 0.2;
            meshRef1.current.rotation.y += delta * 0.3;
        }
        if (meshRef2.current) {
            meshRef2.current.rotation.x -= delta * 0.15;
            meshRef2.current.rotation.y += delta * 0.2;
        }
        if (meshRef3.current) {
            meshRef3.current.rotation.x += delta * 0.1;
            meshRef3.current.rotation.y -= delta * 0.4;
        }
    });

    return (
        <>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh ref={meshRef1} position={[2, 1, -2]}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#6C63FF" wireframe />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                <mesh ref={meshRef2} position={[-3, -1, -3]}>
                    <torusKnotGeometry args={[0.8, 0.2, 100, 16]} />
                    <meshStandardMaterial color="#00FFFF" opacity={0.6} transparent wireframe />
                </mesh>
            </Float>

            <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
                <mesh ref={meshRef3} position={[3, -2, -1]}>
                    <octahedronGeometry args={[0.8, 0]} />
                    <meshStandardMaterial color="#FF00FF" wireframe />
                </mesh>
            </Float>
        </>
    );
}

export function HeroScene() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20 dark:opacity-60 transition-opacity duration-1000">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <Particles />
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
