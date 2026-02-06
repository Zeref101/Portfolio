// hooks/useInViewport.ts
import { useEffect, useState, RefObject } from "react";

export function useInViewport<T extends HTMLElement>(
  ref: RefObject<T>,
  threshold = 0.2
) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}
