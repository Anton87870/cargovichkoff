// Утилиты для оптимизации изображений

// Генерация srcset для адаптивных изображений
export function generateSrcSet(baseUrl, widths = [320, 640, 768, 1024, 1280, 1920]) {
  return widths
    .map(width => `${baseUrl}?w=${width}&q=80 ${width}w`)
    .join(', ');
}

// Генерация sizes для адаптивных изображений
export function generateSizes(breakpoints = {
  mobile: '100vw',
  tablet: '50vw',
  desktop: '33vw'
}) {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(max-width: ${breakpoint === 'mobile' ? '768px' : '1024px'}) ${size}`)
    .concat([breakpoints.desktop])
    .join(', ');
}

// Ленивая загрузка изображений с Intersection Observer
export function createLazyImageLoader(options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;
        const srcset = img.dataset.srcset;
        
        if (src) {
          img.src = src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
        }
        
        if (srcset) {
          img.srcset = srcset;
        }
        
        observer.unobserve(img);
      }
    });
  }, defaultOptions);
}

// Оптимизация изображений для WebP
export function getOptimizedImageUrl(url, options = {}) {
  const {
    format = 'webp',
    quality = 80,
    width,
    height,
    fit = 'cover'
  } = options;

  // Если это Unsplash, используем их API для оптимизации
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams();
    
    if (width) params.append('w', width);
    if (height) params.append('h', height);
    params.append('q', quality);
    params.append('fit', fit);
    params.append('fm', format);
    
    return `${baseUrl}?${params.toString()}`;
  }

  // Для других изображений возвращаем оригинал
  return url;
}

// Предзагрузка критических изображений
export function preloadCriticalImages(images) {
  images.forEach(image => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = image.src;
    link.as = 'image';
    
    if (image.srcset) {
      link.imagesrcset = image.srcset;
    }
    
    if (image.sizes) {
      link.imagesizes = image.sizes;
    }
    
    document.head.appendChild(link);
  });
}

// Создание placeholder для изображений
export function createImagePlaceholder(width, height, color = '#f3f4f6') {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL();
}

// Оптимизация изображений для мобильных устройств
export function getMobileOptimizedImage(url, options = {}) {
  const mobileOptions = {
    width: 768,
    quality: 70,
    format: 'webp',
    ...options
  };
  
  return getOptimizedImageUrl(url, mobileOptions);
}

// Оптимизация изображений для десктопа
export function getDesktopOptimizedImage(url, options = {}) {
  const desktopOptions = {
    width: 1920,
    quality: 85,
    format: 'webp',
    ...options
  };
  
  return getOptimizedImageUrl(url, desktopOptions);
}

