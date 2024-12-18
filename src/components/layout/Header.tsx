import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, GamepadIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GamepadIcon className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">NextWave Games</span>
          </Link>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <Link to="/store" className="hover:text-blue-400">Store</Link>
            <Link to="/library" className="hover:text-blue-400">Library</Link>
            <Link to="/cart" className="relative hover:text-blue-400">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
            <Link to="/profile" className="hover:text-blue-400">
              <User className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}