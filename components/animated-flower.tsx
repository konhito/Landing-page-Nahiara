"use client"

import { useEffect, useState } from "react"

export function AnimatedFlower() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % 60)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Colors for watercolor effect
  const petalColors = [
    "rgba(244, 114, 182, 0.7)", // pink-400 with transparency
    "rgba(251, 113, 133, 0.7)", // rose-400 with transparency
    "rgba(248, 113, 113, 0.7)", // red-400 with transparency
    "rgba(249, 168, 212, 0.7)", // pink-300 with transparency
    "rgba(253, 164, 175, 0.7)", // rose-300 with transparency
  ]

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
        {/* Center of flower */}
        <circle cx="100" cy="100" r="15" fill="rgba(253, 230, 138, 0.9)" />

        {/* Petals */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i * 45 + tick * 2) * (Math.PI / 180)
          const wobble = Math.sin(tick * 0.1 + i) * 3

          // Calculate control points for bezier curve to create petal shape
          const x1 = 100 + 40 * Math.cos(angle)
          const y1 = 100 + 40 * Math.sin(angle)

          const x2 = 100 + 70 * Math.cos(angle) + wobble * Math.cos(angle + Math.PI / 2)
          const y2 = 100 + 70 * Math.sin(angle) + wobble * Math.sin(angle + Math.PI / 2)

          const cpx1 = 100 + 50 * Math.cos(angle) + 20 * Math.cos(angle + Math.PI / 2)
          const cpy1 = 100 + 50 * Math.sin(angle) + 20 * Math.sin(angle + Math.PI / 2)

          const cpx2 = 100 + 50 * Math.cos(angle) - 20 * Math.cos(angle + Math.PI / 2)
          const cpy2 = 100 + 50 * Math.sin(angle) - 20 * Math.sin(angle + Math.PI / 2)

          return (
            <path
              key={i}
              d={`
                M 100 100
                L ${x1} ${y1}
                Q ${cpx1} ${cpy1} ${x2} ${y2}
                Q ${cpx2} ${cpy2} ${x1} ${y1}
                Z
              `}
              fill={petalColors[i % petalColors.length]}
              style={{
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
                transformOrigin: "center",
                transform: `rotate(${wobble}deg)`,
              }}
            />
          )
        })}

        {/* Subtle watercolor texture overlay */}
        <filter id="watercolor" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
        </filter>

        <circle cx="100" cy="100" r="85" fill="none" filter="url(#watercolor)" />
      </svg>

      {/* Subtle pulsing glow effect */}
      <div
        className="absolute inset-0 rounded-full bg-pink-200 opacity-20 blur-xl"
        style={{
          animation: "pulse 4s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(0.9); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
