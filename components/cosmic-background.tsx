"use client"

import { useEffect, useRef } from "react"

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: { x: number; y: number; radius: number; color: string; alpha: number; speed: number }[] = []
    const galaxies: { x: number; y: number; radius: number; color: string; rotation: number }[] = []

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        color: `hsl(${Math.random() * 60 + 220}, 100%, 80%)`,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05,
      })
    }

    // Create galaxies
    for (let i = 0; i < 5; i++) {
      galaxies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        color: `${Math.random() * 60 + 220}, 70%, 50%`, // Store HSL values without the hsl() wrapper
        rotation: Math.random() * Math.PI * 2,
      })
    }

    // Draw watercolor background
    const drawWatercolorBackground = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#0f172a") // slate-900
      gradient.addColorStop(0.5, "#1e1b4b") // indigo-950
      gradient.addColorStop(1, "#0f172a") // slate-900

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw galaxies with watercolor effect
      galaxies.forEach((galaxy) => {
        const gradient = ctx.createRadialGradient(galaxy.x, galaxy.y, 0, galaxy.x, galaxy.y, galaxy.radius)

        // Use HSLA format with proper alpha values
        gradient.addColorStop(0, `hsla(${galaxy.color}, 0.25)`) // More transparent in center
        gradient.addColorStop(0.5, `hsla(${galaxy.color}, 0.12)`)
        gradient.addColorStop(1, "transparent")

        ctx.save()
        ctx.translate(galaxy.x, galaxy.y)
        ctx.rotate(galaxy.rotation)
        ctx.scale(1.5, 1)

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(0, 0, galaxy.radius, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        // Slowly rotate galaxies
        galaxy.rotation += 0.0002
      })
    }

    // Draw stars
    const drawStars = () => {
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.alpha
        ctx.fill()

        // Move stars slowly
        star.y += star.speed

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Twinkle effect
        star.alpha = Math.sin(Date.now() * 0.001 * star.speed * 5) * 0.3 + 0.7
      })

      ctx.globalAlpha = 1
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawWatercolorBackground()
      drawStars()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ filter: "url(#watercolor)" }} />
  )
}
