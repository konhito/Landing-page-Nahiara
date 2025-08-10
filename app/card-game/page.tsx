import {
  Gamepad2,
  Flower2,
  Sparkles,
  Users,
  Trophy,
  Heart,
  Leaf,
  Smartphone,
} from "lucide-react";

export default function CardGamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Gamepad2 className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-white mb-4">
              Flower{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Card Game
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              An illustrated card game celebrating the world's national flowers
              and their mystical properties
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Game{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Features
              </span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Discover the unique elements that make our card game an immersive
              experience for flower guardians of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Flower2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Educational Gameplay</h3>
              <p className="text-white/70">
                Learn about national flowers, their cultural significance, and
                conservation needs through strategic card play.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Multiplayer Experience</h3>
              <p className="text-white/70">
                Play with friends and family, building a community of flower
                guardians while having fun.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Conservation Focus</h3>
              <p className="text-white/70">
                Each game session contributes to real-world flower conservation
                efforts and awareness.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Beautiful Artwork</h3>
              <p className="text-white/70">
                Stunning illustrations of national flowers from around the world,
                created by talented artists.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-500/20 rounded-full flex items-center justify-center">
                <Gamepad2 className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Strategic Depth</h3>
              <p className="text-white/70">
                Multiple game modes and strategies to keep players engaged and
                challenged at all skill levels.
              </p>
            </div>

            {/* Feature 6 - Digital Card Game */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Digital Card Game</h3>
              <p className="text-white/70">
                Experience the magic of our card game in digital format, available
                on multiple platforms and devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-white text-center mb-12">
            Game{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Modes
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story Mode */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-light text-white mb-4 flex items-center">
                <Heart className="w-6 h-6 text-purple-400 mr-3" />
                Story Mode
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Embark on a mystical journey as a flower guardian, protecting
                endangered species and learning ancient wisdom.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Coming Soon
                </span>
                <span className="text-xs text-white/50">Single Player</span>
              </div>
            </div>

            {/* Battle Mode */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-light text-white mb-4 flex items-center">
                <Trophy className="w-6 h-6 text-cyan-400 mr-3" />
                Battle Mode
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Compete with other players in strategic card battles using the
                unique properties of different flowers.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Coming Soon
                </span>
                <span className="text-xs text-white/50">Multiplayer</span>
              </div>
            </div>

            {/* Collection Mode */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-light text-white mb-4 flex items-center">
                <Flower2 className="w-6 h-6 text-green-400 mr-3" />
                Collection Mode
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Build your digital herbarium by collecting and learning about
                flowers from around the world.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300 border border-green-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Coming Soon
                </span>
                <span className="text-xs text-white/50">Collection</span>
              </div>
            </div>

            {/* Cooperative Mode */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-light text-white mb-4 flex items-center">
                <Users className="w-6 h-6 text-orange-400 mr-3" />
                Cooperative Mode
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Work together with other players to protect endangered flowers
                and restore damaged ecosystems.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Coming Soon
                </span>
                <span className="text-xs text-white/50">Cooperative</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-light text-white mb-8">
            The Card Game is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Under Development
            </span>
          </h3>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Our team of game designers and flower experts are creating an
            immersive experience that combines education, conservation, and
            entertainment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-light"
            >
              Return to Portal
            </a>
            <a
              href="/book"
              className="px-8 py-3 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-light"
            >
              Explore Literary Saga
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
