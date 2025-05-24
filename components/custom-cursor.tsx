"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }

      const handleMouseEnter = () => setVisible(true)
      const handleMouseLeave = () => setVisible(false)

      document.addEventListener("mousemove", updatePosition)
      document.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseleave", handleMouseLeave)

      // Hide the default cursor
      document.body.style.cursor = "none"

      return () => {
        document.removeEventListener("mousemove", updatePosition)
        document.removeEventListener("mouseenter", handleMouseEnter)
        document.removeEventListener("mouseleave", handleMouseLeave)
        document.body.style.cursor = "auto"
      }
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-screen"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Hummingbird cursor */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-float"
      >
        <path d="M12 8C12 8 10 9 8 9C6 9 4 8 4 8C4 8 6 13 8 13C10 13 12 8 12 8Z" fill="#a78bfa" opacity="0.8" />
        <path d="M12 8C12 8 14 9 16 9C18 9 20 8 20 8C20 8 18 13 16 13C14 13 12 8 12 8Z" fill="#a78bfa" opacity="0.8" />
        <circle cx="12" cy="8" r="2" fill="#c4b5fd" />
        <path d="M12 10L12 14" stroke="#c4b5fd" strokeWidth="0.5" strokeLinecap="round" />
        <circle cx="12" cy="8" r="6" stroke="#c4b5fd" strokeWidth="0.5" opacity="0.5" />
      </svg>

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full bg-violet-300 opacity-50 blur-md"
        style={{
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
    </div>
  )
}
