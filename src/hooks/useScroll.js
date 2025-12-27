import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook pour détecter la position et direction du scroll
 * @returns {{ scrollY: number, isScrollingDown: boolean, isScrolled: boolean }}
 */
export function useScroll(threshold = 20) {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    isScrollingDown: false,
    isScrolled: false,
  });

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        
        setScrollState({
          scrollY: currentY,
          isScrollingDown: currentY > lastScrollY.current,
          isScrolled: currentY > threshold,
        });

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollState;
}

/**
 * Hook pour le scroll progress d'un élément
 * @param {React.RefObject} ref - Référence de l'élément à observer
 * @returns {number} - Progress entre 0 et 1
 */
export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = el.offsetHeight - windowHeight;
      const calculatedProgress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      
      setProgress(calculatedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}

/**
 * Hook pour verrouiller le scroll du body
 * @param {boolean} lock - true pour verrouiller
 */
export function useLockBodyScroll(lock) {
  useEffect(() => {
    if (lock) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lock]);
}

/**
 * Hook pour observer l'intersection d'éléments
 * @param {Object} options - Options de l'IntersectionObserver
 * @returns {[React.RefObject, boolean]} - [ref, isIntersecting]
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.3, ...options });

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.root, options.rootMargin]);

  return [ref, isIntersecting];
}