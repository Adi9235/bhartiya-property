'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CounterProps {
  value: string;
  duration?: number;
}

/** Counts up numeric values, renders non-numeric values (like "MSME") as-is. */
export function Counter({ value, duration = 1400 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduceMotion = useReducedMotion();
  const numeric = Number(value);
  const isNumeric = !Number.isNaN(numeric) && value.trim() !== '';
  const [display, setDisplay] = useState(isNumeric && !reduceMotion ? '0' : value);

  useEffect(() => {
    if (!isNumeric || !inView || reduceMotion) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(numeric * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumeric, numeric, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {isNumeric ? '+' : ''}
    </span>
  );
}
