import { Hero } from '../components/Hero';
import { DestinationCard } from '../components/DestinationCard';
import { TourPackage } from '../components/TourPackage';
import { VisaSupport } from '../components/VisaSupport';
import { SocialProof } from '../components/SocialProof';
import { Globe, Shield, Headphones, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';
import { trackFacebookEvent } from '../components/FacebookPixel';

export function Home() {
  const { t } = useLanguage();

  // Track ViewContent event on page load
  useEffect(() => {
    trackFacebookEvent('ViewContent', {
      content_name: 'Home Page',
      content_category: 'page_view',
      content_type: 'website'
    });
    console.log('[Home Page] ViewContent event tracked');
  }, []);

  const destinations = [
    {
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NTA5NDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Paris',
      country: 'Fransa',
      rating: 4.9,
    },
    {
      image: 'https://images.unsplash.com/photo-1640871426525-a19540c45a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXxlbnwxfHx8fDE3NjUxNjUxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Tokyo',
      country: 'Japonya',
      rating: 4.8,
    },
    {
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY1MTAwODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Santorini',
      country: 'Yunanistan',
      rating: 4.9,
    },
    {
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmV8ZW58MXx8fHwxNzY1MTc3NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Dubai',
      country: 'BAE',
      rating: 4.7,
      link: '/tours/dubai'
    },
    {
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      name: 'Roma',
      country: 'İtalya',
      rating: 4.9,
    },
    {
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
      name: 'Kahire',
      country: 'Mısır',
      rating: 4.6,
    },
    {
      image: 'https://images.unsplash.com/photo-1587832173157-b285c8edcb02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb250ZW5lZ3JvJTIwS290b3IlMjBjaXR5fGVufDF8fHx8MTc2NTIwODM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Kotor',
      country: 'Karadağ',
      rating: 4.8,
    },
    {
      image: 'https://images.unsplash.com/photo-1736446292032-7681fa8f28b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXJhamV2byUyMEJvc25pYSUyMGNpdHl8ZW58MXx8fHwxNzY1MjA4ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Saraybosna',
      country: 'Bosna-Hersek',
      rating: 4.7,
    },
    {
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      name: 'Bali',
      country: 'Endonezya',
      rating: 4.9,
    },
    {
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
      name: 'Maldivler',
      country: 'Maldivler',
      rating: 5.0,
    },
    {
      image: 'https://images.unsplash.com/photo-1580232054165-30f46a38797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYmlsaXNpJTIwY2l0eSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjUyMDgxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Tiflis',
      country: 'Gürcistan',
      rating: 4.6,
    },
    {
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
      name: 'Prag',
      country: 'Çek Cumhuriyeti',
      rating: 4.8,
    },
    {
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
      name: 'Pekin',
      country: 'Çin',
      rating: 4.7,
    },
    {
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
      name: 'Agra',
      country: 'Hindistan',
      rating: 4.8,
    },
    {
      image: 'https://images.unsplash.com/photo-1662747974831-28da0bc0968b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQZXRyYSUyMEpvcmRhbiUyMHRyYXZlbHxlbnwxfHx8fDE3NjUyMDg4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Petra',
      country: 'Ürdün',
      rating: 4.9,
    },
    {
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      name: 'Singapur',
      country: 'Singapur',
      rating: 4.8,
    },
    {
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
      name: 'Atina',
      country: 'Yunanistan',
      rating: 4.7,
    },
    {
      image: 'https://images.unsplash.com/photo-1728249960363-13079cc2c6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYWdyYWRhJTIwRmFtaWxpYSUyMEJhcmNlbG9uYXxlbnwxfHx8fDE3NjY1NzUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      name: 'Barcelona',
      country: 'İspanya',
      rating: 4.9,
    },
    {
      image: 'https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=800',
      name: 'Bahama',
      country: 'Karayipler',
      rating: 4.8,
    },
  ];

  const tourPackages = [
    {
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      title: 'Dubai Masalı Turu - Emirates Havayolları',
      description: 'Emirlik\'in görkemli yapıları, lüks alışveriş merkezleri ve çöl safarisi ile unutulmaz bir deneyim.',
      duration: '5 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 167,
      price: '€899',
      departure: 'Her gün',
      link: '/tour-details/dubai-emirates'
    },
    {
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
      title: 'Bangkok - Pattaya Turu 7 Gece Süper Promosyon',
      description: 'Tayland\'ın egzotik güzelliği, tapınaklar, plajlar ve eğlence ile dolu muhteşem bir kaçış.',
      duration: '9 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 234,
      price: '€999',
      departure: 'Belirli Tarihler',
      link: '/tour-details/bangkok-pattaya'
    },
    {
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
      title: 'Harikalar Diyarı Bali - Ubud Turu',
      description: 'Mistik tapınaklar, pirinç terasları ve tropik cennet Bali\'de unutulmaz bir tatil deneyimi.',
      duration: '8 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 156,
      price: '€1499',
      departure: 'Belirli Tarihler',
      link: '/tour-details/bali-ubud-wonderland'
    },
  ];

  const features = [
    {
      icon: Globe,
      title: t('home.worldwideCoverage'),
      description: t('home.worldwideCoverageDesc'),
    },
    {
      icon: Shield,
      title: t('home.safeSecure'),
      description: t('home.safeSecureDesc'),
    },
    {
      icon: Headphones,
      title: t('home.support247Title'),
      description: t('home.support247TitleDesc'),
    },
    {
      icon: Award,
      title: t('home.bestPricesTitle'),
      description: t('home.bestPricesTitleDesc'),
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
            <h2 className="text-gray-900 mb-4">{t('home.popularDestinations')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.popularDestinationsSubtitle')}
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
            <h2 className="text-gray-900 mb-4">{t('home.featuredPackages')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.featuredPackagesSubtitle')}
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
              {t('home.viewAllTours')}
            </Link>
          </div>
        </div>
      </section>

      {/* Visa Support Section */}
      <VisaSupport />

      {/* Social Proof Section */}
      <SocialProof />

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