
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls } from '@react-three/drei';
import { Model3D } from './Model3D';

export function Scene3D({ scroll = 0 }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ height: '100%', minHeight: '500px' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Model3D scroll={scroll} />
      </PresentationControls>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
