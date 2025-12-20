import { Menu, X, Heart, Shield } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="text-white w-7 h-7 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Hope Foundation
              </span>
              <span className="text-xs text-gray-600 -mt-1">Changing Lives Together</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="/programs" 
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              Our Programs
            </a>
            <a 
              href="/gallery" 
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              Gallery
            </a>
            <a 
              href="/donate" 
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              Donate Now
            </a>
            <a 
              href="/about" 
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              About Us
            </a>
            <a 
              href="/contact" 
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              Contact
            </a>
            {/* Admin Panel Link */}
            <a 
              href="/admin" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center"
              title="Admin Panel"
            >
              <Shield className="w-4 h-4 mr-1" />
              Admin
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/donate">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg">
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <a 
              href="/" 
              className="block py-2 text-gray-700 hover:text-rose-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/programs" 
              className="block py-2 text-gray-700 hover:text-rose-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Programs
            </a>
            <a 
              href="/gallery" 
              className="block py-2 text-gray-700 hover:text-rose-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="/donate" 
              className="block py-2 text-gray-700 hover:text-rose-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate Now
            </a>
            <a 
              href="/about" 
              className="block py-2 text-gray-700 hover:text-rose-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="/contact" 
              className="block py-2 text-gray-700 hover:text-rose-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            {/* Admin Panel Link - Mobile */}
            <a 
              href="/admin" 
              className="block py-2 text-purple-700 hover:text-purple-900 transition-colors font-medium flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Shield className="w-4 h-4 mr-2" />
              Admin Panel
            </a>
            {/* Dashboards */}
            <div className="pt-4 border-t mt-4">
              <p className="text-xs text-gray-500 mb-2">User Dashboards</p>
              <a 
                href="/dashboard/donor" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donor Dashboard
              </a>
              <a 
                href="/dashboard/volunteer" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Volunteer Dashboard
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}