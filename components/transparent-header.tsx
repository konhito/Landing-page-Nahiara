"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Flower2, BookOpen, Gamepad2, Mail } from "lucide-react";

export function TransparentHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Flower2 },
    { href: "/book", label: "Book", icon: BookOpen },
    { href: "/card-game", label: "Card Game", icon: Gamepad2 },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Animated flower logo */}
              <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <radialGradient id="logoGradient" cx="50%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                      <stop offset="40%" stopColor="rgba(167, 139, 250, 0.8)" />
                      <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" />
                    </radialGradient>
                  </defs>

                  {/* Flower petals */}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const angle = i * (360 / 6) * (Math.PI / 180);
                    const innerRadius = 8;
                    const outerRadius = 18;

                    const baseX = 20 + innerRadius * Math.cos(angle);
                    const baseY = 20 + innerRadius * Math.sin(angle);
                    const tipX = 20 + outerRadius * Math.cos(angle);
                    const tipY = 20 + outerRadius * Math.sin(angle);

                    return (
                      <path
                        key={i}
                        d={`M ${baseX} ${baseY} Q ${tipX} ${tipY} ${tipX} ${tipY}`}
                        stroke="url(#logoGradient)"
                        strokeWidth="2"
                        fill="none"
                        className="group-hover:animate-pulse"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    );
                  })}

                  {/* Center */}
                  <circle cx="20" cy="20" r="4" fill="url(#logoGradient)" />
                </svg>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 w-8 h-8 lg:w-10 lg:h-10 bg-purple-500/20 rounded-full blur-sm group-hover:bg-purple-500/30 transition-all duration-300" />
            </div>

            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-light text-white group-hover:text-purple-200 transition-colors duration-300">
                Proveneya &
              </span>
              <span className="text-xs lg:text-sm text-purple-300/80 font-light tracking-wider">
                NAHIARA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-light tracking-wide">{item.label}</span>

                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/90 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-light">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Mystical border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </header>
  );
}
