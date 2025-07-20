"use client"

import { useEffect, useRef } from "react";

export default function AccentGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX - 90}px`;
        glowRef.current.style.top = `${e.clientY - 90}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-10 rounded-full blur-2xl mix-blend-lighten"
      style={{
        width: 180,
        height: 180,
        left: 0,
        top: 0,
        zIndex: 1000,
        background: "radial-gradient(circle, #F8C30688 0%, #F8C30644 60%, transparent 100%)",
        transition: "left 0.1s linear, top 0.1s linear",
      }}
    />
  );
} 