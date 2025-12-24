import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  image: string;
  name: string;
  country: string;
  rating: number;
  tours: number;
  price: string;
  link?: string;
}

export function DestinationCard({ image, name, country, rating, tours, price, link }: DestinationCardProps) {
  const content = (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
          <span className="text-blue-600">{price}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{country}</span>
        </div>
        <h3 className="text-gray-900 mb-3">{name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-700">{rating}</span>
          </div>
          <span className="text-gray-600">{tours} tur</span>
        </div>
      </div>
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
}