export default function NewComponent() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-1 py-12 md:py-20 px-4">
        <div className="relative text-center space-y-6 md:space-y-10 max-w-4xl mx-auto z-20">
          {/* Organization Title */}
          <div className="space-y-2">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-cyan-200 to-violet-200"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                textShadow: "0 0 30px rgba(167, 139, 250, 0.5)",
                animation: "titleGlow 6s infinite ease-in-out",
              }}
            >
              Proveneya & Nahiara
            </h1>
            <h2
              className="text-lg md:text-xl lg:text-2xl font-light text-violet-200"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                textShadow: "0 0 15px rgba(167, 139, 250, 0.4)",
                letterSpacing: "0.05em",
              }}
            >
              International Association for the Protection of Flowers
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="space-y-4">
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                lineHeight: "1.8",
              }}
            >
              We are a creative, ethical, and global alliance dedicated to
              protecting the national flowers of the world as symbols of life,
              identity, and hope.
            </p>
            <p
              className="text-base md:text-lg text-cyan-200/80 italic"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                textShadow: "0 0 10px rgba(64, 224, 208, 0.3)",
              }}
            >
              Our mission blossoms through art, education, and technology.
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="relative text-center space-y-3 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 via-cyan-400/10 to-violet-400/10 rounded-lg blur-lg" />
            <div
              className="relative px-6 md:px-8 py-4 md:py-6 rounded-lg border backdrop-blur-sm"
              style={{
                borderColor: "rgba(167, 139, 250, 0.3)",
                backgroundColor: "rgba(30, 27, 75, 0.4)",
                boxShadow: "0 0 20px rgba(167, 139, 250, 0.2)",
              }}
            >
              <h3
                className="text-xl md:text-2xl font-light text-violet-300 mb-2"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  textShadow: "0 0 15px rgba(167, 139, 250, 0.5)",
                }}
              >
                Coming soon:
              </h3>
              <p
                className="text-lg md:text-xl text-white/90"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.4)",
                }}
              >
                A garden without precedent for global enjoyment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative w-full mt-auto z-20">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <div
            className="text-center text-xs md:text-sm text-indigo-200/70 space-y-2 backdrop-blur-sm bg-indigo-900/10 p-4 md:p-6 rounded-lg border border-indigo-400/20"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              lineHeight: "1.6",
            }}
          >
            <p className="font-medium">
              © 2025 International Association for the Protection of Flowers –
              Proveneya & Nahiara
            </p>
            <p>
              This site is under development and has no commercial purpose. For
              more information, contact:{" "}
              <a
                href="mailto:contacto@asociacionnahiara.org"
                className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
                style={{ textShadow: "0 0 8px rgba(64, 224, 208, 0.4)" }}
              >
                contacto@asociacionnahiara.org
              </a>
            </p>
            <p className="text-indigo-300/60">
              This site collects no personal data and uses no cookies. A
              nonprofit initiative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

