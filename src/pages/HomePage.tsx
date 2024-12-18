import React from 'react';
import { GameGrid } from '../components/games/GameGrid';
import { FEATURED_GAMES } from '../data/games';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2070"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-4">
                Welcome to NextWave Games
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover and download amazing games. Your next adventure awaits!
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
                Browse Games
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Games</h2>
        <GameGrid games={FEATURED_GAMES} />
      </section>
    </div>
  );
}