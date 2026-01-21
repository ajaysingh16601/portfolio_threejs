import { useState, useEffect, useRef } from 'react';

export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderSrc = null,
  onLoad = null 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // For external images or those already in cache, skip intersection observer
    const isExternal = src.startsWith('http');
    if (isExternal) {
      // For external images, load directly (they're not affected by service worker)
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const actualSrc = img.dataset.src;

            // Load the actual image
            const imageElement = new Image();
            imageElement.src = actualSrc;
            
            imageElement.onload = () => {
              setImageSrc(actualSrc);
              setIsLoaded(true);
              if (onLoad) onLoad();
            };

            imageElement.onerror = () => {
              setError(true);
              setImageSrc(actualSrc); // Show the broken image anyway
            };

            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, onLoad]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleImageError = () => {
    setError(true);
  };

  // For external images, render directly
  if (src.startsWith('http')) {
    return (
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        crossOrigin="anonymous"
      />
    );
  }

  return (
    <img
      ref={imgRef}
      data-src={src}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-75'} transition-opacity duration-300`}
      loading="lazy"
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
};

/**
 * LazySection component - loads content when visible
 * Useful for heavy Three.js canvas sections
 */
export const LazySection = ({ children, fallback = null }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazyImage;
