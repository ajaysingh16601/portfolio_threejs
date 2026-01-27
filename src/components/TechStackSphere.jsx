import React, { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Image } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '../constants/index.js';

const SphereIcon = ({ position, url, name }) => {
  return (
    <group position={position}>
      <Image 
        url={url} 
        transparent 
        scale={[1.5, 1.5]} 
        side={THREE.DoubleSide}
        lookAt={[0, 0, 0]} // Make icons face the center (or camera if we want)
      />
    </group>
  );
};

const IconsSphere = ({ radius = 10 }) => {
  // Flatten all skills into a single array
  const allSkills = useMemo(() => {
    return skills.flatMap(section => section.skill);
  }, []);

  // Calculate positions on a sphere using Fibonacci sphere algorithm
  const positions = useMemo(() => {
    const count = allSkills.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    return allSkills.map((skill, i) => {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...skill,
        position: [x * radius, y * radius, z * radius]
      };
    });
  }, [allSkills, radius]);

  // Make icons always face the camera
  useFrame((state) => {
    // This logic would go here if we wanted individual billboards
    // But Image component with lookAt might be tricky if we want them to face camera
    // Actually, let's just let them rotate with the sphere for now
  });

  return (
    <group>
      {positions.map((skill, index) => (
        <BillboardIcon key={`${skill.id}-${index}`} position={skill.position} url={skill.image} name={skill.name} />
      ))}
    </group>
  );
};

// Billboard component to make sure icons always face the camera
const BillboardIcon = ({ position, url, name }) => {
  const ref = React.useRef();
  
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.lookAt(camera.position);
    }
  });

  return (
    <group position={position} ref={ref}>
      <Image 
        url={url} 
        transparent 
        scale={[1.2, 1.2]} 
      />
      {/* Optional: Add text label below icon */}
      {/* <Text position={[0, -0.8, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        {name}
      </Text> */}
    </group>
  );
};

const TechStackSphere = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const radius = isMobile ? 6 : 8;
  const rotateSpeed = isMobile ? 2.5 : 6.5;
  const dpr = isMobile ? [1, 1.2] : [1, 1.5];

  return (
    <div className="w-full h-full min-h-[240px] sm:min-h-[300px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 16], fov: 50 }}
        dpr={dpr}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        
        <IconsSphere radius={radius} />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={rotateSpeed} 
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default TechStackSphere;
