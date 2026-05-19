import React, { useRef, useEffect } from "react";

interface MouseSpotlightProps {
  children: React.ReactNode;
  className?: string;
  glowColorPrimary?: string; // e.g. "rgba(247, 161, 59, 0.15)"
  glowColorSecondary?: string; // e.g. "rgba(56, 189, 248, 0.08)"
}

export function MouseSpotlight({
  children,
  className = "",
  glowColorPrimary = "rgba(247, 161, 59, 0.12)",
  glowColorSecondary = "rgba(56, 189, 248, 0.08)",
}: MouseSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        // Define default coordinates to prevent layout jump on load
        ["--mouse-x" as any]: "50%",
        ["--mouse-y" as any]: "50%",
      }}
    >
      {/* Interactive mouse spotlight aura layers */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(circle 350px at var(--mouse-x) var(--mouse-y), ${glowColorPrimary} 0%, transparent 80%),
            radial-gradient(circle 500px at var(--mouse-x) var(--mouse-y), ${glowColorSecondary} 0%, transparent 100%)
          `,
        }}
      />
      {children}
    </div>
  );
}
