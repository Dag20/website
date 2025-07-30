import Image from 'next/image'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              IT Infrastructure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Accelerate your business with cutting-edge technology solutions. 
            From cloud migration to AI implementation, we power the next generation of enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400 text-lg">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-lg">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400 text-lg">Support</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-400 text-lg">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Solutions That Scale</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From startups to Fortune 500 companies, our technology solutions drive innovation and growth across every industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-gray-900 hover:bg-gray-800 p-8 rounded-2xl transition-all duration-300 border border-gray-800 hover:border-green-500/50">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Shield className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
                <p className="text-gray-400 mb-6">Advanced threat protection and zero-trust security architecture for modern enterprises.</p>
                <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-gray-900 hover:bg-gray-800 p-8 rounded-2xl transition-all duration-300 border border-gray-800 hover:border-green-500/50">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Zap className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-400 mb-6">Scalable, resilient cloud solutions powered by AI and machine learning capabilities.</p>
                <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-gray-900 hover:bg-gray-800 p-8 rounded-2xl transition-all duration-300 border border-gray-800 hover:border-green-500/50">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Users className="text-green-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
                <p className="text-gray-400 mb-6">End-to-end transformation services that modernize your business for the digital age.</p>
                <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-green-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Accelerate Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Join thousands of companies already transforming their operations with our cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Start Your Journey
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  )
}