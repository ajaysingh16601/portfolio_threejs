import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  const sizes = calculateSizes(isSmall, isMobile, isLandscape);
  const cameraTargetZ = isMobile ? (isLandscape ? 18 : 22) : 20;

  return (
    <section className="section-screen w-full flex flex-col relative overflow-hidden" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-3 relative z-10">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Ajay <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Software Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0 mt-4 hero-canvas">
        <Canvas 
          className="w-full h-full"
          dpr={[1, isMobile ? 1 : 1.75]}
          performance={{ min: isMobile ? 0.35 : 0.5, max: 1 }}
          flat
          shadows={false}
          gl={{ 
            antialias: !isMobile,
            powerPreference: 'high-performance',
            alpha: false,
            stencil: false,
            depth: true
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile} cameraTargetZ={cameraTargetZ}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <ambientLight intensity={isMobile ? 0.8 : 1} />
            <directionalLight position={[10, 10, 10]} intensity={isMobile ? 0.4 : 0.5} />
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <PerformanceMonitor />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
