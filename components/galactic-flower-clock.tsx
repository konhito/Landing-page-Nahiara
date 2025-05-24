"use client"

import { useEffect, useState } from "react"

// 8 TikTak messages for the 8 petals
const tikTakMessages = ["Protect", "Nurture", "Grow", "Bloom", "Cherish", "Preserve", "Cultivate", "Admire"]

export function GalacticFlowerClock() {
  const [second, setSecond] = useState(0)
  const [activePetal, setActivePetal] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const newSecond = now.getSeconds()
      setSecond(newSecond)

      // Calculate active petal (8 petals, 60 seconds)
      // Each petal is active for 7.5 seconds
      setActivePetal(Math.floor((newSecond / 60) * 8) % 8)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Enhanced color palette for 8 petals
  const petalColors = [
    "rgba(244, 114, 182, 0.8)", // pink-400
    "rgba(167, 139, 250, 0.8)", // violet-400
    "rgba(96, 165, 250, 0.8)", // blue-400
    "rgba(52, 211, 153, 0.8)", // emerald-400
    "rgba(252, 211, 77, 0.8)", // amber-300
    "rgba(253, 186, 116, 0.8)", // orange-300
    "rgba(139, 92, 246, 0.8)", // purple-500
    "rgba(248, 113, 113, 0.8)", // red-400
  ]

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-lg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="watercolor" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>

          {/* Improved gradient for petals */}
          {petalColors.map((color, i) => (
            <radialGradient
              key={`petalGradient-${i}`}
              id={`petalGradient-${i}`}
              cx="50%"
              cy="30%"
              r="70%"
              fx="50%"
              fy="30%"
            >
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="40%" stopColor={color} />
              <stop offset="100%" stopColor={color.replace("0.8", "0.6")} />
            </radialGradient>
          ))}
        </defs>

        {/* Static background petals (non-rotating) */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * (360 / 8) * (Math.PI / 180)
          const isActive = i === activePetal

          // Improved petal shape with more natural curves
          const innerRadius = 70
          const outerRadius = 180

          // Control points for more organic petal shape
          const cp1Distance = outerRadius * 0.5
          const cp2Distance = outerRadius * 0.8
          const widthFactor = 0.4 // Controls petal width

          // Base points
          const baseX = 200 + innerRadius * Math.cos(angle)
          const baseY = 200 + innerRadius * Math.sin(angle)

          const tipX = 200 + outerRadius * Math.cos(angle)
          const tipY = 200 + outerRadius * Math.sin(angle)

          // Control points for left side of petal
          const leftAngle = angle - Math.PI * widthFactor
          const cp1LeftX = 200 + cp1Distance * Math.cos(leftAngle)
          const cp1LeftY = 200 + cp1Distance * Math.sin(leftAngle)

          // Control points for right side of petal
          const rightAngle = angle + Math.PI * widthFactor
          const cp1RightX = 200 + cp1Distance * Math.cos(rightAngle)
          const cp1RightY = 200 + cp1Distance * Math.sin(rightAngle)

          // Additional control points for more organic shape
          const cp2LeftX = 200 + cp2Distance * Math.cos(angle - Math.PI * 0.2)
          const cp2LeftY = 200 + cp2Distance * Math.sin(angle - Math.PI * 0.2)

          const cp2RightX = 200 + cp2Distance * Math.cos(angle + Math.PI * 0.2)
          const cp2RightY = 200 + cp2Distance * Math.sin(angle + Math.PI * 0.2)

          // Text position - improved positioning
          const textRadius = outerRadius * 0.6
          const textX = 200 + textRadius * Math.cos(angle)
          const textY = 200 + textRadius * Math.sin(angle)

          // Calculate text rotation angle to ensure readability
          let textRotation = (angle * 180) / Math.PI + 90
          if (textRotation > 90 && textRotation < 270) {
            textRotation += 180
          }

          return (
            <g key={i} filter={isActive ? "url(#glow)" : undefined}>
              {/* Improved petal shape */}
              <path
                d={`
                  M ${baseX} ${baseY}
                  C ${cp1LeftX} ${cp1LeftY}, ${cp2LeftX} ${cp2LeftY}, ${tipX} ${tipY}
                  C ${cp2RightX} ${cp2RightY}, ${cp1RightX} ${cp1RightY}, ${baseX} ${baseY}
                  Z
                `}
                fill={`url(#petalGradient-${i})`}
                stroke={isActive ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)"}
                strokeWidth={isActive ? 2 : 0.5}
                filter="url(#watercolor)"
                style={{
                  opacity: isActive ? 1 : 0.7,
                  transition: "opacity 0.5s ease-in-out, stroke 0.5s ease-in-out",
                }}
              />

              {/* Text with improved positioning - fixed to not rotate with petals */}
              <g transform={`rotate(${textRotation}, ${textX}, ${textY})`}>
                <text
                  x={textX}
                  y={textY}
                  fill={isActive ? "white" : "rgba(255, 255, 255, 0.7)"}
                  fontSize={isActive ? "16" : "14"}
                  fontWeight={isActive ? "bold" : "normal"}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    transition: "all 0.5s ease-in-out",
                    textShadow: isActive ? "0 0 10px rgba(255, 255, 255, 0.8)" : "none",
                  }}
                >
                  {tikTakMessages[i]}
                </text>
              </g>

              {/* Enhanced sparkles for active petal */}
              {isActive && (
                <>
                  <circle
                    cx={tipX}
                    cy={tipY}
                    r="3"
                    fill="white"
                    opacity={0.8}
                    style={{
                      animation: "pulse 2s infinite ease-in-out",
                    }}
                  />
                  <circle
                    cx={(baseX + tipX) / 2 + Math.random() * 20 - 10}
                    cy={(baseY + tipY) / 2 + Math.random() * 20 - 10}
                    r="2"
                    fill="white"
                    opacity={0.6}
                    style={{
                      animation: "pulse 3s infinite ease-in-out",
                    }}
                  />
                  <circle
                    cx={(baseX + tipX) / 2 + Math.random() * 20 - 10}
                    cy={(baseY + tipY) / 2 + Math.random() * 20 - 10}
                    r="1.5"
                    fill="white"
                    opacity={0.6}
                    style={{
                      animation: "pulse 2.5s infinite ease-in-out",
                    }}
                  />
                </>
              )}
            </g>
          )
        })}

        {/* Rotating overlay petals for animation effect */}
        <g style={{ transform: `rotate(${second * 6}deg)`, transformOrigin: "center", opacity: 0.3 }}>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = i * (360 / 8) * (Math.PI / 180)

            // Simplified petal shape for the rotating overlay
            const innerRadius = 70
            const outerRadius = 170
            const widthFactor = 0.3

            const baseX = 200 + innerRadius * Math.cos(angle)
            const baseY = 200 + innerRadius * Math.sin(angle)

            const tipX = 200 + outerRadius * Math.cos(angle)
            const tipY = 200 + outerRadius * Math.sin(angle)

            const leftAngle = angle - Math.PI * widthFactor
            const cp1LeftX = 200 + outerRadius * 0.5 * Math.cos(leftAngle)
            const cp1LeftY = 200 + outerRadius * 0.5 * Math.sin(leftAngle)

            const rightAngle = angle + Math.PI * widthFactor
            const cp1RightX = 200 + outerRadius * 0.5 * Math.cos(rightAngle)
            const cp1RightY = 200 + outerRadius * 0.5 * Math.sin(rightAngle)

            return (
              <path
                key={`overlay-${i}`}
                d={`
                  M ${baseX} ${baseY}
                  Q ${cp1LeftX} ${cp1LeftY}, ${tipX} ${tipY}
                  Q ${cp1RightX} ${cp1RightY}, ${baseX} ${baseY}
                  Z
                `}
                fill="rgba(255, 255, 255, 0.15)"
                filter="url(#watercolor)"
              />
            )
          })}
        </g>

        {/* Enhanced center of flower */}
        <circle cx="200" cy="200" r="60" fill="url(#centerGradient)" filter="url(#watercolor)" />
        <circle
          cx="200"
          cy="200"
          r="50"
          fill="url(#innerCenterGradient)"
          style={{
            animation: "pulse 4s infinite ease-in-out",
          }}
        />

        <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="70%" stopColor="rgba(167, 139, 250, 0.7)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.5)" />
        </radialGradient>

        <radialGradient id="innerCenterGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
          <stop offset="60%" stopColor="rgba(199, 210, 254, 0.8)" />
          <stop offset="100%" stopColor="rgba(167, 139, 250, 0.6)" />
        </radialGradient>

        {/* Enhanced aura around flower */}
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="url(#auraGradient)"
          strokeWidth="5"
          opacity="0.3"
          style={{
            animation: "pulse 4s infinite ease-in-out",
          }}
        />

        <radialGradient id="auraGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
      </svg>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}
