'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">NL</span>
            </div>
            <span className="text-white text-xl font-bold tracking-tight">NextLayer</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium flex items-center py-2 px-3 rounded-lg hover:bg-white/5">
                Products <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">Cloud Infrastructure</a>
                  <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">Cybersecurity</a>
                  <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">AI Solutions</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium flex items-center py-2 px-3 rounded-lg hover:bg-white/5">
                Solutions <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">Enterprise</a>
                  <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">Startups</a>
                  <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">Government</a>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-200 text-sm font-medium py-2 px-3 rounded-lg hover:bg-white/5">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
              <Search size={20} />
            </button>
            <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link href="/" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <button className="w-full mt-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar