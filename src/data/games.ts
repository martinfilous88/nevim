import type { Game } from '../types/game';

export const FEATURED_GAMES: Game[] = [
  {
    id: '1',
    title: 'Pixel Pirates',
    description: 'Set sail in this charming pixel-art adventure! Battle sea monsters, discover hidden treasures, and become the most notorious pirate in the digital seas.',
    price: 14.99,
    imageUrl: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=2069',
    releaseDate: '2024-03-20',
    ageRating: 7,
    categories: ['Adventure', 'Action', 'Indie'],
    features: ['Single Player', 'Controller Support', 'Cloud Saves']
  },
  {
    id: '2',
    title: 'Forest Guardian',
    description: 'Protect the mystical forest from corruption in this beautiful 2D platformer. Use nature magic and befriend woodland creatures to restore harmony.',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2072',
    releaseDate: '2024-03-25',
    ageRating: 6,
    categories: ['Platformer', 'Adventure', 'Family'],
    features: ['Local Co-op', 'Achievement System', 'Original Soundtrack']
  },
  {
    id: '3',
    title: 'Neon Racer',
    description: 'Race through futuristic neon-lit cities in this high-speed arcade racing game. Customize your hover car and compete in thrilling multiplayer races.',
    price: 16.99,
    imageUrl: 'https://images.unsplash.com/photo-1534445967719-8ae7b972b1a5?auto=format&fit=crop&q=80&w=2070',
    releaseDate: '2024-03-18',
    ageRating: 8,
    categories: ['Racing', 'Arcade', 'Multiplayer'],
    features: ['Online Multiplayer', 'Custom Cars', 'Weekly Tournaments']
  }
];