import { useState, useEffect, useRef } from "react";

/**
 * useCountUp
 *
 * Counts from 0 to `target` over `duration` ms using an easeOutExpo curve.
 * Starts only once the returned `ref` is scrolled into view.
 *
 * @param {number} target   - The final number to count to
 * @param {number} duration - Animation duration in ms (default 1800)
 * @returns {{ ref, value }} - Attach `ref` to the element; read `value` for current count
 */
export function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}
