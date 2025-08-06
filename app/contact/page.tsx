import { Mail, Flower2, Sparkles, MapPin, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Mail className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-white mb-4">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Us
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Connect with our flower guardians and join the global alliance for
              flower protection
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-6">
                  Send a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-white/80 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-white/80 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-white/80 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-colors duration-300">
                      <option value="">Select a topic</option>
                      <option value="conservation">Flower Conservation</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                      <option value="volunteer">Volunteer Information</option>
                      <option value="donation">Donation Inquiries</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 transition-colors duration-300 resize-none"
                      placeholder="Share your thoughts, questions, or ideas about flower protection..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-light"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-light mb-1">Email</h3>
                      <p className="text-white/70">
                        contacto@asociacionnahiara.org
                      </p>
                      <p className="text-sm text-white/50">
                        We respond within 24-48 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-light mb-1">Website</h3>
                      <p className="text-white/70">asociacionnahiara.org</p>
                      <p className="text-sm text-white/50">
                        Visit our main portal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Flower2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-light mb-1">
                        Global Network
                      </h3>
                      <p className="text-white/70">
                        Flower Guardians Worldwide
                      </p>
                      <p className="text-sm text-white/50">
                        Join our international community
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
                <h3 className="text-xl font-light text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-sm text-white/50 mt-4">
                  All times are in local timezone. We observe major holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-white text-center mb-12">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Questions
            </span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
              <h3 className="text-lg font-light text-white mb-3">
                How can I volunteer for flower conservation?
              </h3>
              <p className="text-white/70">
                We welcome volunteers from around the world. Contact us with
                your interests and location, and we'll connect you with local
                conservation efforts.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
              <h3 className="text-lg font-light text-white mb-3">
                Can I donate to support flower protection?
              </h3>
              <p className="text-white/70">
                Yes, we accept donations to support our conservation projects.
                All donations go directly to flower protection initiatives and
                educational programs.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
              <h3 className="text-lg font-light text-white mb-3">
                How can my organization partner with you?
              </h3>
              <p className="text-white/70">
                We're always looking for partnerships with organizations that
                share our mission. Contact us to discuss potential collaboration
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-light text-white mb-8">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Flower Guardian
            </span>{" "}
            Community
          </h3>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Together, we can protect the world's national flowers and preserve
            their cultural significance for future generations.
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
