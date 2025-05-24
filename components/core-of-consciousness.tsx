"use client"

import { useEffect, useState } from "react"

const sacredSyllables = ["NAH", "IA", "RA"]

export function CoreOfConsciousness() {
  const [currentSyllable, setCurrentSyllable] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const syllableTimer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentSyllable((prev) => (prev + 1) % 3)
        setIsVisible(true)
      }, 1000) // 1 second fade transition
    }, 20000) // 20 seconds per syllable

    return () => clearInterval(syllableTimer)
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="relative">
        {/* Sacred Geometry Background */}
        <svg width="200" height="200" viewBox="0 0 200 200" className="absolute inset-0">
          <defs>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0, 255, 255, 0.8)" />
              <stop offset="30%" stopColor="rgba(0, 150, 200, 0.6)" />
              <stop offset="60%" stopColor="rgba(255, 215, 0, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 0, 150, 0.3)" />
            </radialGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dodecagon/Sacred Geometry */}
          <g transform="translate(100, 100)" filter="url(#glow)">
            {/* Outer dodecagon */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = i * 30 * (Math.PI / 180)
              const x1 = 60 * Math.cos(angle)
              const y1 = 60 * Math.sin(angle)
              const x2 = 60 * Math.cos(angle + Math.PI / 6)
              const y2 = 60 * Math.sin(angle + Math.PI / 6)

              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#coreGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                />
              )
            })}

            {/* Inner sacred geometry */}
            <circle r="50" fill="url(#coreGradient)" opacity="0.3" />
            <circle r="40" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
            <circle r="30" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
          </g>

          {/* Pulsating animation */}
          <style jsx>{`
            @keyframes pulse-core {
              0%, 100% { transform: scale(0.95); opacity: 0.8; }
              50% { transform: scale(1.05); opacity: 1; }
            }
            g {
              animation: pulse-core 4s infinite ease-in-out;
            }
          `}</style>
        </svg>

        {/* Sacred Syllable Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`text-4xl font-serif text-white font-bold transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{
              fontFamily: "Cormorant Garamond, serif",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)",
              letterSpacing: "0.2em",
            }}
          >
            {sacredSyllables[currentSyllable]}
          </div>
        </div>
      </div>
    </div>
  )
}
