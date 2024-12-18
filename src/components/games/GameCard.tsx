import React from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../../types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img 
        src={game.imageUrl} 
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-400 font-bold">${game.price.toFixed(2)}</span>
          <Link
            to={`/game/${game.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}