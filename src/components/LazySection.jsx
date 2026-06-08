import { Suspense, useEffect, useRef, useState } from "react";

export default function LazySection({ children, minHeight = 0, rootMargin = "700px 0px" }) {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || shouldRender) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={ref} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}
