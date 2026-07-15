"use client";

import { useEffect, useRef } from "react";

// Colors from brand styling variables
const COLORS = {
  A: "#7B7FEA", // Lavender
  T: "#FFC94D", // Yellow
  G: "#0E9D6B", // Teal
  C: "#FF6A55", // Coral
};

const BASE_COMPLEMENTS: Record<string, "A" | "T" | "G" | "C"> = {
  A: "T",
  T: "A",
  G: "C",
  C: "G",
};

// Generate base pairs list: i % 4 cycles through A, T, G, C
const BASES: ("A" | "T" | "G" | "C")[] = ["A", "T", "G", "C", "T", "A", "C", "G", "A", "G", "C", "T", "G", "C", "A"];

export default function DNAHelix() {
  const svgRef = useRef<SVGSVGElement>(null);
  const requestRef = useRef<number | null>(null);
  const angleRef = useRef<number>(0);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dimensions
    const width = 250;
    const height = 450;
    const paddingY = 40;
    const numPairs = BASES.length;
    const centerX = width / 2;
    const amplitude = 70; // Width of the helix rotation
    const pitch = 0.55;   // Twist frequency

    // Query pre-rendered elements from DOM for fast raw updates
    const circlesA = svg.querySelectorAll<SVGCircleElement>(".strand-a");
    const circlesB = svg.querySelectorAll<SVGCircleElement>(".strand-b");
    const rungs = svg.querySelectorAll<SVGLineElement>(".rung");
    const textA = svg.querySelectorAll<SVGTextElement>(".text-a");
    const textB = svg.querySelectorAll<SVGTextElement>(".text-b");

    const animate = () => {
      const angleOffset = angleRef.current;

      for (let i = 0; i < numPairs; i++) {
        // Calculate vertical position
        const y = paddingY + (i / (numPairs - 1)) * (height - 2 * paddingY);

        // Strand A
        const thetaA = angleOffset + i * pitch;
        const xA = centerX + Math.sin(thetaA) * amplitude;
        const zA = Math.cos(thetaA); // Depth: -1 to 1

        // Strand B
        const thetaB = angleOffset + i * pitch + Math.PI;
        const xB = centerX + Math.sin(thetaB) * amplitude;
        const zB = Math.cos(thetaB); // Depth: -1 to 1

        // Depth calculations for styles
        const radiusA = 7 + zA * 2.5; // Circle radius oscillates between 4.5 and 9.5
        const radiusB = 7 + zB * 2.5;
        const opacityA = 0.35 + ((zA + 1) / 2) * 0.65; // Opacity between 0.35 and 1.0
        const opacityB = 0.35 + ((zB + 1) / 2) * 0.65;

        // Update Strand A elements
        if (circlesA[i]) {
          circlesA[i].setAttribute("cx", xA.toString());
          circlesA[i].setAttribute("cy", y.toString());
          circlesA[i].setAttribute("r", radiusA.toString());
          circlesA[i].style.opacity = opacityA.toString();
        }
        if (textA[i]) {
          textA[i].setAttribute("x", xA.toString());
          textA[i].setAttribute("y", (y + 3).toString());
          textA[i].style.opacity = opacityA > 0.7 ? (opacityA - 0.2).toString() : "0";
        }

        // Update Strand B elements
        if (circlesB[i]) {
          circlesB[i].setAttribute("cx", xB.toString());
          circlesB[i].setAttribute("cy", y.toString());
          circlesB[i].setAttribute("r", radiusB.toString());
          circlesB[i].style.opacity = opacityB.toString();
        }
        if (textB[i]) {
          textB[i].setAttribute("x", xB.toString());
          textB[i].setAttribute("y", (y + 3).toString());
          textB[i].style.opacity = opacityB > 0.7 ? (opacityB - 0.2).toString() : "0";
        }

        // Update connected Ladder Rungs
        if (rungs[i]) {
          rungs[i].setAttribute("x1", xA.toString());
          rungs[i].setAttribute("y1", y.toString());
          rungs[i].setAttribute("x2", xB.toString());
          rungs[i].setAttribute("y2", y.toString());
          // Opacity of the rung is higher when the connections are closer to the front
          const avgZ = Math.max(zA, zB);
          const rungOpacity = 0.08 + ((avgZ + 1) / 2) * 0.18;
          rungs[i].style.opacity = rungOpacity.toString();
        }
      }

      if (!prefersReducedMotion) {
        angleRef.current += 0.015; // Animation speed
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    // Run first frame
    animate();

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[280px] h-[480px] mx-auto flex items-center justify-center relative overflow-hidden select-none">
      {/* Background glow behind DNA */}
      <div className="absolute w-44 h-44 rounded-full bg-brand-teal/10 blur-[80px] pointer-events-none top-1/4 left-1/4" />
      <div className="absolute w-44 h-44 rounded-full bg-brand-lavender/10 blur-[80px] pointer-events-none bottom-1/4 right-1/4" />

      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 250 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md z-10"
      >
        {/* Pre-render connecting lines */}
        <g>
          {BASES.map((_, i) => (
            <line
              key={`rung-${i}`}
              className="rung transition-all duration-75"
              stroke="#16233A"
              strokeWidth="2"
              strokeDasharray="2 3"
              style={{ opacity: 0.1 }}
            />
          ))}
        </g>

        {/* Pre-render Strand A circles & text */}
        <g>
          {BASES.map((base, i) => {
            const color = COLORS[base];
            return (
              <g key={`group-a-${i}`}>
                <circle
                  className="strand-a transition-all duration-75"
                  fill={color}
                  stroke="#FBF7EE"
                  strokeWidth="1.5"
                  r="7"
                />
                <text
                  className="text-a font-mono font-bold text-[8px] fill-brand-bg select-none pointer-events-none text-center"
                  textAnchor="middle"
                  style={{ opacity: 0 }}
                >
                  {base}
                </text>
              </g>
            );
          })}
        </g>

        {/* Pre-render Strand B circles & text */}
        <g>
          {BASES.map((base, i) => {
            const compBase = BASE_COMPLEMENTS[base];
            const color = COLORS[compBase];
            return (
              <g key={`group-b-${i}`}>
                <circle
                  className="strand-b transition-all duration-75"
                  fill={color}
                  stroke="#FBF7EE"
                  strokeWidth="1.5"
                  r="7"
                />
                <text
                  className="text-b font-mono font-bold text-[8px] fill-brand-bg select-none pointer-events-none text-center"
                  textAnchor="middle"
                  style={{ opacity: 0 }}
                >
                  {compBase}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
