// Утилиты для оптимизации производительности

// Дебаунс функция
export function debounce(func, wait, immediate = false) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

// Тротлинг функция
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Оптимизация скролла
export function optimizeScroll(callback, delay = 16) {
  let ticking = false;
  
  return function(...args) {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback.apply(this, args);
        ticking = false;
      });
      ticking = true;
    }
  };
}

// Ленивая загрузка компонентов
export function lazyLoadComponent(importFunc) {
  return React.lazy(importFunc);
}

// Мемоизация для дорогих вычислений
export function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Оптимизация DOM операций
export function batchDOMUpdates(updates) {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
}

// Предзагрузка критических ресурсов
export function preloadCriticalResources() {
  const criticalResources = [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      as: 'style'
    },
    {
      href: '/images/hero-bg.jpg',
      as: 'image'
    },
    {
      href: '/images/logo.png',
      as: 'image'
    }
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    document.head.appendChild(link);
  });
}

// Оптимизация изображений
export function optimizeImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Оптимизация скриптов
export function loadScript(src, async = true, defer = true) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Оптимизация CSS
export function loadCSS(href, media = 'all') {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

// Мониторинг производительности
export function monitorPerformance() {
  // Время загрузки страницы
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0];
    console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
  });

  // Мониторинг памяти
  if ('memory' in performance) {
    console.log('Memory usage:', performance.memory);
  }
}

// Оптимизация анимаций
export function optimizeAnimations() {
  // Отключаем анимации для пользователей с prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
  }
}

// Оптимизация шрифтов
export function optimizeFonts() {
  // Предзагрузка критических шрифтов
  const fontPreloads = [
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2'
  ];

  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// Инициализация всех оптимизаций
export function initializePerformanceOptimizations() {
  preloadCriticalResources();
  optimizeImages();
  monitorPerformance();
  optimizeAnimations();
  optimizeFonts();
}
