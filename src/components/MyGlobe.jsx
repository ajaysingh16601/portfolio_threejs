import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const MyGlobe = () => {
  const globeRef = useRef();

  // Optionally add an auto rotation effect
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <Globe
      ref={globeRef}
      height={326}
      width={326}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere
      showGraticules
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      labelsData={[
        {
          lat: 22.7196,
          lng: 75.8577,
          text: "Indore",
          color: "white",
          size: 20,
        }
      ]}
    />
  );
};

export default MyGlobe;
