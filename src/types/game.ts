export interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  releaseDate: string;
  ageRating: number;
  categories: string[];
  features: string[];
}