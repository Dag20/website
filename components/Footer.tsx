import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold">NL</span>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">NextLayer</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Accelerating digital transformation through cutting-edge AI, cloud infrastructure, 
              and cybersecurity solutions for the world's most innovative companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Twitter size={18} className="text-gray-400 hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Linkedin size={18} className="text-gray-400 hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Github size={18} className="text-gray-400 hover:text-black" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Products</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">AI Platform</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Cloud Infrastructure</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Cybersecurity Suite</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Analytics Engine</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Edge Computing</a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Solutions</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Enterprise</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Healthcare</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Financial Services</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Manufacturing</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Government</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Company</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">About Us</Link>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">News & Events</a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Investors</a>
              <Link href="/contact" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Contact</Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-green-400" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">Headquarters</h5>
                <p className="text-gray-400 text-sm">123 Innovation Drive<br />Silicon Valley, CA 94000</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-green-400" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">Sales</h5>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567<br />Available 24/7</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-green-400" />
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">Support</h5>
                <p className="text-gray-400 text-sm">support@nextlayer.com<br />Enterprise support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 NextLayer Solutions. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer