import { Clock, Users, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TourPackageProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  price: string;
  departure: string;
  link?: string;
}

export function TourPackage({
  image,
  title,
  description,
  duration,
  groupSize,
  rating,
  reviews,
  price,
  departure,
  link,
}: TourPackageProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
          {price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-gray-700">{rating}</span>
          <span className="text-gray-500">({reviews} değerlendirme)</span>
        </div>
        <h3 className="text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{departure}</span>
          </div>
        </div>
        <div className="mt-auto">
          {link ? (
            <Link to={link}>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Detayları Gör
              </button>
            </Link>
          ) : (
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Detayları Gör
            </button>
          )}
        </div>
      </div>
    </div>
  );
}