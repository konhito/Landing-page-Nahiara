import {
  Gamepad2,
  Flower2,
  Sparkles,
  Users,
  Trophy,
  Heart,
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

      {/* Game Features */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Flower2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">
                National Flowers
              </h3>
              <p className="text-white/70 leading-relaxed">
                Discover and collect cards featuring the national flowers of
                different countries, each with unique mystical properties.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">
                Multiplayer
              </h3>
              <p className="text-white/70 leading-relaxed">
                Play with friends and family in a cooperative game that
                celebrates flower conservation and cultural heritage.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-light text-white mb-4">
                Educational
              </h3>
              <p className="text-white/70 leading-relaxed">
                Learn about flower symbolism, conservation efforts, and cultural
                significance while having fun.
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
              Explore Sacred Book
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
