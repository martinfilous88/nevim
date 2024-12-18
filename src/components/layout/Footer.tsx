import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <GamepadIcon className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">NextWave Games</span>
            </div>
            <p className="mt-2 text-sm">Your ultimate destination for digital games.</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/store" className="hover:text-blue-400">Store</Link></li>
              <li><Link to="/library" className="hover:text-blue-400">Library</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/support" className="hover:text-blue-400">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
              <li><Link to="/refund" className="hover:text-blue-400">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>support@nextwavegames.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} NextWave Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}