import { useState } from 'react';
import { CheckCircle, Star, Calendar, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AllTours() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Tüm turlar - Websitedeki güncel turlar
  const allTours = [
    // Bali Turları (1 tur)
    { 
      id: 'bali-1', 
      category: 'Bali Turları', 
      title: 'Harikalar Diyarı Bali - Ubud Turu', 
      duration: '8 Gün / 6 Gece', 
      price: 1499, 
      priceText: '€1.499', 
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80', 
      rating: 5, 
      features: ['Türk Havayolları', 'Ubud + Bali', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bali-ubud-wonderland'
    },

    // Tayland Turları (3 tur)
    { 
      id: 'thailand-1', 
      category: 'Tayland Turları', 
      title: 'Bangkok - Pattaya Turu', 
      duration: '9 Gün / 7 Gece', 
      price: 999, 
      priceText: '€999', 
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80', 
      rating: 5, 
      features: ['Türk Havayolları', 'Tapınak Turları', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bangkok-pattaya'
    },
    { 
      id: 'thailand-2', 
      category: 'Tayland Turları', 
      title: 'Keşfet Tayland Bangkok Pattaya Phuket', 
      duration: '11 Gün / 9 Gece', 
      price: 1499, 
      priceText: '€1.499', 
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80', 
      rating: 5, 
      features: ['Türk Havayolları', '3 Şehir Turu', 'Türkçe Rehber'],
      detailUrl: '/tour-details/kesfet-tayland'
    },
    { 
      id: 'thailand-3', 
      category: 'Tayland Turları', 
      title: 'Bangkok - Pattaya 7 Gece Süper Promosyon', 
      duration: '9 Gün / 7 Gece', 
      price: 1149, 
      priceText: '€1.149', 
      image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?auto=format&fit=crop&w=800&q=80', 
      rating: 5, 
      features: ['Türk Havayolları', 'Extended Stay', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bangkok-pattaya-extended'
    },

    // Dubai Turları (3 tur)
    { 
      id: 'dubai-1', 
      category: 'Dubai Turları', 
      title: 'Dubai Turu 3 Gece AJet Havayolları', 
      duration: '4 Gün / 3 Gece', 
      price: 550, 
      priceText: '€550', 
      image: 'https://images.unsplash.com/photo-1651284819032-42a925c1b114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80', 
      rating: 5, 
      features: ['AJet Havayolları', 'Dubai İkonları Şehir Turu', 'Türkçe Rehber'],
      detailUrl: '/tour-details/dubai-ajet'
    },
    { 
      id: 'dubai-2', 
      category: 'Dubai Turları', 
      title: 'Bir Dubai Masalı - Dubai Şehir Turu Dahil', 
      duration: '6 Gün / 5 Gece', 
      price: 499, 
      priceText: '€499', 
      image: 'https://images.unsplash.com/photo-1761341063556-80cb742411b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80', 
      rating: 5, 
      features: ['AJet Havayolları', 'Dubai Şehir Turu ve Abra', 'Türkçe Rehber'],
      detailUrl: '/tour-details/dubai-masali'
    },
    { 
      id: 'dubai-3', 
      category: 'Dubai Turları', 
      title: 'Muhteşem Dubai - Emirates Havayolları', 
      duration: '5 Gün / 4 Gece', 
      price: 899, 
      priceText: '€899', 
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', 
      rating: 5, 
      features: ['Emirates Havayolları', 'Dubai Şehir Turu ve Abra', 'Türkçe Rehber'],
      detailUrl: '/tour-details/dubai-emirates'
    },

    // Mısır Turları (6 tur)
    { 
      id: 'egypt-1', 
      category: 'Mısır Turları', 
      title: 'Kahire & Nil Turu', 
      duration: '7 Gün / 6 Gece', 
      price: 500, 
      priceText: '€500', 
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800', 
      rating: 5, 
      features: ['Piramitler', 'Nil Cruise', 'Luxor & Aswan']
    },
    { 
      id: 'egypt-2', 
      category: 'Mısır Turları', 
      title: 'Mısır Klasik Tur', 
      duration: '5 Gün / 4 Gece', 
      price: 370, 
      priceText: '€370', 
      image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800', 
      rating: 5, 
      features: ['Kahire', 'Piramitler', 'Müze Gezisi']
    },
    { 
      id: 'egypt-3', 
      category: 'Mısır Turları', 
      title: 'Mısır & Ürdün Kombine', 
      duration: '9 Gün / 8 Gece', 
      price: 640, 
      priceText: '€640', 
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800', 
      rating: 5, 
      features: ['2 Ülke', 'Petra', 'Ölü Deniz']
    },
    { 
      id: 'egypt-5', 
      category: 'Mısır Turları', 
      title: 'Mısır Kültür Turu', 
      duration: '8 Gün / 7 Gece', 
      price: 570, 
      priceText: '€570', 
      image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800', 
      rating: 5, 
      features: ['Tüm Tapınaklar', 'Nil Kenarı', 'Abu Simbel']
    },
    { 
      id: 'egypt-6', 
      category: 'Mısır Turları', 
      title: 'Mısır Ekonomik Paket', 
      duration: '4 Gün / 3 Gece', 
      price: 270, 
      priceText: '€270', 
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800', 
      rating: 4, 
      features: ['Bütçe Dostu', 'Piramitler', 'Kahire Gezisi']
    }
  ];

  // Kategoriler
  const categories = [
    { value: 'all', label: 'Tüm Turlar', count: allTours.length },
    { value: 'Dubai Turları', label: 'Dubai Turları', count: allTours.filter(t => t.category === 'Dubai Turları').length },
    { value: 'Mısır Turları', label: 'Mısır Turları', count: allTours.filter(t => t.category === 'Mısır Turları').length },
    { value: 'Tayland Turları', label: 'Tayland Turları', count: allTours.filter(t => t.category === 'Tayland Turları').length },
    { value: 'Bali Turları', label: 'Bali Turları', count: allTours.filter(t => t.category === 'Bali Turları').length },
  ];

  // Filtreleme fonksiyonu
  const filteredTours = allTours.filter(tour => {
    // Kategori filtresi
    if (selectedCategory !== 'all' && tour.category !== selectedCategory) return false;
    
    // Fiyat filtresi
    if (selectedPrice !== 'all') {
      if (selectedPrice === 'low' && tour.price > 500) return false;
      if (selectedPrice === 'medium' && (tour.price < 500 || tour.price > 1000)) return false;
      if (selectedPrice === 'high' && tour.price < 1000) return false;
    }
    
    // Süre filtresi
    if (selectedDuration !== 'all') {
      const days = parseInt(tour.duration.split(' ')[0]);
      if (selectedDuration === 'short' && days > 5) return false;
      if (selectedDuration === 'medium' && (days < 6 || days > 8)) return false;
      if (selectedDuration === 'long' && days < 9) return false;
    }
    
    return true;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedDuration('all');
  };

  const FilterPanel = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtreler
        </h3>
        <button 
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Temizle
        </button>
      </div>

      {/* Kategori Filtresi */}
      <div className="mb-6">
        <h4 className="text-gray-700 mb-3">Kategori</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat.value} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="radio"
                name="category"
                value={cat.value}
                checked={selectedCategory === cat.value}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="flex-1">{cat.label}</span>
              <span className="text-sm text-gray-500">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fiyat Filtresi */}
      <div className="mb-6">
        <h4 className="text-gray-700 mb-3">Fiyat Aralığı</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="price"
              value="all"
              checked={selectedPrice === 'all'}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>Tümü</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="price"
              value="low"
              checked={selectedPrice === 'low'}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>€500'e kadar</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="price"
              value="medium"
              checked={selectedPrice === 'medium'}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>€500 - €1.000</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="price"
              value="high"
              checked={selectedPrice === 'high'}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>€1.000+</span>
          </label>
        </div>
      </div>

      {/* Süre Filtresi */}
      <div className="mb-6">
        <h4 className="text-gray-700 mb-3">Tur Süresi</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="duration"
              value="all"
              checked={selectedDuration === 'all'}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>Tümü</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="duration"
              value="short"
              checked={selectedDuration === 'short'}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>1-5 Gün</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="duration"
              value="medium"
              checked={selectedDuration === 'medium'}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>6-8 Gün</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <input
              type="radio"
              name="duration"
              value="long"
              checked={selectedDuration === 'long'}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>9+ Gün</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4 text-center">Tüm Turlar</h1>
          <p className="text-xl text-center text-white/90">
            {filteredTours.length} adet tur bulundu
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2"
          >
            <Filter className="w-5 h-5" />
            Filtreler
          </button>

          {/* Mobile Filter Overlay */}
          {mobileFilterOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileFilterOpen(false)}>
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-4">
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="absolute top-4 right-4"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <FilterPanel />
                </div>
              </div>
            </div>
          )}

          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Tours Grid */}
          <div className="flex-1">
            {filteredTours.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-xl mb-4">Seçtiğiniz filtrelere uygun tur bulunamadı.</p>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${tour.image})` }}
                    />
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {tour.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < tour.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-lg mb-3">{tour.title}</h3>
                      <div className="space-y-2 mb-4">
                        {tour.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="text-xl text-blue-600">{tour.priceText}</div>
                      </div>
                      {tour.detailUrl ? (
                        <Link 
                          to={tour.detailUrl}
                          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors block text-center"
                        >
                          Detayları Gör
                        </Link>
                      ) : (
                        <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                          Detayları Gör
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}