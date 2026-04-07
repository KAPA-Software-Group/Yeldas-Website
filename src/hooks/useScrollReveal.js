import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 *
 * Attach the returned ref to any container element.
 * When that container enters the viewport, every child with the class "sr"
 * gains "sr-visible", triggering the CSS reveal transition.
 *
 * Pair with the "sr-stagger" class on the container to apply automatic
 * nth-child transition-delays so children animate in one after another.
 *
 * Usage:
 *   const ref = useScrollReveal()
 *   <div ref={ref} className="sr-stagger">
 *     <div className="sr">…</div>   ← slides up into view, delay 0ms
 *     <div className="sr">…</div>   ← slides up into view, delay 120ms
 *   </div>
 *
 * For a single standalone element, add both the ref and "sr" to the same el:
 *   const ref = useScrollReveal()
 *   <p ref={ref} className="sr">…</p>
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      // If the root itself carries .sr, reveal it
      el.classList.add("sr-visible");
      // Reveal every .sr descendant (covers stagger children)
      el.querySelectorAll(".sr").forEach((child) =>
        child.classList.add("sr-visible")
      );
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          obs.unobserve(el);
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
