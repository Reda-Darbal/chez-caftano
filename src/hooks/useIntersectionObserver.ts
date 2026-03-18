"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * A hook that tracks when an element enters or leaves the viewport.
 * @param threshold - A number between 0 and 1 indicating what percentage of the target's visibility the observer's callback should be executed.
 * @returns [ref, isVisible]
 */
export function useIntersectionObserver(threshold: number = 0.1): [RefObject<HTMLElement | null>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we can stop observing if we only want one-time animation
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
}
