import { Hero } from '../components/Hero';
import { DestinationCard } from '../components/DestinationCard';
import { TourPackage } from '../components/TourPackage';
import { VisaSupport } from '../components/VisaSupport';
import { Globe, Shield, Headphones, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const destinations = [
    {
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NTA5NDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Paris',
      country: 'Fransa',
      rating: 4.9,
      tours: 125,
      price: '€729\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1640871426525-a19540c45a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXxlbnwxfHx8fDE3NjUxNjUxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Tokyo',
      country: 'Japonya',
      rating: 4.8,
      tours: 98,
      price: '€1.049\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY1MTAwODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Santorini',
      country: 'Yunanistan',
      rating: 4.9,
      tours: 87,
      price: '€889\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmV8ZW58MXx8fHwxNzY1MTc3NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Dubai',
      country: 'BAE',
      rating: 4.7,
      tours: 112,
      price: '€1.210\'dan',
      link: '/tours/dubai'
    },
    {
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      name: 'Roma',
      country: 'İtalya',
      rating: 4.9,
      tours: 145,
      price: '€780\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
      name: 'Kahire',
      country: 'Mısır',
      rating: 4.6,
      tours: 78,
      price: '€485\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1587832173157-b285c8edcb02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb250ZW5lZ3JvJTIwS290b3IlMjBjaXR5fGVufDF8fHx8MTc2NTIwODM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Kotor',
      country: 'Karadağ',
      rating: 4.8,
      tours: 52,
      price: '€590\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1736446292032-7681fa8f28b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXJhamV2byUyMEJvc25pYSUyMGNpdHl8ZW58MXx8fHwxNzY1MjA4ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Saraybosna',
      country: 'Bosna-Hersek',
      rating: 4.7,
      tours: 65,
      price: '€660\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      name: 'Bali',
      country: 'Endonezya',
      rating: 4.9,
      tours: 92,
      price: '€755\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
      name: 'Maldivler',
      country: 'Maldivler',
      rating: 5.0,
      tours: 68,
      price: '€1.400\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1580232054165-30f46a38797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYmlsaXNpJTIwY2l0eSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjUyMDgxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Tiflis',
      country: 'Gürcistan',
      rating: 4.6,
      tours: 43,
      price: '€499\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
      name: 'Prag',
      country: 'Çek Cumhuriyeti',
      rating: 4.8,
      tours: 110,
      price: '€860\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
      name: 'Pekin',
      country: 'Çin',
      rating: 4.7,
      tours: 88,
      price: '€1.025\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
      name: 'Agra',
      country: 'Hindistan',
      rating: 4.8,
      tours: 76,
      price: '€755\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1662747974831-28da0bc0968b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQZXRyYSUyMEpvcmRhbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjUyMDg4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Petra',
      country: 'Ürdün',
      rating: 4.9,
      tours: 54,
      price: '€700\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1605971868720-63e6a63d1eb4?w=800',
      name: 'Kudüs',
      country: 'İsrail',
      rating: 4.7,
      tours: 62,
      price: '€860\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      name: 'Singapur',
      country: 'Singapur',
      rating: 4.8,
      tours: 95,
      price: '€860\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
      name: 'Atina',
      country: 'Yunanistan',
      rating: 4.7,
      tours: 102,
      price: '€499\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800',
      name: 'Barcelona',
      country: 'İspanya',
      rating: 4.9,
      tours: 128,
      price: '€945\'dan',
    },
    {
      image: 'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=800',
      name: 'Bahama',
      country: 'Karayipler',
      rating: 4.8,
      tours: 71,
      price: '€1.560\'dan',
    },
  ];

  const tourPackages = [
    {
      image: 'https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2NTExOTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tropikal Cennet Kaçışı',
      description: 'El değmemiş kumsallarda rahatlayın ve bu unutulmaz tatilde lüks tesis olanaklarının keyfini çıkarın.',
      duration: '7 Gün',
      groupSize: '8-12 kişi',
      rating: 4.9,
      reviews: 234,
      price: '€1.535',
      departure: 'Her gün',
    },
    {
      image: 'https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjUxNjUxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Maldivler Lüks Tatil',
      description: 'Su üstü bungalovlar ve berrak sularla nihai lüks destinasyonda deneyim yaşayın.',
      duration: '5 Gün',
      groupSize: '2-6 kişi',
      rating: 5.0,
      reviews: 189,
      price: '€2.020',
      departure: 'Pzt, Per',
    },
    {
      image: 'https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjUxNzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Dağ Macerası Trekking',
      description: 'Nefes kesici dağ yolları ve muhteşem panoramik manzaralarla kendinize meydan okuyun.',
      duration: '10 Gün',
      groupSize: '6-15 kişi',
      rating: 4.8,
      reviews: 156,
      price: '€1.295',
      departure: 'Cumartesi',
    },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Dünya Çapında Kapsama',
      description: '6 kıtada 500+ destinasyon keşfedin',
    },
    {
      icon: Shield,
      title: 'Güvenli & Emniyetli',
      description: '7/24 destek ile güvenliğiniz önceliğimiz',
    },
    {
      icon: Headphones,
      title: '7/24 Destek',
      description: 'Özel ekibimizle her zaman, her yerde yardım alın',
    },
    {
      icon: Award,
      title: 'En İyi Fiyatlar',
      description: 'Gizli ücret olmayan rekabetçi fiyatlandırma',
    },
  ];

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Popüler Destinasyonlar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dünyanın en güzel ve heyecan verici ziyaret edilecek yerlerini keşfedin
            </p>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ minWidth: 'min-content' }}>
              {destinations.map((destination, index) => (
                <div key={index} className="flex-shrink-0 w-72">
                  <DestinationCard {...destination} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="packages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Öne Çıkan Tur Paketleri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unutulmaz anılar için tasarlanmış özenle seçilmiş deneyimler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <TourPackage key={index} {...pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/packages" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Tüm Paketleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Visa Support Section */}
      <VisaSupport />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Yolculuğunuza Başlamaya Hazır Mısınız?</h2>
          <p className="text-white/90 mb-8">
            Binlerce memnun gezgine katılın ve ömür boyu sürecek anılar oluşturun
          </p>
          <Link 
            to="/packages" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-block"
          >
            Hemen Başlayın
          </Link>
        </div>
      </section>
    </>
  );
}