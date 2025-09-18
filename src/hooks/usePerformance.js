import { useEffect, useCallback, useState, useRef } from 'react';

// Хук для оптимизации производительности
export function usePerformance() {
  // Дебаунс для поиска
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  // Тротлинг для обработчиков событий
  const useThrottle = (callback, delay) => {
    const lastRun = useRef(Date.now());

    return useCallback((...args) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = Date.now();
      }
    }, [callback, delay]);
  };

  // Ленивая загрузка изображений
  const useLazyImage = (src, options = {}) => {
    const [imageSrc, setImageSrc] = useState(options.placeholder || '');
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, ...options }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (isInView && src) {
        setImageSrc(src);
      }
    }, [isInView, src]);

    const handleLoad = () => {
      setIsLoaded(true);
    };

    return {
      ref: imgRef,
      src: imageSrc,
      isLoaded,
      onLoad: handleLoad
    };
  };

  // Предзагрузка критических ресурсов
  const preloadResource = useCallback((href, as = 'image') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }, []);

  // Оптимизация скролла
  const useOptimizedScroll = (callback, delay = 16) => {
    const throttledCallback = useThrottle(callback, delay);

    useEffect(() => {
      window.addEventListener('scroll', throttledCallback, { passive: true });
      return () => window.removeEventListener('scroll', throttledCallback);
    }, [throttledCallback]);
  };

  return {
    useDebounce,
    useThrottle,
    useLazyImage,
    preloadResource,
    useOptimizedScroll
  };
}

// Хук для мониторинга производительности
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Мониторинг времени загрузки
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
    });
  }, []);
}

// Хук для предзагрузки критических ресурсов
export function useCriticalResourcePreloading() {
  useEffect(() => {
    // Предзагрузка критических шрифтов
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'style';
      document.head.appendChild(link);
    });

    // Предзагрузка критических изображений
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.png'
    ];

    criticalImages.forEach(image => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = image;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);
}
