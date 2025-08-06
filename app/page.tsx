import { MysticalFlowerPortal } from "@/components/mystical-flower-portal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900">
      {/* Hero Section with Mystical Flower Portal */}
      <section className="relative min-h-screen flex items-center justify-center">
        <MysticalFlowerPortal />
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-light text-white mb-8">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Global Garden
            </span>{" "}
            Community
          </h3>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Discover our sacred book, explore the card game, and connect with
            fellow flower guardians around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-light"
            >
              Explore Sacred Book
            </a>
            <a
              href="/card-game"
              className="px-8 py-3 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-light"
            >
              Play Card Game
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
