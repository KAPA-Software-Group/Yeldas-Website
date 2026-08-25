import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 *
 * Attach the returned ref to any container element.
 * When that container edges into the viewport, every child with the class "sr"
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
 *
 * NOTE ON THE THRESHOLD ARGUMENT
 * ------------------------------
 * The optional first argument is kept for backward compatibility but is no
 * longer used as an IntersectionObserver `threshold`. A threshold is a fraction
 * of the *element* that must be visible, which breaks on phones: a section that
 * is several times taller than a small viewport can never reach, say, 20%
 * visibility, so the reveal would never fire and the content would stay hidden.
 * Instead we trigger the moment the element's top edge enters the viewport
 * (via rootMargin), which behaves consistently on every screen size.
 */
export function useScrollReveal(/* legacy threshold arg — intentionally unused */) {
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

    // Fallback: if IntersectionObserver isn't available, reveal immediately so
    // content is never left invisible.
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          obs.unobserve(el);
        }
      },
      {
        // Fire as soon as any part of the element enters the viewport, pulled
        // up slightly from the bottom so the animation starts a touch early.
        // Independent of element height, so it works on phones and desktops.
        threshold: 0,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return ref;
}
