"use client"

import { useEffect, useState, useRef, useCallback } from "react"

interface Position {
  x: number
  y: number
}

export function AraihanCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const [isAsleep, setIsAsleep] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showShyMessage, setShowShyMessage] = useState(false)
  const [isOverLink, setIsOverLink] = useState(false)
  const [trailParticles, setTrailParticles] = useState<Array<{ x: number; y: number; id: number; opacity: number }>>([])

  const animationRef = useRef<number>()
  const idleTimerRef = useRef<NodeJS.Timeout>()
  const sleepTimerRef = useRef<NodeJS.Timeout>()
  const clickTimerRef = useRef<NodeJS.Timeout>()
  const driftRef = useRef({ angle: 0, radius: 0 })
  const particleIdRef = useRef(0)

  // Handle click count logic separately
  useEffect(() => {
    if (clickCount >= 5) {
      setShowShyMessage(true)
      const timer = setTimeout(() => setShowShyMessage(false), 3000)
      setClickCount(0)
      return () => clearTimeout(timer)
    }
  }, [clickCount])

  // Memoized event handlers
  const updateTargetPosition = useCallback((e: MouseEvent) => {
    setTargetPosition({ x: e.clientX, y: e.clientY })
    setIsIdle(false)
    setIsAsleep(false)

    // Reset idle timer
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current)

    // Set new idle timer
    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true)
      // Set sleep timer after being idle
      sleepTimerRef.current = setTimeout(() => {
        setIsAsleep(true)
      }, 10000) // Sleep after 10 seconds of idle
    }, 3000) // Idle after 3 seconds
  }, [])

  const handleMouseEnter = useCallback(() => setIsVisible(true), [])
  const handleMouseLeave = useCallback(() => setIsVisible(false), [])

  const handleClick = useCallback(() => {
    setClickCount((prev) => prev + 1)

    if (clickTimerRef.current) clearTimeout(clickTimerRef.current)

    clickTimerRef.current = setTimeout(() => {
      setClickCount(0)
    }, 2000)
  }, [])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const isLink = target.tagName === "A" || target.closest("a") || target.style.cursor === "pointer"
    setIsOverLink(isLink)
  }, [])

  useEffect(() => {
    // Only enable on non-touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return

    document.addEventListener("mousemove", updateTargetPosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("click", handleClick)
    document.addEventListener("mouseover", handleMouseOver)

    // Hide default cursor
    document.body.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", updateTargetPosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("click", handleClick)
      document.removeEventListener("mouseover", handleMouseOver)
      document.body.style.cursor = "auto"

      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      if (sleepTimerRef.current) clearTimeout(sleepTimerRef.current)
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
    }
  }, [updateTargetPosition, handleMouseEnter, handleMouseLeave, handleClick, handleMouseOver])

  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      setPosition((current) => {
        let newX = current.x
        let newY = current.y

        if (isAsleep) {
          // Move to bottom corner when asleep
          const cornerX = window.innerWidth - 100
          const cornerY = window.innerHeight - 100
          newX += (cornerX - current.x) * 0.02
          newY += (cornerY - current.y) * 0.02
        } else if (isIdle) {
          // Gentle drift when idle
          driftRef.current.angle += 0.02
          driftRef.current.radius = Math.sin(driftRef.current.angle * 0.5) * 30

          const driftX = targetPosition.x + Math.cos(driftRef.current.angle) * driftRef.current.radius
          const driftY = targetPosition.y + Math.sin(driftRef.current.angle * 0.7) * driftRef.current.radius * 0.5

          newX += (driftX - current.x) * 0.05
          newY += (driftY - current.y) * 0.05
        } else {
          // Follow cursor with smooth easing
          newX += (targetPosition.x - current.x) * 0.15
          newY += (targetPosition.y - current.y) * 0.15
        }

        // Create trail particles when over links
        if (isOverLink && !isIdle && !isAsleep) {
          setTrailParticles((prev) => {
            const newParticles = [...prev]

            // Add new particle
            if (Math.random() > 0.7) {
              newParticles.push({
                x: current.x + (Math.random() - 0.5) * 20,
                y: current.y + (Math.random() - 0.5) * 20,
                id: particleIdRef.current++,
                opacity: 1,
              })
            }

            // Update and remove old particles
            return newParticles
              .map((particle) => ({
                ...particle,
                opacity: particle.opacity - 0.02,
                y: particle.y - 1,
              }))
              .filter((particle) => particle.opacity > 0)
              .slice(-20) // Keep only last 20 particles
          })
        }

        return { x: newX, y: newY }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [targetPosition, isIdle, isAsleep, isOverLink])

  if (!isVisible) return null

  return (
    <>
      {/* Trail particles */}
      {trailParticles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: particle.opacity,
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, rgba(139, 92, 246, 0.4) 100%)",
              boxShadow: "0 0 6px rgba(167, 139, 250, 0.6)",
            }}
          />
        </div>
      ))}

      {/* Main Araihan cursor - V3 Style Hummingbird */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: isAsleep ? "all 2s ease-in-out" : "none",
        }}
      >
        {/* Mystical aura around hummingbird */}
        <div
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            width: "60px",
            height: "60px",
            background:
              "radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, rgba(139, 92, 246, 0.1) 70%, transparent 100%)",
            filter: "blur(12px)",
            animation: isAsleep ? "none" : "mysticalAura 4s infinite ease-in-out",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
        />

        {/* V3 Hummingbird Design */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="relative z-10"
          style={{
            filter: "drop-shadow(0 0 10px rgba(167, 139, 250, 0.8))",
            animation: isAsleep
              ? "sleepFloat 4s infinite ease-in-out"
              : isIdle
                ? "idleDrift 8s infinite ease-in-out"
                : "activeHover 3s infinite ease-in-out",
          }}
        >
          <defs>
            {/* Wing gradients */}
            <radialGradient id="leftWingGradient" cx="30%" cy="40%" r="80%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="40%" stopColor="rgba(167, 139, 250, 0.8)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" />
            </radialGradient>

            <radialGradient id="rightWingGradient" cx="70%" cy="40%" r="80%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="40%" stopColor="rgba(167, 139, 250, 0.8)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" />
            </radialGradient>

            {/* Body gradient */}
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
              <stop offset="50%" stopColor="rgba(199, 210, 254, 0.9)" />
              <stop offset="100%" stopColor="rgba(167, 139, 250, 0.8)" />
            </linearGradient>

            {/* Watercolor effect */}
            <filter id="watercolorEffect" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
            </filter>
          </defs>

          {/* Left wing */}
          <path
            d="M 20 15 Q 8 12, 5 18 Q 8 22, 20 20 Z"
            fill="url(#leftWingGradient)"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="0.5"
            filter="url(#watercolorEffect)"
            style={{
              opacity: isAsleep ? 0.4 : 0.8,
              animation: isAsleep ? "none" : "wingFlutter 0.3s infinite ease-in-out",
              transformOrigin: "20px 17px",
            }}
          />

          {/* Right wing */}
          <path
            d="M 20 15 Q 32 12, 35 18 Q 32 22, 20 20 Z"
            fill="url(#rightWingGradient)"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="0.5"
            filter="url(#watercolorEffect)"
            style={{
              opacity: isAsleep ? 0.4 : 0.8,
              animation: isAsleep ? "none" : "wingFlutter 0.3s infinite ease-in-out 0.15s",
              transformOrigin: "20px 17px",
            }}
          />

          {/* Hummingbird body */}
          <ellipse
            cx="20"
            cy="20"
            rx="3"
            ry="8"
            fill="url(#bodyGradient)"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="0.5"
            style={{
              opacity: isAsleep ? 0.7 : 1,
              animation: isAsleep ? "sleepBreath 3s infinite ease-in-out" : "bodyPulse 2s infinite ease-in-out",
            }}
          />

          {/* Hummingbird beak */}
          <path
            d="M 20 12 L 20 8 Q 19.5 7.5, 20 8 Q 20.5 7.5, 20 8 Z"
            fill="rgba(255, 215, 0, 0.9)"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="0.3"
            style={{
              opacity: isAsleep ? 0.6 : 0.9,
            }}
          />

          {/* Eyes */}
          {isAsleep ? (
            <>
              {/* Sleeping eyes */}
              <path d="M 18 18 Q 19 17, 20 18" stroke="rgba(139, 92, 246, 0.8)" strokeWidth="1" fill="none" />
              <path d="M 20 18 Q 21 17, 22 18" stroke="rgba(139, 92, 246, 0.8)" strokeWidth="1" fill="none" />
            </>
          ) : (
            <>
              {/* Awake eyes */}
              <circle cx="18.5" cy="18" r="1" fill="rgba(139, 92, 246, 0.9)" />
              <circle cx="21.5" cy="18" r="1" fill="rgba(139, 92, 246, 0.9)" />
              <circle cx="18.5" cy="17.5" r="0.3" fill="white" />
              <circle cx="21.5" cy="17.5" r="0.3" fill="white" />
            </>
          )}

          {/* Tail feathers */}
          <path
            d="M 20 28 Q 18 32, 16 35 Q 20 33, 20 28 Q 22 32, 24 35 Q 20 33, 20 28"
            fill="url(#bodyGradient)"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="0.3"
            style={{
              opacity: isAsleep ? 0.5 : 0.7,
              animation: isAsleep ? "none" : "tailSway 4s infinite ease-in-out",
            }}
          />
        </svg>

        {/* Mystical sparkles around hummingbird */}
        {!isAsleep && (
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-70"
                style={{
                  width: "3px",
                  height: "3px",
                  background: "rgba(167, 139, 250, 0.9)",
                  left: `${15 + i * 8}px`,
                  top: `${10 + (i % 2) * 20}px`,
                  animation: `sparkleOrbit ${3 + i * 0.5}s infinite ease-in-out ${i * 0.3}s`,
                }}
              />
            ))}
          </>
        )}

        {/* Sleep indicator */}
        {isAsleep && (
          <div
            className="absolute -top-4 -right-4 text-sm opacity-80"
            style={{
              animation: "sleepBubble 3s infinite ease-in-out",
            }}
          >
            💤
          </div>
        )}
      </div>

      {/* Shy message */}
      {showShyMessage && (
        <div
          className="fixed z-40 pointer-events-none"
          style={{
            left: `${position.x + 50}px`,
            top: `${position.y - 50}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div
            className="bg-gradient-to-r from-violet-900/90 to-purple-900/90 backdrop-blur-sm border border-violet-400/50 rounded-lg px-4 py-3 text-white text-sm"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              animation: "messageAppear 3s ease-in-out",
            }}
          >
            Careful, flowers are shy here! 🌸
          </div>
        </div>
      )}

      {/* Global cursor styles */}
      <style jsx global>{`
        @keyframes mysticalAura {
          0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }
        
        @keyframes activeHover {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(1deg); }
          50% { transform: translateY(-1px) rotate(0deg); }
          75% { transform: translateY(-3px) rotate(-1deg); }
        }
        
        @keyframes idleDrift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(3deg); }
          50% { transform: translateY(-4px) rotate(0deg); }
          75% { transform: translateY(-12px) rotate(-2deg); }
        }
        
        @keyframes sleepFloat {
          0%, 100% { transform: translateY(0px) rotate(-10deg); }
          50% { transform: translateY(5px) rotate(-15deg); }
        }
        
        @keyframes wingFlutter {
          0%, 100% { transform: scaleY(1) rotate(0deg); }
          50% { transform: scaleY(0.7) rotate(5deg); }
        }
        
        @keyframes bodyPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes sleepBreath {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1); opacity: 0.9; }
        }
        
        @keyframes tailSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        
        @keyframes sparkleOrbit {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(0.8) translateY(0px) rotate(0deg); 
          }
          50% { 
            opacity: 0.9; 
            transform: scale(1.2) translateY(-3px) rotate(180deg); 
          }
        }
        
        @keyframes sleepBubble {
          0%, 100% { opacity: 0.6; transform: translateY(0px) scale(1); }
          50% { opacity: 1; transform: translateY(-8px) scale(1.1); }
        }
        
        @keyframes messageAppear {
          0% { opacity: 0; transform: translate(-50%, -100%) scale(0.8); }
          20% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
          80% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -100%) scale(0.8); }
        }
      `}</style>
    </>
  )
}
