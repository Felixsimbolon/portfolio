"use client";

import { useEffect, useState } from "react";

export default function TypeWriter({
  text,
  startDelay = 0,
  speed = 22,
  className = "",
}: {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
}) {
  const [index, setIndex]   = useState(0);
  const [active, setActive] = useState(false);

  // Wait for startDelay before beginning
  useEffect(() => {
    const t = setTimeout(() => setActive(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  // Advance one character at a time
  useEffect(() => {
    if (!active || index >= text.length) return;
    const t = setTimeout(() => setIndex((i) => i + 1), speed);
    return () => clearTimeout(t);
  }, [active, index, text, speed]);

  const done = index >= text.length;

  return (
    <span className={className}>
      {text.slice(0, index)}
      {!done && <span className="type-cursor" aria-hidden="true" />}
    </span>
  );
}
