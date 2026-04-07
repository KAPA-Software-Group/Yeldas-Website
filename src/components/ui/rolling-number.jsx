import { useEffect, useMemo, useRef, useState } from "react";

function buildDigitFrames(digit, cycles) {
  const frames = [];

  for (let cycle = 0; cycle < cycles; cycle += 1) {
    for (let value = 0; value <= 9; value += 1) {
      frames.push(value);
    }
  }

  for (let value = 0; value <= digit; value += 1) {
    frames.push(value);
  }

  return frames;
}

function getColumnConfig(index, totalDigits, digit, durationMs) {
  const distanceFromRight = totalDigits - index - 1;
  const cycles = Math.max(1, Math.min(3, distanceFromRight + 1));

  return {
    delay: 0,
    frames: buildDigitFrames(digit, cycles),
    rollDuration: durationMs,
  };
}

function DigitColumn({ digit, index, totalDigits, durationMs }) {
  const { delay, frames, rollDuration } = useMemo(
    () => getColumnConfig(index, totalDigits, digit, durationMs),
    [digit, durationMs, index, totalDigits]
  );

  return (
    <ul
      aria-hidden="true"
      className="rolling-counter__column"
      style={{
        "--counter-delay": `${Math.round(delay)}ms`,
        "--counter-roll-duration": `${Math.round(rollDuration)}ms`,
        "--counter-y": `calc(-${frames.length - 1} * var(--counter-digit-height))`,
      }}
    >
      {frames.map((frame, frameIndex) => (
        <li key={`${index}-${frameIndex}`}>{frame}</li>
      ))}
    </ul>
  );
}

export function RollingNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}) {
  const ref = useRef(null);
  const started = useRef(false);
  const [phase, setPhase] = useState("idle");

  const numericValue = Math.max(0, Math.trunc(value));
  const digits = useMemo(() => String(numericValue).split("").map(Number), [numericValue]);
  const durationMs = Math.max(duration * 1000, 300);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    let activateId = 0;
    let cleanupId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        if (window.scrollY < 50 && entry.intersectionRatio < 0.8) return;

        started.current = true;
        setPhase("running");

        activateId = window.setTimeout(() => {
          setPhase("active");
        }, 16);

        cleanupId = window.setTimeout(() => {
          setPhase("complete");
        }, durationMs + 900);

        observer.disconnect();
      },
      { threshold: 0.3, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.clearTimeout(activateId);
      window.clearTimeout(cleanupId);
    };
  }, [durationMs]);

  return (
    <span
      ref={ref}
      aria-label={`${prefix}${numericValue}${suffix}`}
      className={[
        "rolling-counter",
        phase === "running" || phase === "active" ? "running" : "",
        phase === "active" || phase === "complete" ? "active" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--counter-duration": `${Math.round(durationMs)}ms`,
      }}
    >
      {prefix ? <span className="rolling-counter__suffix">{prefix}</span> : null}
      {digits.map((digit, index) => (
        <DigitColumn
          key={`${index}-${digit}`}
          digit={digit}
          index={index}
          totalDigits={digits.length}
          durationMs={durationMs}
        />
      ))}
      {suffix ? <span className="rolling-counter__suffix">{suffix}</span> : null}
    </span>
  );
}
