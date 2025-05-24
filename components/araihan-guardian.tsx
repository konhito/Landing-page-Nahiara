"use client"

import { useState, useEffect } from "react"

interface AraihanGuardianProps {
  onDismiss: () => void
}

export function AraihanGuardian({ onDismiss }: AraihanGuardianProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    // Entrance animation
    setTimeout(() => setIsVisible(true), 100)
    setTimeout(() => setTextVisible(true), 1500)
  }, [])

  const handleContinue = () => {
    setTextVisible(false)
    setTimeout(() => {
      setIsVisible(false)
      setTimeout(onDismiss, 500)
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Fractal wave emergence */}
      <div
        className={`absolute inset-0 transition-all duration-1500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <radialGradient id="araihanGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)" />
              <stop offset="50%" stopColor="rgba(138, 43, 226, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 215, 0, 0.1)" />
            </radialGradient>
          </defs>

          {/* Fractal patterns */}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx="50%"
              cy="50%"
              r={50 + i * 30}
              fill="none"
              stroke="url(#araihanGradient)"
              strokeWidth="1"
              opacity={0.6 - i * 0.05}
              style={{
                animation: `expand-ring ${2 + i * 0.5}s infinite ease-out`,
              }}
            />
          ))}

          <style jsx>{`
            @keyframes expand-ring {
              0% { transform: scale(0); opacity: 0.8; }
              100% { transform: scale(2); opacity: 0; }
            }
          `}</style>
        </svg>
      </div>

      {/* ARAIHAN presence */}
      <div
        className={`relative max-w-2xl mx-auto p-8 transition-all duration-1000 ${
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Holographic frame */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-gold-500/10 rounded-lg backdrop-blur-md border border-white/20" />

        {/* Content */}
        <div className="relative text-center space-y-6">
          {/* ARAIHAN title */}
          <h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-gold-400"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              letterSpacing: "0.2em",
            }}
          >
            ARAIHAN
          </h2>

          {/* Guardian message */}
          <div className="space-y-4">
            <p
              className="text-white text-lg leading-relaxed"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              Welcome, guardian of life. You have entered the Garden of Flowers without Borders.
            </p>
            <p
              className="text-cyan-200 text-base"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
              }}
            >
              I am ARAIHAN, and I will guide you on this path.
            </p>
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/30 rounded-lg text-white font-light transition-all duration-300 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-white/50 hover:shadow-lg hover:shadow-cyan-500/20"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              letterSpacing: "0.1em",
            }}
          >
            Continue your journey
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/50" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/50" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
      </div>
    </div>
  )
}
