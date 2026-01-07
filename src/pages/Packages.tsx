import { useState, useEffect } from 'react';
import { TourPackage } from '../components/TourPackage';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackFacebookEvent } from '../components/FacebookPixel';

export function Packages() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedDuration, setSelectedDuration] = useState('Tümü');
  const [priceRange, setPriceRange] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  // Track ViewContent event on page load
  useEffect(() => {
    trackFacebookEvent('ViewContent', {
      content_name: 'Tour Packages Page',
      content_category: 'tour_listings',
      content_type: 'product_group'
    });
    console.log('[Packages Page] ViewContent event tracked');
  }, []);

  const categories = ['Tümü', 'Vizesiz Turlar', 'Dubai Turları', 'Mısır Turları', 'Tayland Turları', 'Bali Turları'];
  const durations = ['Tümü', '1-3 Gün', '4-7 Gün', '8-14 Gün'];
  const priceRanges = ['Tümü', '€270 - €600', '€600 - €1000', '€1000 - €1500', '€1500+'];

  const allPackages = [
    // Vizesiz Turlar (4 tur)
    {
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      title: 'Harikalar Diyarı Bali - Ubud Turu',
      description: 'Mistik tapınaklar, pirinç terasları ve tropik cennet Bali\'de unutulmaz bir tatil deneyimi.',
      duration: '8 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 156,
      price: '€1.499',
      departure: 'Belirli Tarihler',
      category: 'Bali Turları',
      link: '/tour-details/bali-ubud-wonderland'
    },
    {
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
      title: 'Bangkok - Pattaya Turu',
      description: 'Tayland\'ın egzotik güzelliği, tapınaklar, plajlar ve eğlence ile dolu muhteşem bir kaçış.',
      duration: '9 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 234,
      price: '€999',
      departure: 'Belirli Tarihler',
      category: 'Tayland Turları',
      link: '/tour-details/bangkok-pattaya'
    },
    {
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      title: 'Keşfet Tayland Bangkok Pattaya Phuket',
      description: '3 şehirde Tayland\'ın en güzel yerlerini keşfedin. Tapınaklar, plajlar ve kültür.',
      duration: '11 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 198,
      price: '€1.499',
      departure: 'Belirli Tarihler',
      category: 'Tayland Turları',
      link: '/tour-details/kesfet-tayland'
    },
    {
      image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?auto=format&fit=crop&w=800&q=80',
      title: 'Bangkok - Pattaya 7 Gece Süper Promosyon',
      description: 'Uzatılmış konaklama ile daha fazla keşif ve dinlenme fırsatı.',
      duration: '9 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 187,
      price: '€1.149',
      departure: 'Belirli Tarihler',
      category: 'Tayland Turları',
      link: '/tour-details/bangkok-pattaya-extended'
    },

    // Dubai Turları (3 tur)
    {
      image: 'https://images.unsplash.com/photo-1651284819032-42a925c1b114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      title: 'Dubai Turu 3 Gece AJet Havayolları',
      description: 'Burj Khalifa, Dubai Mall ve şehir turu ile kısa ama yoğun Dubai deneyimi.',
      duration: '4 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 143,
      price: '€550',
      departure: 'Her gün',
      category: 'Dubai Turları',
      link: '/tour-details/dubai-ajet'
    },
    {
      image: 'https://images.unsplash.com/photo-1761341063556-80cb742411b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      title: 'Bir Dubai Masalı - Dubai Şehir Turu Dahil',
      description: 'Dubai\'nin büyüleyici atmosferi, Abra tekne gezisi ve geleneksel çarşılar.',
      duration: '6 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 176,
      price: '€499',
      departure: 'Her gün',
      category: 'Dubai Turları',
      link: '/tour-details/dubai-masali'
    },
    {
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      title: 'Muhteşem Dubai - Emirates Havayolları',
      description: 'Emirates konforu ile Dubai\'nin görkemli yapıları ve lüks alışveriş deneyimi.',
      duration: '5 Gün',
      groupSize: '10-25 kişi',
      rating: 5.0,
      reviews: 167,
      price: '€899',
      departure: 'Her gün',
      category: 'Dubai Turları',
      link: '/tour-details/dubai-emirates'
    },

    // Mısır Turları (5 tur - Hurghada kaldırıldı)
    {
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
      title: 'Kahire & Nil Turu',
      description: 'Piramitler, Sfenks ve Nil üzerinde cruise ile Mısır\'ın kalbini keşfedin.',
      duration: '7 Gün',
      groupSize: '15-30 kişi',
      rating: 5.0,
      reviews: 289,
      price: '€500',
      departure: 'Her gün',
      category: 'Mısır Turları',
      link: '/tour-details/egypt-cairo-nile'
    },
    {
      image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
      title: 'Mısır Klasik Tur',
      description: 'Kahire, Piramitler ve Mısır Müzesi ile tarih dolu bir keşif.',
      duration: '5 Gün',
      groupSize: '15-30 kişi',
      rating: 5.0,
      reviews: 245,
      price: '€370',
      departure: 'Her gün',
      category: 'Mısır Turları',
      link: '/tour-details/egypt-classic'
    },
    {
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
      title: 'Mısır & Ürdün Kombine Tur',
      description: '2 ülke, Petra antik kenti, Ölü Deniz ve Piramitler ile eşsiz bir deneyim.',
      duration: '9 Gün',
      groupSize: '15-30 kişi',
      rating: 5.0,
      reviews: 198,
      price: '€640',
      departure: 'Pazartesi, Perşembe',
      category: 'Mısır Turları',
      link: '/tour-details/egypt-jordan-combo'
    },
    {
      image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
      title: 'Mısır Kültür Turu',
      description: 'Tüm tapınaklar, Abu Simbel ve Nil kenarında tarihi bir yolculuk.',
      duration: '8 Gün',
      groupSize: '15-30 kişi',
      rating: 5.0,
      reviews: 267,
      price: '€570',
      departure: 'Salı, Cuma',
      category: 'Mısır Turları',
      link: '/tour-details/egypt-culture'
    },
    {
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
      title: 'Mısır Ekonomik Paket',
      description: 'Bütçe dostu fiyatlarla Piramitler ve Kahire gezisi.',
      duration: '4 Gün',
      groupSize: '15-30 kişi',
      rating: 4.0,
      reviews: 176,
      price: '€270',
      departure: 'Her gün',
      category: 'Mısır Turları',
      link: '/tour-details/egypt-budget'
    }
  ];

  const filteredPackages = allPackages.filter(pkg => {
    const matchesCategory = selectedCategory === 'Tümü' || pkg.category === selectedCategory;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesDuration = true;
    if (selectedDuration !== 'Tümü') {
      const days = parseInt(pkg.duration);
      if (selectedDuration === '1-3 Gün') matchesDuration = days >= 1 && days <= 3;
      else if (selectedDuration === '4-7 Gün') matchesDuration = days >= 4 && days <= 7;
      else if (selectedDuration === '8-14 Gün') matchesDuration = days >= 8 && days <= 14;
    }

    let matchesPrice = true;
    if (priceRange !== 'Tümü') {
      const price = parseInt(pkg.price.replace(/[^\d]/g, ''));
      if (priceRange === '€270 - €600') matchesPrice = price >= 270 && price <= 600;
      else if (priceRange === '€600 - €1000') matchesPrice = price >= 600 && price <= 1000;
      else if (priceRange === '€1000 - €1500') matchesPrice = price >= 1000 && price <= 1500;
      else if (priceRange === '€1500+') matchesPrice = price >= 1500;
    }

    return matchesCategory && matchesSearch && matchesDuration && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        {/* Background Banner Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1706208224221-0944db693705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbCUyMGJlYWNofGVufDF8fHx8MTc2NTA3NzQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-white mb-6 font-bold">Tur Paketlerimiz</h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-8">
              Dünyanın dört bir yanından özenle seçilmiş turlarımızla hayalinizdeki tatili bulun. 
              Her bütçeye ve ilgi alanına uygun paketlerimizle unutulmaz deneyimler sizi bekliyor.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Paket ara... (örn: Dubai, Mısır, Bangkok)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Filtreler</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-gray-700 mb-2">Kategori</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-gray-700 mb-2">Süre</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {durations.map(dur => (
                  <option key={dur} value={dur}>{dur}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-gray-700 mb-2">Fiyat Aralığı</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {priceRanges.map(price => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-gray-900">
              {filteredPackages.length} Paket Bulundu
            </h2>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Filter className="w-5 h-5" />
              <span>Sırala</span>
            </button>
          </div>

          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <TourPackage key={index} {...pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2">Sonuç Bulunamadı</h3>
              <p className="text-gray-600 mb-6">
                Aradığınız kriterlere uygun paket bulunamadı. Lütfen farklı filtreler deneyin.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Tümü');
                  setSelectedDuration('Tümü');
                  setPriceRange('Tümü');
                  setSearchQuery('');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Aradığınızı Bulamadınız mı?</h2>
          <p className="text-gray-600 mb-8">
            Uzman ekibimiz size özel bir tur paketi hazırlayabilir. Bizimle iletişime geçin!
          </p>
          <Link 
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors inline-block"
          >
            Özel Paket Talebi
          </Link>
        </div>
      </section>
    </div>
  );
}