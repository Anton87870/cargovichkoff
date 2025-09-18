import React, { useState, useRef, useEffect } from 'react';

export default function OptimizedVideo({ 
  src, 
  poster, 
  className = '',
  autoplay = false,
  muted = true,
  loop = true,
  playsInline = true,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer для ленивой загрузки
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observerRef.current?.unobserve(video);
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load();
    }
  }, [shouldLoad]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.warn('Video failed to load:', src);
  };

  return (
    <div className={`relative ${className}`}>
      {!shouldLoad && poster && (
        <img
          src={poster}
          alt="Video poster"
          className="w-full h-full object-cover"
        />
      )}
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          poster={poster}
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          onLoadedData={handleLoadedData}
          onError={handleError}
          {...props}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

