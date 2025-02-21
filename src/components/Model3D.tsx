
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

export function Model3D({ scroll = 0 }) {
  const meshRef = useRef();
  const { nodes } = useGLTF("/your-3d-model.glb"); // You'll need to add your 3D model file

  // Create smooth rotation animation based on scroll
  const { rotation } = useSpring({
    rotation: [0, scroll * Math.PI * 2, 0],
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useFrame((state) => {
    if (!meshRef.current) return;
    // Add subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  // Placeholder box mesh - replace with your actual 3D model
  return (
    <animated.mesh ref={meshRef} rotation={rotation} scale={[2, 2, 2]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0EA5E9" />
    </animated.mesh>
  );
}
