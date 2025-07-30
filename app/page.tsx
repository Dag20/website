import Image from 'next/image'
import { ArrowRight, Shield, Zap, Users, Play, ChevronRight, Cpu, Database, Globe } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-black"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(76, 175, 80, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(76, 175, 80, 0.08) 0%, transparent 50%)
            `
          }}></div>
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Now Available: AI-Powered Infrastructure
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            The Future of
            <span className="block bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
              Enterprise Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Accelerate your digital transformation with cutting-edge AI, cloud infrastructure, 
            and cybersecurity solutions trusted by Fortune 500 companies worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-green-500/25 hover:scale-105">
              Explore Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="group border border-gray-600 hover:border-green-400 text-white hover:text-green-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center hover:bg-green-400/5">
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Watch Demo
            </button>
          </div>

          {/* Floating cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Cpu className="text-green-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400 text-sm">Next-generation artificial intelligence solutions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Database className="text-green-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Cloud Native</h3>
              <p className="text-gray-400 text-sm">Scalable infrastructure built for the future</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Globe className="text-green-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Global Scale</h3>
              <p className="text-gray-400 text-sm">Worldwide deployment and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-400">Powering innovation across the globe</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-400 text-lg font-medium">Enterprise Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-gray-400 text-lg font-medium">Uptime SLA</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-400 text-lg font-medium">Global Support</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-gray-400 text-lg font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4 block">SOLUTIONS</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Built for Tomorrow</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI-powered analytics to quantum-ready security, our solutions are designed 
              to keep your business ahead of the curve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-black/50 backdrop-blur-sm hover:bg-black/70 p-8 rounded-3xl transition-all duration-500 border border-gray-800 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Security</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Next-generation cybersecurity with quantum-resistant encryption and AI-powered threat detection.</p>
                <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Security <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-black/50 backdrop-blur-sm hover:bg-black/70 p-8 rounded-3xl transition-all duration-500 border border-gray-800 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Infrastructure</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Scalable cloud platforms optimized for machine learning workloads and real-time analytics.</p>
                <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Explore AI <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-black/50 backdrop-blur-sm hover:bg-black/70 p-8 rounded-3xl transition-all duration-500 border border-gray-800 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">End-to-end modernization services that transform your business for the digital-first world.</p>
                <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Explore Transformation <ChevronRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4 block">FEATURED</span>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Accelerate Innovation with 
                <span className="text-green-400"> AI-First</span> Solutions
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Our latest AI platform combines machine learning, natural language processing, 
                and computer vision to deliver unprecedented business insights and automation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Real-time data processing at petabyte scale</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">99.99% accuracy in predictive analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Enterprise-grade security and compliance</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-green-500/25">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                <div className="bg-black rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-green-400 font-semibold">AI Performance Dashboard</span>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Processing Speed</span>
                      <span className="text-white font-semibold">2.4 PB/s</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Model Accuracy</span>
                      <span className="text-white font-semibold">99.94%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-400/10 rounded-xl p-4 border border-green-400/20">
                    <div className="text-2xl font-bold text-green-400 mb-1">847K</div>
                    <div className="text-gray-400 text-sm">Predictions/min</div>
                  </div>
                  <div className="bg-green-400/10 rounded-xl p-4 border border-green-400/20">
                    <div className="text-2xl font-bold text-green-400 mb-1">12ms</div>
                    <div className="text-gray-400 text-sm">Avg Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-green-900/20 via-black to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of forward-thinking companies already leveraging our cutting-edge 
            technology solutions to drive unprecedented growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105">
              Start Your Journey
            </button>
            <button className="border border-gray-600 hover:border-green-400 text-white hover:text-green-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-green-400/5">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  )
}