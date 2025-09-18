import React, { useState, useRef, useEffect } from 'react';

export default function LazySection({ 
  children, 
  className = '', 
  threshold = 0.1,
  rootMargin = '50px',
  ...props 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold,
        rootMargin 
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
  }, [threshold, rootMargin]);

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 ease-out`}
      {...props}
    >
      {hasBeenVisible ? children : <div className="h-32 bg-gray-100 animate-pulse rounded" />}
    </div>
  );
}

