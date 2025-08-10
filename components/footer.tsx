import Link from "next/link";
import { Flower2, Heart, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full mt-20 border-t border-white/10">
      {/* Mystical background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-purple-950/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                <Flower2 className="w-full h-full text-purple-400" />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm" />
              </div>
              <div>
                <h3 className="text-lg font-light text-white">
                  Provenella y Nahiara
                </h3>
                <p className="text-xs text-purple-300/80 tracking-wider">
                  Flower Protection Alliance
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              A creative, ethical, and global alliance dedicated to protecting
              the national flowers of the world as symbols of life, identity,
              and hope.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-light tracking-wide">Explore</h4>
            <div className="space-y-2">
              <Link
                href="/book"
                className="block text-sm text-white/70 hover:text-purple-300 transition-colors duration-300"
              >
                Sacred Book
              </Link>
              <Link
                href="/card-game"
                className="block text-sm text-white/70 hover:text-purple-300 transition-colors duration-300"
              >
                Card Game
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-white/70 hover:text-purple-300 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-light tracking-wide">Connect</h4>
            <div className="space-y-2">
              <p className="text-sm text-white/70">
                contacto@asociacionnahiara.org
              </p>
              <p className="text-xs text-white/50">Nonprofit initiative</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-white/60">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>No cookies • No tracking</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-3 h-3 text-red-400" />
                <span>© 2025 Proveneya & Nahiara</span>
              </div>
            </div>

            <p className="text-xs text-white/50 text-center md:text-right">
              This site is under development and has no commercial purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Mystical border effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
}
