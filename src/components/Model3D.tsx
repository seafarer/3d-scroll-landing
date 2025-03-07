
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useSpring } from '@react-spring/three';
import { a } from '@react-spring/three';
import * as THREE from 'three';

export function Model3D({ scroll = 0 }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF("/skull.glb"); // Using the skull model

  // Create smooth rotation animation based on scroll
  const springs = useSpring({
    rotation: [0, scroll * Math.PI * 2, 0],
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useFrame((state) => {
    if (!meshRef.current) return;
    // Add subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <group>
      <a.group rotation={springs.rotation}>
        <mesh 
          ref={meshRef} 
          scale={[2, 2, 2]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#0EA5E9" />
        </mesh>
      </a.group>
    </group>
  );
}

useGLTF.preload("/skull.glb");
