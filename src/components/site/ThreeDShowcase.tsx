import React, { useRef, useEffect, useState } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Face {
  indices: number[];
  color: string;
}

export function ThreeDShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, isHovered: false });

  // Generate 3D Molar Tooth Vertices
  const generateToothModel = (): { vertices: Point3D[]; faces: Face[] } => {
    const vertices: Point3D[] = [];
    const faces: Face[] = [];

    // CUSPS (Top of the crown)
    vertices.push({ x: -1.8, y: 2.2, z: -1.8 });  // 0: Back-Left Cusp
    vertices.push({ x: 1.8, y: 2.2, z: -1.8 });   // 1: Back-Right Cusp
    vertices.push({ x: 1.8, y: 2.2, z: 1.8 });    // 2: Front-Right Cusp
    vertices.push({ x: -1.8, y: 2.2, z: 1.8 });   // 3: Front-Left Cusp
    
    // Top Central valley (indentation)
    vertices.push({ x: 0, y: 1.6, z: 0 });        // 4: Central Valley

    // CROWN WAIST (Middle bulge)
    vertices.push({ x: -2.2, y: 0.4, z: -2.2 });  // 5
    vertices.push({ x: 2.2, y: 0.4, z: -2.2 });   // 6
    vertices.push({ x: 2.2, y: 0.4, z: 2.2 });    // 7
    vertices.push({ x: -2.2, y: 0.4, z: 2.2 });   // 8

    // NECK (Narrow connection to roots)
    vertices.push({ x: -1.5, y: -0.8, z: -1.5 }); // 9
    vertices.push({ x: 1.5, y: -0.8, z: -1.5 });  // 10
    vertices.push({ x: 1.5, y: -0.8, z: 1.5 });   // 11
    vertices.push({ x: -1.5, y: -0.8, z: 1.5 });  // 12

    // ROOT 1 (Left Root)
    vertices.push({ x: -1.2, y: -2.4, z: -0.6 }); // 13: Mid Root 1
    vertices.push({ x: -0.8, y: -4.0, z: 0 });    // 14: Tip Root 1

    // ROOT 2 (Right Root)
    vertices.push({ x: 1.2, y: -2.4, z: 0.6 });   // 15: Mid Root 2
    vertices.push({ x: 0.8, y: -4.0, z: 0 });     // 16: Tip Root 2

    // -- FACES --
    // Top Crown Faces (connecting to central valley)
    faces.push({ indices: [0, 1, 4], color: "primary" });
    faces.push({ indices: [1, 2, 4], color: "primary" });
    faces.push({ indices: [2, 3, 4], color: "primary" });
    faces.push({ indices: [3, 0, 4], color: "primary" });

    // Crown Sides (Cusps to Waist)
    faces.push({ indices: [0, 1, 6, 5], color: "secondary" });
    faces.push({ indices: [1, 2, 7, 6], color: "secondary" });
    faces.push({ indices: [2, 3, 8, 7], color: "secondary" });
    faces.push({ indices: [3, 0, 5, 8], color: "secondary" });

    // Waist to Neck Sides
    faces.push({ indices: [5, 6, 10, 9], color: "secondary" });
    faces.push({ indices: [6, 7, 11, 10], color: "secondary" });
    faces.push({ indices: [7, 8, 12, 11], color: "secondary" });
    faces.push({ indices: [8, 5, 9, 12], color: "secondary" });

    // Roots
    // Left Root (from Neck 9, 12 to Tip 14)
    faces.push({ indices: [9, 12, 13], color: "accent" });
    faces.push({ indices: [12, 13, 14], color: "accent" });
    faces.push({ indices: [9, 13, 14], color: "accent" });

    // Right Root (from Neck 10, 11 to Tip 16)
    faces.push({ indices: [10, 11, 15], color: "accent" });
    faces.push({ indices: [11, 15, 16], color: "accent" });
    faces.push({ indices: [10, 15, 16], color: "accent" });

    return { vertices, faces };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0.2;
    let angleY = 0.5;
    let angleZ = 0.1;

    const { vertices, faces } = generateToothModel();

    // Orbiting electron-like protective dental lattice
    const orbitNodes: Point3D[] = [];
    const numOrbitNodes = 12;
    for (let i = 0; i < numOrbitNodes; i++) {
      const theta = (i / numOrbitNodes) * Math.PI * 2;
      orbitNodes.push({
        x: Math.cos(theta) * 3.8,
        y: (Math.random() - 0.5) * 1.5,
        z: Math.sin(theta) * 3.8,
      });
    }

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      canvas.width = rect?.width || 500;
      canvas.height = rect?.height || 500;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 3D Rotations
    const rotateX3D = (p: Point3D, angle: number): Point3D => {
      const rad = angle;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: p.x,
        y: p.y * cos - p.z * sin,
        z: p.y * sin + p.z * cos,
      };
    };

    const rotateY3D = (p: Point3D, angle: number): Point3D => {
      const rad = angle;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: p.x * cos + p.z * sin,
        y: p.y,
        z: -p.x * sin + p.z * cos,
      };
    };

    const rotateZ3D = (p: Point3D, angle: number): Point3D => {
      const rad = angle;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: p.x * cos - p.y * sin,
        y: p.x * sin + p.y * cos,
        z: p.z,
      };
    };

    // Calculate normal of a face for lighting
    const calculateNormal = (p0: Point3D, p1: Point3D, p2: Point3D) => {
      const ux = p1.x - p0.x;
      const uy = p1.y - p0.y;
      const uz = p1.z - p0.z;

      const vx = p2.x - p0.x;
      const vy = p2.y - p0.y;
      const vz = p2.z - p0.z;

      const nx = uy * vz - uz * vy;
      const ny = uz * vx - ux * vz;
      const nz = ux * vy - uy * vx;

      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      return len === 0 ? { x: 0, y: 0, z: 1 } : { x: nx / len, y: ny / len, z: nz / len };
    };

    // Main Render Loop
    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const size = Math.min(width, height) * 0.12; // Scale factor

      ctx.clearRect(0, 0, width, height);

      // Auto rotation + Mouse influence
      let targetRotY = angleY + 0.008;
      let targetRotX = angleX;

      if (mouse.isHovered) {
        // Smoothly tilt towards mouse
        const targetX = (mouse.y - height / 2) / (height / 2) * 0.8;
        const targetY = (mouse.x - width / 2) / (width / 2) * 0.8;
        angleX += (targetX - angleX) * 0.08;
        angleY += (targetY - angleY) * 0.08;
      } else {
        angleY = targetRotY;
        angleX += (0.1 - angleX) * 0.02; // Rest angle
      }

      angleZ += 0.002;

      // Project vertices to 2D
      const projectedVertices = vertices.map((v) => {
        let p = rotateZ3D(v, angleZ * 0.5);
        p = rotateX3D(p, angleX);
        p = rotateY3D(p, angleY);

        // Perspective projection
        const fov = 350;
        const cameraDistance = 8;
        const scale = fov / (cameraDistance + p.z);
        return {
          x: width / 2 + p.x * scale * (size / 40),
          y: height / 2 - p.y * scale * (size / 40),
          z: p.z, // Keep depth for sorting
        };
      });

      // Lighting vector based on mouse or ambient studio setup
      const lightSource = {
        x: mouse.isHovered ? (mouse.x - width / 2) / (width / 2) * 3 : 2,
        y: mouse.isHovered ? -(mouse.y - height / 2) / (height / 2) * 3 : 2,
        z: 5,
      };
      const lightLength = Math.sqrt(lightSource.x * lightSource.x + lightSource.y * lightSource.y + lightSource.z * lightSource.z);
      const lightDir = { x: lightSource.x / lightLength, y: lightSource.y / lightLength, z: lightSource.z / lightLength };

      // Render Faces using painter's algorithm (depth sorting)
      const sortedFaces = faces.map((face, index) => {
        // Average Z depth of face vertices
        const avgZ = face.indices.reduce((sum, idx) => sum + projectedVertices[idx].z, 0) / face.indices.length;
        return { face, avgZ, index };
      }).sort((a, b) => b.avgZ - a.avgZ); // Back to front

      sortedFaces.forEach(({ face }) => {
        const pts = face.indices.map((idx) => projectedVertices[idx]);

        // Draw face path
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.closePath();

        // Standard dynamic lighting calculations
        const p0 = vertices[face.indices[0]];
        const p1 = vertices[face.indices[1]];
        const p2 = vertices[face.indices[2]];
        
        let rotatedP0 = rotateZ3D(p0, angleZ * 0.5); rotatedP0 = rotateX3D(rotatedP0, angleX); rotatedP0 = rotateY3D(rotatedP0, angleY);
        let rotatedP1 = rotateZ3D(p1, angleZ * 0.5); rotatedP1 = rotateX3D(rotatedP1, angleX); rotatedP1 = rotateY3D(rotatedP1, angleY);
        let rotatedP2 = rotateZ3D(p2, angleZ * 0.5); rotatedP2 = rotateX3D(rotatedP2, angleX); rotatedP2 = rotateY3D(rotatedP2, angleY);

        const normal = calculateNormal(rotatedP0, rotatedP1, rotatedP2);
        
        // Dot product normal & light vector
        const dotProduct = normal.x * lightDir.x + normal.y * lightDir.y + normal.z * lightDir.z;
        const intensity = Math.max(0.12, Math.min(1.0, dotProduct));

        // Create gradient glow
        const isDark = document.documentElement.classList.contains("dark");
        const orangeBase = isDark ? "39, 29, 18" : "253, 245, 230"; // warm amber fills
        const strokeColor = `rgba(247, 161, 59, ${0.4 + intensity * 0.6})`;

        ctx.fillStyle = `rgba(${orangeBase}, ${0.4 + intensity * 0.45})`;
        ctx.fill();

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Render mini highlights on front facing vertices
        if (normal.z > 0.6) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
          pts.forEach((pt) => {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
            ctx.fill();
          });
        }
      });

      // Render Orbiting Protective Shield Ring
      const projectedOrbitNodes = orbitNodes.map((n, i) => {
        // Orbit speed & angle offset
        const rotYOffset = angleY + (angleZ * 2.2) + (i * (Math.PI * 2 / numOrbitNodes));
        let p = {
          x: Math.cos(rotYOffset) * 3.4,
          y: Math.sin(rotYOffset * 0.5) * 0.8 + n.y,
          z: Math.sin(rotYOffset) * 3.4,
        };

        p = rotateX3D(p, angleX);
        const fov = 350;
        const scale = fov / (8 + p.z);
        return {
          x: width / 2 + p.x * scale * (size / 40),
          y: height / 2 - p.y * scale * (size / 40),
          z: p.z,
        };
      });

      // Render orbiting connections (constellation wireframe)
      ctx.beginPath();
      for (let i = 0; i < numOrbitNodes; i++) {
        const nodeA = projectedOrbitNodes[i];
        const nodeB = projectedOrbitNodes[(i + 1) % numOrbitNodes];
        
        // Depth-based transparency
        const avgZ = (nodeA.z + nodeB.z) / 2;
        const opacity = Math.max(0.1, Math.min(0.65, 1 - (avgZ + 3.4) / 6.8));
        
        ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
        ctx.lineWidth = 1.0;
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
      }
      ctx.stroke();

      // Render orbital particles
      projectedOrbitNodes.forEach((node) => {
        const opacity = Math.max(0.2, Math.min(0.9, 1 - (node.z + 3.4) / 6.8));
        const glowRadius = Math.max(2, Math.min(6.5, 4.5 * opacity));

        // Draw particle glow core
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`;
        ctx.fill();

        // Micro light halos
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${opacity * 0.25})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mouse]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setMouse((prev) => ({ ...prev, isHovered: false }));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[320px] md:h-[450px] lg:h-[550px] cursor-grab active:cursor-grabbing select-none"
    >
      {/* 3D background shadow backdrop */}
      <div className="absolute inset-16 rounded-full blur-[80px] opacity-35 bg-radial-gradient from-primary via-secondary to-transparent pointer-events-none" />
      
      <canvas
        ref={canvasRef}
        className="w-full h-full drop-shadow-[0_0_35px_rgba(247,161,59,0.22)]"
      />
    </div>
  );
}
