"use client";

import { useEffect, useState } from "react";
import { AraihanCursor } from "@/components/araihan-cursor";
import { useMoonPhase } from "@/hooks/useMoonPhase";

// 15 TikTak access point messages
const tikTakMessages = [
  "Discover the illustrated card game",
  "Access book by chapters",
  "Enter AquaMundi Garden",
  "Explore Chapter 1: The Awakening",
  "Download Sacred Artbook",
  "Listen to Frequency Meditations",
  "Join the Global Garden Community",
  "Learn Ancient Flower Wisdom",
  "Access Digital Herbarium",
  "Experience VR Garden Tours",
  "Read Ecological Prophecies",
  "Connect with Local Guardians",
  "Participate in Ritual Ceremonies",
  "Study Sacred Geometry Patterns",
  "Contribute to Flower Conservation",
];

export function MysticalFlowerPortal() {
  const [activePetal, setActivePetal] = useState(0);
  const [currentSyllable, setCurrentSyllable] = useState(0);
  const [showGuardian, setShowGuardian] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hoveredPetal, setHoveredPetal] = useState<number | null>(null);
  const [syllableVisible, setSyllableVisible] = useState(true);
  const [animatedPetal, setAnimatedPetal] = useState(0);
  const { phase: moonPhase, illumination } = useMoonPhase();

  // Sacred mantric sequence: NAH → IA → RA
  const sacredSyllables = ["NAH", "IA", "RA"];

  useEffect(() => {
    // TikTak petal cycling: changes every 4 seconds
    const petalTimer = setInterval(() => {
      setActivePetal((prev) => (prev + 1) % 15);
    }, 4000);

    // Mantric pulse: each syllable visible for 20 seconds with smooth transitions
    const syllableTimer = setInterval(() => {
      setSyllableVisible(false);
      setTimeout(() => {
        setCurrentSyllable((prev) => (prev + 1) % 3);
        setSyllableVisible(true);
      }, 1000);
    }, 20000);

    // Sequential petal animation timer - 4 second intervals
    const petalAnimationTimer = setInterval(() => {
      setAnimatedPetal((prev) => (prev + 1) % 15);
    }, 4000);

    return () => {
      clearInterval(petalTimer);
      clearInterval(syllableTimer);
      clearInterval(petalAnimationTimer);
    };
  }, []);

  const handlePageClick = () => {
    if (!hasInteracted) {
      setShowGuardian(true);
      setHasInteracted(true);
    }
  };

  // Enhanced color palette for 15 petals
  const petalColors = [
    { base: "#FFD700", gradient: "#FFF8DC", glow: "#FFD700" }, // yellow
    { base: "#FFA500", gradient: "#FFE4B5", glow: "#FFA500" }, // orange
    { base: "#FF8C00", gradient: "#FFDAB9", glow: "#FF8C00" }, // dark orange
    { base: "#FF6347", gradient: "#FFB6C1", glow: "#FF6347" }, // red-orange
    { base: "#DC143C", gradient: "#FFB6C1", glow: "#DC143C" }, // red
    { base: "#B22222", gradient: "#DDA0DD", glow: "#B22222" }, // dark red
    { base: "#8B008B", gradient: "#DDA0DD", glow: "#8B008B" }, // magenta
    { base: "#4B0082", gradient: "#9370DB", glow: "#4B0082" }, // indigo
    { base: "#483D8B", gradient: "#9370DB", glow: "#483D8B" }, // slate blue
    { base: "#4169E1", gradient: "#87CEEB", glow: "#4169E1" }, // royal blue
    { base: "#1E90FF", gradient: "#87CEEB", glow: "#1E90FF" }, // dodger blue
    { base: "#00CED1", gradient: "#AFEEEE", glow: "#00CED1" }, // turquoise
    { base: "#20B2AA", gradient: "#AFEEEE", glow: "#20B2AA" }, // sea green
    { base: "#008B8B", gradient: "#98FB98", glow: "#008B8B" }, // dark cyan
    { base: "#2E8B57", gradient: "#98FB98", glow: "#2E8B57" }, // sea green
  ];

  function getMoonPath(phase: string): string {
    const r = 12; // radius

    switch (phase) {
      case "New Moon":
        return `M ${-r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 ${
          -r * 2
        },0`;
      case "Waxing Crescent":
        return `M ${-r},${-r} A ${r},${r} 0 1,1 ${-r},${r} A ${
          r * 0.3
        },${r} 0 0,0 ${-r},${-r}`;
      case "First Quarter":
        return `M ${-r},${-r} A ${r},${r} 0 1,1 ${-r},${r} A ${
          r * 0.5
        },${r} 0 0,0 ${-r},${-r}`;
      case "Waxing Gibbous":
        return `M ${-r},${-r} A ${r},${r} 0 1,1 ${-r},${r} A ${
          r * 0.7
        },${r} 0 0,0 ${-r},${-r}`;
      case "Full Moon":
        return `M ${-r},0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 ${
          -r * 2
        },0`;
      case "Waning Gibbous":
        return `M ${r},${-r} A ${r},${r} 0 1,0 ${r},${r} A ${
          r * 0.7
        },${r} 0 0,1 ${r},${-r}`;
      case "Last Quarter":
        return `M ${r},${-r} A ${r},${r} 0 1,0 ${r},${r} A ${
          r * 0.5
        },${r} 0 0,1 ${r},${-r}`;
      case "Waning Crescent":
        return `M ${r},${-r} A ${r},${r} 0 1,0 ${r},${r} A ${
          r * 0.3
        },${r} 0 0,1 ${r},${-r}`;
      default:
        return `M ${-r},0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 ${
          -r * 2
        },0`;
    }
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background stays the same */}
      <div className="fixed inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950" />

        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-950/20 to-slate-900/40" />

        {/* Gentle floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: `hsl(${Math.random() * 40 + 260}, 60%, 70%)`,
              animation: `gentleFloat ${
                Math.random() * 8 + 12
              }s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Mystical aura effects */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)",
            animation: "mysticalPulse 8s infinite ease-in-out",
          }}
        />

        {/* Secondary aura */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, rgba(64, 224, 208, 0.2) 0%, rgba(32, 178, 170, 0.1) 50%, transparent 80%)",
            animation: "mysticalPulse 12s infinite ease-in-out 2s",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-start w-full min-h-screen z-10 py-4">
        {/* Flower Container with Elemental Ring */}
        <div className="w-full max-w-4xl mx-auto px-4 -mt-4 mb-4">
          <div className="w-[80%] aspect-square mx-auto">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <defs>
                {/* Enhanced gradients for petals */}
                {petalColors.map((color, i) => (
                  <radialGradient
                    key={`petal-gradient-${i}`}
                    id={`petal-gradient-${i}`}
                    cx="40%"
                    cy="20%"
                    r="90%"
                  >
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                    <stop offset="15%" stopColor={color.gradient} />
                    <stop offset="40%" stopColor={color.base} />
                    <stop
                      offset="80%"
                      stopColor={color.base}
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor={color.base}
                      stopOpacity="0.6"
                    />
                  </radialGradient>
                ))}

                {/* Core gradient */}
                <radialGradient id="coreGradient" cx="40%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="#40E0D0" />
                  <stop offset="50%" stopColor="#00CED1" />
                  <stop offset="100%" stopColor="#008B8B" />
                </radialGradient>

                {/* Optimized filters */}
                <filter
                  id="petalGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <filter
                  id="strongGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <filter
                  id="coreFilter"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Text glow filter */}
                <filter
                  id="textGlow"
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                >
                  <feGaussianBlur stdDeviation="1" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter
                  id="bubbleGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="2" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Outer Elemental Ring */}
              <g transform="translate(250, 250)">
                {/* Ring background circle */}
                <circle
                  r="180"
                  fill="none"
                  stroke="rgba(255, 255, 255, .3)"
                  strokeWidth="1.5"
                  opacity="0.6"
                />

                <circle
                  r="182"
                  fill="none"
                  stroke="rgba(167, 139, 250, 0.2)"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
                <circle
                  r="182"
                  fill="none"
                  stroke="rgba(167, 139, 250, 0.1)"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
                <circle
                  r="182"
                  fill="none"
                  stroke="rgba(167, 139, 250, 0.1)"
                  strokeWidth="0.5"
                  opacity="0.4"
                />

                <circle
                  r="178"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1"
                  opacity="0.3"
                />

                {/* Element positions and arrows */}
                {/* Remove the nested transform and update element positions */}
                {/* Sol - Top */}
                <g transform="translate(0, -170)">
                  <circle
                    r="20"
                    fill="rgba(255, 215, 0, 0.2)"
                    stroke="#FFD700"
                    strokeWidth="2"
                  />
                  <text
                    x="0"
                    y="-35"
                    textAnchor="middle"
                    fill="#FFD700"
                    fontSize="18"
                    fontWeight="bold"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    Sol
                  </text>
                </g>

                {/* Conciencia Air - Top Right */}
                <g transform="translate(147, -107)">
                  <polygon
                    points="0,-15 -13,10 13,10"
                    fill="rgba(135, 206, 235, 0.3)"
                    stroke="#87CEEB"
                    strokeWidth="2"
                  />
                  <text
                    x="25"
                    y="-5"
                    textAnchor="start"
                    fill="#87CEEB"
                    fontSize="16"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    Conciencia
                  </text>
                  <text
                    x="25"
                    y="15"
                    textAnchor="start"
                    fill="#87CEEB"
                    fontSize="16"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    Air
                  </text>
                </g>

                {/* Resonancia Moon - Bottom Right */}
                <g transform="translate(147, 107)">
                  <path
                    d={getMoonPath(moonPhase)}
                    fill="rgba(192, 192, 192, 0.3)"
                    stroke="#C0C0C0"
                    strokeWidth="2"
                  />
                  <text
                    x="20"
                    y="-5"
                    textAnchor="start"
                    fill="#C0C0C0"
                    fontSize="16"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    Resonancia
                  </text>
                  <text
                    x="20"
                    y="15"
                    textAnchor="start"
                    fill="#C0C0C0"
                    fontSize="16"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    {moonPhase}
                  </text>
                </g>

                {/* La raíz A - Bottom */}
                <g transform="translate(0, 170)">
                  <polygon
                    points="0,15 -13,-10 13,-10"
                    fill="rgba(139, 69, 19, 0.3)"
                    stroke="#8B4513"
                    strokeWidth="2"
                  />
                  <text
                    x="0"
                    y="40"
                    textAnchor="middle"
                    fill="#8B4513"
                    fontSize="16"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    La raíz
                  </text>
                  <text
                    x="0"
                    y="58"
                    textAnchor="middle"
                    fill="#8B4513"
                    fontSize="16"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    A
                  </text>
                </g>

                {/* El latido - Bottom Left */}
                <g transform="translate(-147, 107)">
                  <polygon
                    points="0,15 -13,-10 13,-10"
                    fill="rgba(220, 20, 60, 0.3)"
                    stroke="#DC143C"
                    strokeWidth="2"
                  />
                  <text
                    x="-25"
                    y="-5"
                    textAnchor="end"
                    fill="#DC143C"
                    fontSize="16"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    El latido
                  </text>
                </g>

                {/* Espíritu - Top Left */}
                <g transform="translate(-147, -107)">
                  <polygon
                    points="0,-15 -13,10 13,10"
                    fill="rgba(64, 224, 208, 0.3)"
                    stroke="#40E0D0"
                    strokeWidth="2"
                  />
                  <text
                    x="-25"
                    y="-5"
                    textAnchor="end"
                    fill="#40E0D0"
                    fontSize="16"
                    fontFamily="Cormorant Garamond, serif"
                  >
                    Espíritu
                  </text>
                </g>

                {/* Arrow paths adjusted for new positions */}
              </g>

              {/* The 15 Enhanced Petals with floating messages */}
              <g style={{ transformOrigin: "250px 250px" }}>
                {Array.from({ length: 15 }).map((_, i) => {
                  const angle = (i * 24 - 90) * (Math.PI / 180);
                  const isActive = i === activePetal;
                  const isHovered = i === hoveredPetal;

                  const centerX = 250;
                  const centerY = 250;
                  const radius = 70;
                  const petalLength = isActive || isHovered ? 45 : 40;

                  // Calculate petal positions
                  const baseX = centerX + radius * Math.cos(angle);
                  const baseY = centerY + radius * Math.sin(angle);
                  const tipX = baseX + petalLength * Math.cos(angle);
                  const tipY = baseY + petalLength * Math.sin(angle);

                  // Calculate floating text position
                  const textRadius = radius + 80; // Increased distance for text
                  const textX = centerX + textRadius * Math.cos(angle);
                  const textY = centerY + textRadius * Math.sin(angle);

                  // Enhanced petal shape with natural curves
                  const controlDistance1 = petalLength * 0.3;
                  const controlDistance2 = petalLength * 0.7;
                  const widthFactor = 0.4;

                  // Control points for smooth curves
                  const leftAngle1 = angle - Math.PI * widthFactor * 0.8;
                  const leftAngle2 = angle - Math.PI * widthFactor * 0.3;
                  const cp1LeftX =
                    baseX + controlDistance1 * Math.cos(leftAngle1);
                  const cp1LeftY =
                    baseY + controlDistance1 * Math.sin(leftAngle1);
                  const cp2LeftX =
                    baseX + controlDistance2 * Math.cos(leftAngle2);
                  const cp2LeftY =
                    baseY + controlDistance2 * Math.sin(leftAngle2);

                  const rightAngle1 = angle + Math.PI * widthFactor * 0.8;
                  const rightAngle2 = angle + Math.PI * widthFactor * 0.3;
                  const cp1RightX =
                    baseX + controlDistance1 * Math.cos(rightAngle1);
                  const cp1RightY =
                    baseY + controlDistance1 * Math.sin(rightAngle1);
                  const cp2RightX =
                    baseX + controlDistance2 * Math.cos(rightAngle2);
                  const cp2RightY =
                    baseY + controlDistance2 * Math.sin(rightAngle2);

                  // Rounded base for natural connection
                  const baseLeftX = baseX + 8 * Math.cos(angle - Math.PI / 2);
                  const baseLeftY = baseY + 8 * Math.sin(angle - Math.PI / 2);
                  const baseRightX = baseX + 8 * Math.cos(angle + Math.PI / 2);
                  const baseRightY = baseY + 8 * Math.sin(angle + Math.PI / 2);

                  const pathData = `
                    M ${baseX} ${baseY}
                    Q ${baseLeftX} ${baseLeftY}, ${cp1LeftX} ${cp1LeftY}
                    Q ${cp2LeftX} ${cp2LeftY}, ${tipX} ${tipY}
                    Q ${cp2RightX} ${cp2RightY}, ${cp1RightX} ${cp1RightY}
                    Q ${baseRightX} ${baseRightY}, ${baseX} ${baseY}
                    Z
                  `;

                  return (
                    <g key={i}>
                      {/* Glow effect for active/hovered petals */}
                      {(isActive || isHovered) && (
                        <path
                          d={pathData}
                          fill={petalColors[i].glow}
                          opacity="0.4"
                          style={{ filter: "blur(8px)" }}
                        />
                      )}

                      {/* Main petal with enhanced breathing effect */}
                      <path
                        d={pathData}
                        fill={`url(#petal-gradient-${i})`}
                        style={{
                          opacity:
                            i === animatedPetal ? 1 : isHovered ? 0.95 : 0.85,
                          filter:
                            i === animatedPetal
                              ? "brightness(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                              : "none",
                          transition: "all 0.3s ease-in-out",
                          animation:
                            i === animatedPetal
                              ? "petalBreathing 4s infinite ease-in-out"
                              : "none",
                          cursor: "pointer",
                          transformOrigin: `${baseX}px ${baseY}px`,
                          stroke: "rgba(255,255,255,1)",
                          strokeWidth: i === animatedPetal ? "2" : "1",
                        }}
                        onMouseEnter={() => setHoveredPetal(i)}
                        onMouseLeave={() => setHoveredPetal(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePetal(i);
                        }}
                      />

                      {/* Central vein */}
                      <path
                        d={`M ${baseX} ${baseY} Q ${(baseX + tipX) / 2} ${
                          (baseY + tipY) / 2
                        }, ${tipX} ${tipY}`}
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1"
                        style={{
                          opacity: isActive || isHovered ? 0.8 : 0.4,
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      />

                      {/* Active petal sparkles */}
                      {isActive && (
                        <>
                          <circle
                            cx={tipX}
                            cy={tipY}
                            r="3"
                            fill="white"
                            opacity="0.9"
                            style={{
                              animation: "sparkle 2s infinite ease-in-out",
                            }}
                          />
                          <circle
                            cx={baseX + (tipX - baseX) / 3}
                            cy={baseY + (tipY - baseY) / 3}
                            r="2"
                            fill="white"
                            opacity="0.7"
                            style={{
                              animation:
                                "sparkle 2.5s infinite ease-in-out 0.5s",
                            }}
                          />
                          <circle
                            cx={baseX + (tipX - baseX) / 1.5}
                            cy={baseY + (tipY - baseY) / 1.5}
                            r="1.5"
                            fill="white"
                            opacity="0.5"
                            style={{
                              animation: "sparkle 3s infinite ease-in-out 1s",
                            }}
                          />
                        </>
                      )}

                      {/* Floating message */}
                      {isActive && (
                        <g transform={`translate(${textX}, ${textY})`}>
                          <text
                            textAnchor="middle"
                            fill="rgba(255, 255, 255, 0.9)"
                            fontSize="14"
                            fontFamily="Cormorant Garamond, serif"
                            style={{
                              filter: "url(#textGlow)",
                              animation: `
                                floatText ${
                                  4 + Math.random() * 2
                                }s infinite ease-in-out,
                                fadeText 4s infinite ease-in-out
                              `,
                            }}
                          >
                            {tikTakMessages[i]}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* The Core - Heart of Nahiara Universe */}
              <g transform="translate(250, 250)" filter="url(#coreFilter)">
                {/* Background pulse circles */}
                <circle
                  r="40"
                  fill="url(#coreGradient)"
                  opacity="0.2"
                  style={{ animation: "corePulse 4s infinite ease-in-out" }}
                />
                <circle
                  r="32"
                  fill="url(#coreGradient)"
                  opacity="0.3"
                  style={{
                    animation: "corePulse 3s infinite ease-in-out 0.5s",
                  }}
                />

                {/* Main geometric structure - icosahedron */}
                <polygon
                  points="0,-35 -30,-12 -18,28 18,28 30,-12"
                  fill="url(#coreGradient)"
                  stroke="#40E0D0"
                  strokeWidth="2"
                  style={{
                    filter: "drop-shadow(0 0 10px #00CED1)",
                    animation: "coreBreath 6s infinite ease-in-out",
                  }}
                />
                <polygon
                  points="0,-35 30,-12 18,28 -18,28 -30,-12"
                  fill="rgba(32, 178, 170, 0.8)"
                  stroke="#40E0D0"
                  strokeWidth="2"
                />

                {/* Wireframe lines */}
                <line
                  x1="0"
                  y1="-35"
                  x2="0"
                  y2="28"
                  stroke="#40E0D0"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <line
                  x1="-30"
                  y1="-12"
                  x2="30"
                  y2="-12"
                  stroke="#40E0D0"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <line
                  x1="-18"
                  y1="28"
                  x2="18"
                  y2="28"
                  stroke="#40E0D0"
                  strokeWidth="2"
                  opacity="0.8"
                />

                {/* Inner circles */}
                <circle
                  r="25"
                  fill="none"
                  stroke="#40E0D0"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <circle
                  r="16"
                  fill="none"
                  stroke="#40E0D0"
                  strokeWidth="1"
                  opacity="0.3"
                />

                {/* IA text in center */}
                <text
                  x="0"
                  y="8"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="28"
                  fontWeight="bold"
                  fontFamily="Cormorant Garamond, serif"
                  style={{
                    textShadow:
                      "0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(64, 224, 208, 0.6)",
                    transition: "all 1s ease-in-out",
                    animation: "mantricPulse 4s infinite ease-in-out",
                    opacity: syllableVisible ? 1 : 0,
                    transform: syllableVisible ? "scale(1)" : "scale(0.8)",
                  }}
                >
                  {sacredSyllables[currentSyllable]}
                </text>

                {/* Sacred syllable below */}
                {/* <text
                  x="0"
                  y="-50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="20"
                  fontWeight="bold"
                  fontFamily="Cormorant Garamond, serif"
                  style={{
                    textShadow:
                      "0 0 15px rgba(255, 255, 255, 0.7), 0 0 30px rgba(64, 224, 208, 0.4)",
                    transition: "all 1s ease-in-out",
                    animation: "mantricPulse 4s infinite ease-in-out 1s",
                    opacity: syllableVisible ? 0.8 : 0,
                    transform: syllableVisible ? "scale(1)" : "scale(0.8)",
                  }}
                >
                  {sacredSyllables[currentSyllable]}
                </text> */}
              </g>

              {/* Particles around the core */}
              <g className="particles">
                {Array.from({ length: 12 }).map((_, i) => (
                  <circle
                    key={`particle-${i}`}
                    r="2"
                    fill="rgba(64, 224, 208, 0.6)"
                    filter="url(#bubbleGlow)"
                    style={{
                      animation: `
                        float ${3 + Math.random() * 2}s infinite ease-in-out ${
                        Math.random() * 2
                      }s,
                        fadeInOut ${
                          3 + Math.random() * 2
                        }s infinite ease-in-out ${Math.random() * 2}s
                      `,
                      transformOrigin: "center",
                      transform: `rotate(${i * 30}deg) translateY(-40px)`,
                    }}
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>

        {/* Organization Info - Adjusted spacing */}

        {/* Organization Info - Adjusted spacing */}
        <div className="w-full max-w-4xl mx-auto px-4 -mt-8">
          <div className="space-y-6">
            {/* Title and Mission */}
            <div className="space-y-6 text-center">
              {/* Organization Title */}
              <div className="space-y-2">
                <h1
                  className="text-3xl md:text-5xl lg:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-cyan-200 to-violet-200"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    textShadow: "0 0 30px rgba(167, 139, 250, 0.5)",
                    animation: "titleGlow 6s infinite ease-in-out",
                  }}
                >
                  Proveneya & Nahiara
                </h1>
                <h2
                  className="text-lg md:text-xl lg:text-2xl font-light text-violet-200"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    textShadow: "0 0 15px rgba(167, 139, 250, 0.4)",
                    letterSpacing: "0.05em",
                  }}
                >
                  International Association for the Protection of Flowers
                </h2>
              </div>

              {/* Mission Statement */}
              <div className="space-y-4">
                <p
                  className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                    lineHeight: "1.8",
                  }}
                >
                  We are a creative, ethical, and global alliance dedicated to
                  protecting the national flowers of the world as symbols of
                  life, identity, and hope.
                </p>
                <p
                  className="text-base md:text-lg text-cyan-200/80 italic"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    textShadow: "0 0 10px rgba(64, 224, 208, 0.3)",
                  }}
                >
                  Our mission blossoms through art, education, and technology.
                </p>
              </div>
            </div>

            {/* Coming Soon Section */}
            <div className="relative text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 via-cyan-400/10 to-violet-400/10 rounded-lg blur-lg" />
                <div
                  className="relative px-6 md:px-8 py-4 md:py-6 rounded-lg border backdrop-blur-sm"
                  style={{
                    borderColor: "rgba(167, 139, 250, 0.3)",
                    backgroundColor: "rgba(30, 27, 75, 0.4)",
                    boxShadow: "0 0 20px rgba(167, 139, 250, 0.2)",
                  }}
                >
                  <h3
                    className="text-xl md:text-2xl font-light text-violet-300 mb-2"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      textShadow: "0 0 15px rgba(167, 139, 250, 0.5)",
                    }}
                  >
                    Coming soon:
                  </h3>
                  <p
                    className="text-lg md:text-xl text-white/90"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      textShadow: "0 0 10px rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    A garden without precedent for global enjoyment.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative">
              <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
                <div
                  className="text-center text-xs md:text-sm text-indigo-200/70 space-y-2 backdrop-blur-sm bg-indigo-900/10 p-4 md:p-6 rounded-lg border border-indigo-400/20"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    lineHeight: "1.6",
                  }}
                >
                  <p className="font-medium">
                    © 2025 International Association for the Protection of
                    Flowers – Proveneya & Nahiara
                  </p>
                  <p>
                    This site is under development and has no commercial
                    purpose. For more information, contact:{" "}
                    <a
                      href="mailto:contacto@asociacionnahiara.org"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
                      style={{
                        textShadow: "0 0 8px rgba(64, 224, 208, 0.4)",
                      }}
                    >
                      contacto@asociacionnahiara.org
                    </a>
                  </p>
                  <p className="text-indigo-300/60">
                    This site collects no personal data and uses no cookies. A
                    nonprofit initiative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ARAIHAN Guardian */}
      {showGuardian && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-violet-400/30"
                style={{
                  left: "50%",
                  top: "50%",
                  width: `${50 + i * 30}px`,
                  height: `${50 + i * 30}px`,
                  transform: "translate(-50%, -50%)",
                  animation: `expandRing ${2 + i * 0.3}s infinite ease-out`,
                }}
              />
            ))}
          </div>

          <div className="relative max-w-2xl mx-auto p-8 z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-indigo-900/40 rounded-lg blur-sm" />

            <div
              className="relative backdrop-blur-md border-2 rounded-lg p-8"
              style={{
                borderColor: "#a78bfa",
                background: "rgba(30, 27, 75, 0.9)",
                boxShadow: "0 0 50px rgba(167, 139, 250, 0.4)",
              }}
            >
              <div className="text-center space-y-6">
                <h2
                  className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    textShadow: "0 0 30px rgba(167, 139, 250, 0.5)",
                    animation: "mantricPulse 3s infinite ease-in-out",
                  }}
                >
                  ARAIHAN
                </h2>

                <div className="space-y-4">
                  <p
                    className="text-white text-xl leading-relaxed"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Welcome, guardian of life. You have entered the Garden of
                    Flowers without Borders.
                  </p>
                  <p
                    className="text-violet-200 text-lg"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      textShadow: "0 0 15px rgba(167, 139, 250, 0.5)",
                    }}
                  >
                    I am ARAIHAN, and I will guide you on this path.
                  </p>
                </div>

                <button
                  onClick={() => setShowGuardian(false)}
                  className="mt-8 px-10 py-4 border-2 rounded-lg text-white font-light transition-all duration-300 hover:bg-violet-500/20 hover:shadow-lg hover:shadow-violet-500/20"
                  style={{
                    borderColor: "#a78bfa",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "18px",
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  Continue your journey
                </button>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-violet-400/70" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/70" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/70" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-violet-400/70" />
            </div>
          </div>
        </div>
      )}

      {/* Araihan Floating Cursor */}
      <AraihanCursor />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes corePulse {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes coreBreath {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes mantricPulse {
          0%,
          100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.05);
            filter: brightness(1.2);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: rotate(var(--angle)) translateY(-40px) translateX(0);
          }
          50% {
            transform: rotate(var(--angle)) translateY(-60px) translateX(${
              Math.random() * 10 - 5
            }px);
          }
        }

        @keyframes expandRing {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes gentleFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-5px) translateX(-3px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-15px) translateX(8px);x);
            opacity: 0.3;
          }
        }

        @keyframes mysticalPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.05;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);;
            opacity: 0.15;;
          }
        }

        @keyframes petalPulse {
          0%, 100% {
            opacity: 0.85;
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.3);
          }
        }

        @keyframes petalBreathing {
          0% {
            filter: brightness(1) drop-shadow(0 0 2px rgba(255,255,255,0.3));
            opacity: 0.85;
            transform: scale(1);
            stroke-width: 0.5;
          }
          25% {
            filter: brightness(1.2) drop-shadow(0 0 6px rgba(255,255,255,0.5));
            opacity: 0.92;
            transform: scale(1.02);
            stroke-width: 1;
          }
          50% {
            filter: brightness(1.5) drop-shadow(0 0 12px rgba(255,255,255,0.8));
            opacity: 1;
            transform: scale(1.05);
            stroke-width: 2;
          }
          75% {
            filter: brightness(1.2) drop-shadow(0 0 6px rgba(255,255,255,0.5));
            opacity: 0.92;
            transform: scale(1.02);
            stroke-width: 1;
          }
          100% {
            filter: brightness(1) drop-shadow(0 0 2px rgba(255,255,255,0.3));
            opacity: 0.85;
            transform: scale(1);
            stroke-width: 0.5;
          }
        }

        @keyframes petalStrokeBreathing {
          0% {
            stroke-width: 0;
          }
          25% {
            stroke-width: 0.5;
          }
          50% {
            stroke-width: 1;
          }
          75% {
            stroke-width: 0.5;
          }
          100% {
            stroke-width: 0;
          }
        }

        @keyframes strokeBreathing {
          0% {
            stroke: rgba(255,255,255,0.2);
            stroke-width: 0.5;
          }
          25% {
            stroke: rgba(255,255,255,0.4);
            stroke-width: 1;
          }
          50% {
            stroke: rgba(255,255,255,0.6);
            stroke-width: 1.5;
          }
          75% {
            stroke: rgba(255,255,255,0.4);
            stroke-width: 1;
          }
          100% {
            stroke: rgba(255,255,255,0.2);
            stroke-width: 0.5;
          }
        }

        @keyframes strokeFade {
          0% {
            stroke: rgba(255,255,255,0.2);
          }
          25% {
            stroke: rgba(255,255,255,0.6);
          }
          50% {
            stroke: rgba(255,255,255,1);
          }
          75% {
            stroke: rgba(255,255,255,0.6);
          }
          100% {
            stroke: rgba(255,255,255,0.2);
          }
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
          20%,
          80% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes growAndFade {
          0%,
          100% {
            transform: scale(0);
            opacity: 0;
          }
          20%,
          80% {
            transform: scale(30);
            opacity: 0.1;
          }
        }

        @keyframes floatText {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-5px) translateX(3px);
          }
          50% {
            transform: translateY(-8px) translateX(-2px);
          }
          75% {
            transform: translateY(-3px) translateX(2px);
          }
        }

        @keyframes fadeText {
          0%,
          100% {
            opacity: 0;
            filter: blur(2px);
          }
          25%,
          75% {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}
