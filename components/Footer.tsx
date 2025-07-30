import Link from 'next/link'
import { Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              <span className="text-green-400">NextLayer</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Accelerating business transformation through cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Solutions</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Cloud Infrastructure</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Cybersecurity</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Digital Transformation</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">AI & Machine Learning</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">About</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">News</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Community</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Status</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 NextLayer. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
