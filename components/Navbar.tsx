'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white text-xl font-bold">
            <span className="text-green-400">NextLayer</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded text-sm font-semibold transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded text-sm font-semibold transition-colors">
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