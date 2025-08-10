import { BookOpen, Flower2, Sparkles } from "lucide-react";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-white mb-4">
              Literary{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Saga
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ancient wisdom and mystical knowledge about the world's national
              flowers
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-4 flex items-center">
                  <Flower2 className="w-6 h-6 text-purple-400 mr-3" />
                  Volume 1: The Awakening
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Discover the ancient wisdom of flower guardians and the sacred
                  connection between humanity and the botanical world.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-4 flex items-center">
                  <Flower2 className="w-6 h-6 text-cyan-400 mr-3" />
                  Volume 2: The Garden of Nations
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Explore the national flowers of different countries and their
                  cultural significance throughout history.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-4 flex items-center">
                  <Flower2 className="w-6 h-6 text-green-400 mr-3" />
                  Volume 3: Conservation Rituals
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Learn about traditional and modern methods of flower
                  conservation and protection practices.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300 border border-green-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-4 flex items-center">
                  <Flower2 className="w-6 h-6 text-orange-400 mr-3" />
                  Volume 4: The Future Garden
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Vision for a sustainable future where national flowers thrive
                  and cultural heritage is preserved.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-4 flex items-center">
                  <Flower2 className="w-6 h-6 text-pink-400 mr-3" />
                  Volume 5: Sacred Geometry
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Explore the mathematical patterns and sacred geometry that
                  underlie the natural world of flowers.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-4 flex items-center">
                  <Flower2 className="w-6 h-6 text-yellow-400 mr-3" />
                  Volume 6: Mystical Traditions
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Discover the spiritual and mystical traditions surrounding
                  flowers across different cultures and civilizations.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-4 flex items-center">
                  <Flower2 className="w-6 h-6 text-indigo-400 mr-3" />
                  Volume 7: The Guardian's Path
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Learn the ancient practices and responsibilities of becoming
                  a true guardian of the floral realm.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-4 flex items-center">
                  <Flower2 className="w-6 h-6 text-red-400 mr-3" />
                  Sacred Volume
                </h2>
                <p className="text-white/70 leading-relaxed">
                  The ultimate compilation of wisdom, prophecies, and sacred
                  knowledge passed down through generations of flower guardians.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-red-500/20 text-red-300 border border-red-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-light text-white mb-8">
            The Literary Saga is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Under Development
            </span>
          </h3>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Our team of flower guardians and mystical scholars are carefully
            crafting each volume to preserve the ancient wisdom of the
            botanical world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-light"
            >
              Return to Portal
            </a>
            <a
              href="/card-game"
              className="px-8 py-3 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-light"
            >
              Explore Card Game
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
