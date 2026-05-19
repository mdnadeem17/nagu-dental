import React, { useRef, useState } from "react";

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum rotation in degrees
  perspective?: number; // Perspective distance in px
  scale?: number; // Scale on hover
}

export function ThreeDTilt({
  children,
  className = "",
  maxTilt = 15,
  perspective = 1000,
  scale = 1.04,
}: ThreeDTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
  });
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: "translate(-50%, -50%)",
    background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
    left: "50%",
    top: "50%",
    width: "200%",
    height: "200%",
    transition: "opacity 0.5s ease",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to card element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates to [-0.5, 0.5] range
    const x = mouseX / width - 0.5;
    const y = mouseY / height - 0.5;

    // Calculate rotation angles
    const rotateX = -y * maxTilt;
    const rotateY = x * maxTilt;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)", // fast response
    });

    // Positioning the specular shine highlight
    const shineX = (mouseX / width) * 100;
    const shineY = (mouseY / height) * 100;

    setShineStyle({
      opacity: 1,
      transform: "translate(-50%, -50%)",
      background: `radial-gradient(circle 180px at ${shineX}% ${shineY}%, rgba(255,255,255,0.18) 0%, transparent 80%)`,
      left: `${shineX}%`,
      top: `${shineY}%`,
      width: "200%",
      height: "200%",
      transition: "opacity 0.2s ease",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)", // smooth return
    });
    setShineStyle(prev => ({
      ...prev,
      opacity: 0,
      transition: "opacity 0.5s ease",
    }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        ...tiltStyle,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Specular sheen absolute overlay */}
      <div
        className="absolute pointer-events-none z-20"
        style={shineStyle}
      />
      {/* Target Content */}
      <div style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}
