import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Mountain } from 'lucide-react';
import { MadeWithApplaa } from './made-with-applaa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-12 h-12">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path 
                        d="M 50 20 L 75 70 L 25 70 Z" 
                        fill="rgba(255, 255, 255, 0.3)"
                      />
                      <path 
                        d="M 30 40 L 45 70 L 15 70 Z" 
                        fill="rgba(255, 255, 255, 0.2)"
                      />
                      <path 
                        d="M 70 40 L 85 70 L 55 70 Z" 
                        fill="rgba(255, 255, 255, 0.2)"
                      />
                    </svg>
                  </div>
                  <span className="absolute text-white text-lg font-bold z-10">ॐ</span>
                </div>
              </div>
              <span className="text-lg font-bold">Arunachaleshwarar Trust</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              திருவண்ணாமலை அருணாசலேஸ்வரர் அறக்கட்டளை
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Dedicated to serving humanity with the blessings of Lord Arunachaleshwarar. Creating lasting change through compassion and devotion.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/programs" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Focus</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">🍽️ Annadhanam (Food Service)</li>
              <li className="text-gray-400 text-sm">📚 Education Support</li>
              <li className="text-gray-400 text-sm">⚕️ Healthcare Services</li>
              <li className="text-gray-400 text-sm">🏠 Shelter & Relief</li>
              <li className="text-gray-400 text-sm">🙏 Temple Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
                <span>Thiruvannamalai, Tamil Nadu 606601, India</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-orange-500" />
                <span>+91 (000) 000-0000</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-orange-500" />
                <span>info@arunachaleswarartrust.org</span>
              </li>
            </ul>
            <a href="/donate">
              <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg">
                Donate Now
              </button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Arunachaleshwarar Trust (அருணாசலேஸ்வரர் அறக்கட்டளை). All rights reserved. | Tax ID: 12-3456789
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Transparency Report</a>
            </div>
          </div>
          <MadeWithApplaa />
        </div>
      </div>
    </footer>
  );
}