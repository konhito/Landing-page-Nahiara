"use client"

import { useEffect, useState } from "react"

const cycleElements = [
  { symbol: "☀", label: "Sol", position: 0 },
  { symbol: "△", label: "Conciencia Air", position: 72 },
  { symbol: "☾", label: "Resonancia Moon", position: 144 },
  { symbol: "⬇", label: "La raíz A", position: 216 },
  { symbol: "♥", label: "El latido", position: 288 },
]

export function SymbolicCycle() {
  const [pulsePosition, setPulsePosition] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPulsePosition((prev) => (prev + 1) % 360)
    }, 100) // Smooth pulse movement

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center z-5">
      <div className="relative w-[500px] h-[500px]">
        <svg width="500" height="500" viewBox="0 0 500 500" className="w-full h-full">
          <defs>
            <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
          </defs>

          {/* Outer circular path */}
          <circle
            cx="250"
            cy="250"
            r="220"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          {/* Symbolic elements */}
          {cycleElements.map((element, i) => {
            const angle = (element.position * Math.PI) / 180
            const x = 250 + 220 * Math.cos(angle - Math.PI / 2)
            const y = 250 + 220 * Math.sin(angle - Math.PI / 2)

            return (
              <g key={i}>
                {/* Element background */}
                <circle
                  cx={x}
                  cy={y}
                  r="25"
                  fill="rgba(0, 0, 0, 0.5)"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                />

                {/* Symbol */}
                <text
                  x={x}
                  y={y - 5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="20"
                  style={{ fontFamily: "serif" }}
                >
                  {element.symbol}
                </text>

                {/* Label */}
                <text
                  x={x}
                  y={y + 45}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="rgba(255, 255, 255, 0.8)"
                  fontSize="12"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {element.label}
                </text>
              </g>
            )
          })}

          {/* Moving light pulse */}
          <circle
            cx={250 + 220 * Math.cos((pulsePosition * Math.PI) / 180 - Math.PI / 2)}
            cy={250 + 220 * Math.sin((pulsePosition * Math.PI) / 180 - Math.PI / 2)}
            r="8"
            fill="url(#pulseGradient)"
            style={{
              animation: "pulse-light 2s infinite ease-in-out",
            }}
          />

          <style jsx>{`
            @keyframes pulse-light {
              0%, 100% { opacity: 0.5; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
            }
          `}</style>
        </svg>
      </div>
    </div>
  )
}
