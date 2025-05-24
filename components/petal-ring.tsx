"use client"

import { useState } from "react"

interface PetalRingProps {
  activePetal: number
  messages: string[]
  onPetalClick: (index: number) => void
}

export function PetalRing({ activePetal, messages, onPetalClick }: PetalRingProps) {
  const [hoveredPetal, setHoveredPetal] = useState<number | null>(null)

  // Enhanced color palette for 15 petals
  const petalColors = [
    "#FFD700",
    "#FFA500",
    "#FF6347",
    "#FF1493",
    "#8A2BE2",
    "#4169E1",
    "#00CED1",
    "#00FA9A",
    "#32CD32",
    "#ADFF2F",
    "#FFD700",
    "#FF8C00",
    "#DC143C",
    "#9932CC",
    "#1E90FF",
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="relative w-96 h-96">
        <svg width="384" height="384" viewBox="0 0 384 384" className="w-full h-full">
          <defs>
            {petalColors.map((color, i) => (
              <radialGradient key={`petal-gradient-${i}`} id={`petal-gradient-${i}`} cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="40%" stopColor={color} />
                <stop offset="100%" stopColor={color + "CC"} />
              </radialGradient>
            ))}

            <filter id="petal-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Auto-rotating container */}
          <g
            style={{
              transformOrigin: "center",
              animation: "rotate-ring 60s linear infinite",
            }}
          >
            {Array.from({ length: 15 }).map((_, i) => {
              const angle = i * 24 * (Math.PI / 180) // 360/15 = 24 degrees
              const isActive = i === activePetal
              const isHovered = i === hoveredPetal

              // Petal positioning
              const centerX = 192
              const centerY = 192
              const radius = 120
              const petalLength = 60

              const baseX = centerX + radius * Math.cos(angle)
              const baseY = centerY + radius * Math.sin(angle)
              const tipX = centerX + (radius + petalLength) * Math.cos(angle)
              const tipY = centerY + (radius + petalLength) * Math.sin(angle)

              // Petal shape control points
              const width = 20
              const leftX = centerX + radius * Math.cos(angle - (width * Math.PI) / 180)
              const leftY = centerY + radius * Math.sin(angle - (width * Math.PI) / 180)
              const rightX = centerX + radius * Math.cos(angle + (width * Math.PI) / 180)
              const rightY = centerY + radius * Math.sin(angle + (width * Math.PI) / 180)

              return (
                <g key={i}>
                  <path
                    d={`
                      M ${baseX} ${baseY}
                      Q ${leftX} ${leftY}, ${tipX} ${tipY}
                      Q ${rightX} ${rightY}, ${baseX} ${baseY}
                      Z
                    `}
                    fill={`url(#petal-gradient-${i})`}
                    stroke={isActive || isHovered ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)"}
                    strokeWidth={isActive || isHovered ? 2 : 1}
                    filter={isActive || isHovered ? "url(#petal-glow)" : undefined}
                    style={{
                      opacity: isActive ? 1 : isHovered ? 0.9 : 0.7,
                      transition: "all 0.3s ease-in-out",
                      cursor: "pointer",
                      transform: isActive || isHovered ? "scale(1.1)" : "scale(1)",
                      transformOrigin: `${baseX}px ${baseY}px`,
                    }}
                    onMouseEnter={() => setHoveredPetal(i)}
                    onMouseLeave={() => setHoveredPetal(null)}
                    onClick={(e) => {
                      e.stopPropagation()
                      onPetalClick(i)
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
                        opacity="0.8"
                        style={{ animation: "sparkle 2s infinite ease-in-out" }}
                      />
                      <circle
                        cx={tipX + Math.random() * 10 - 5}
                        cy={tipY + Math.random() * 10 - 5}
                        r="2"
                        fill="white"
                        opacity="0.6"
                        style={{ animation: "sparkle 3s infinite ease-in-out" }}
                      />
                    </>
                  )}
                </g>
              )
            })}
          </g>

          <style jsx>{`
            @keyframes rotate-ring {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            
            @keyframes sparkle {
              0%, 100% { opacity: 0.3; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
            }
          `}</style>
        </svg>
      </div>
    </div>
  )
}
