import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Asociación Nahiara - International Association for the Protection of Flowers",
  description:
    "We are a creative, ethical, and global alliance dedicated to protecting the national flowers of the world as symbols of life, identity, and hope.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-slate-900 text-white overflow-x-hidden">{children}</body>
    </html>
  )
}
