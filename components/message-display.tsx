"use client"

interface MessageDisplayProps {
  message: string
}

export function MessageDisplay({ message }: MessageDisplayProps) {
  return (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
      <div className="relative">
        {/* Glowing frame background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-indigo-500/20 to-purple-500/20 rounded-lg blur-md" />

        {/* Message container */}
        <div className="relative bg-gradient-to-r from-teal-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-white/20 rounded-lg px-8 py-4">
          <p
            className="text-white text-lg font-light text-center transition-all duration-1000"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              letterSpacing: "0.05em",
            }}
          >
            {message}
          </p>
        </div>

        {/* Decorative corners */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white/40" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white/40" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white/40" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white/40" />
      </div>
    </div>
  )
}
