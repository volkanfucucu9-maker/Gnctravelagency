import { useState } from 'react';
import { TourPackage } from '../components/TourPackage';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export function Packages() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedDuration, setSelectedDuration] = useState('Tümü');
  const [priceRange, setPriceRange] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Tümü', 'Plaj & Deniz', 'Macera', 'Kültür & Tarih', 'Lüks', 'Şehir Turları', 'Doğa'];
  const durations = ['Tümü', '1-3 Gün', '4-7 Gün', '8-14 Gün', '15+ Gün'];
  const priceRanges = ['Tümü', '€550 - €1.100', '€1.100 - €1.650', '€1.650+'];

  const allPackages = [
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
      category: 'Plaj & Deniz',
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
      category: 'Lüks',
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
      category: 'Macera',
    },
    {
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NTA5NDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Paris Romantik Kaçamak',
      description: 'Aşk şehrinde romantik bir hafta sonu geçirin. Eyfel Kulesi, Louvre ve daha fazlası.',
      duration: '4 Gün',
      groupSize: '2-4 kişi',
      rating: 4.9,
      reviews: 312,
      price: '€970',
      departure: 'Cum, Pzt',
      category: 'Şehir Turları',
    },
    {
      image: 'https://images.unsplash.com/photo-1760199078626-d295728e9b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2NTE4Nzg4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Afrika Safari Macerası',
      description: 'Vahşi yaşamı keşfedin ve Afrika\'nın büyüleyici doğasında unutulmaz anlar yaşayın.',
      duration: '12 Gün',
      groupSize: '8-16 kişi',
      rating: 4.7,
      reviews: 178,
      price: '€2.425',
      departure: 'Cumartesi',
      category: 'Macera',
    },
    {
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzY1MTg3ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'New York Şehir Turu',
      description: 'Uyumayan şehirde ikonik yerler, müzeler ve Broadway gösterileri deneyimi.',
      duration: '6 Gün',
      groupSize: '4-10 kişi',
      rating: 4.8,
      reviews: 267,
      price: '€1.430',
      departure: 'Her gün',
      category: 'Şehir Turları',
    },
    {
      image: 'https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzY1MTUyMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'İzlanda Kuzey Işıkları',
      description: 'Kuzey ışıklarını izleyin, sıcak su kaynaklarında yüzün ve buzulları keşfedin.',
      duration: '8 Gün',
      groupSize: '6-12 kişi',
      rating: 5.0,
      reviews: 203,
      price: '€1.835',
      departure: 'Salı, Cuma',
      category: 'Doğa',
    },
    {
      image: 'https://images.unsplash.com/photo-1745311069169-28192965b671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjUxMDQwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Bali Kültür & Yoga Retreat',
      description: 'Bali\'nin manevi atmosferinde yoga, meditasyon ve kültürel keşif.',
      duration: '9 Gün',
      groupSize: '4-8 kişi',
      rating: 4.9,
      reviews: 145,
      price: '€1.160',
      departure: 'Pazar',
      category: 'Kültür & Tarih',
    },
    {
      image: 'https://images.unsplash.com/photo-1546180132-8267c4c5bdd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBza2lpbmd8ZW58MXx8fHwxNzY1MTg3ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'İsviçre Alpleri Kayak Turu',
      description: 'Dünya standartlarında pist ve muhteşem dağ manzaralarıyla unutulmaz bir kayak tatili.',
      duration: '7 Gün',
      groupSize: '6-14 kişi',
      rating: 4.8,
      reviews: 198,
      price: '€1.890',
      departure: 'Cumartesi',
      category: 'Macera',
    },
    {
      image: 'https://images.unsplash.com/photo-1645731285912-b64e36194ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdmFjYXRpb258ZW58MXx8fHwxNzY1MTg3ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Akdeniz Cruise Turu',
      description: '7 gün boyunca Akdeniz\'in en güzel limanlarını keşfedin. Her şey dahil lüks deneyim.',
      duration: '7 Gün',
      groupSize: '100+',
      rating: 4.6,
      reviews: 421,
      price: '€1.620',
      departure: 'Pazar',
      category: 'Lüks',
    },
    {
      image: 'https://images.unsplash.com/photo-1640871426525-a19540c45a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXxlbnwxfHx8fDE3NjUxNjUxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tokyo & Kyoto Kültür Turu',
      description: 'Japonya\'nın modern ve geleneksel yüzünü keşfedin. Tapınaklar, bahçeler ve teknoloji.',
      duration: '11 Gün',
      groupSize: '8-15 kişi',
      rating: 4.9,
      reviews: 289,
      price: '€2.130',
      departure: 'Pazartesi',
      category: 'Kültür & Tarih',
    },
    {
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY1MTAwODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Yunan Adaları Turu',
      description: 'Santorini, Mykonos ve Atina\'yı kapsayan muhteşem Yunan adaları turu.',
      duration: '8 Gün',
      groupSize: '10-20 kişi',
      rating: 4.8,
      reviews: 276,
      price: '€1.485',
      departure: 'Perşembe',
      category: 'Plaj & Deniz',
    },
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
      else if (selectedDuration === '15+ Gün') matchesDuration = days >= 15;
    }

    let matchesPrice = true;
    if (priceRange !== 'Tümü') {
      const price = parseInt(pkg.price.replace(/[^\d]/g, ''));
      if (priceRange === '€550 - €1.100') matchesPrice = price >= 550 && price <= 1100;
      else if (priceRange === '€1.100 - €1.650') matchesPrice = price >= 1100 && price <= 1650;
      else if (priceRange === '€1.650+') matchesPrice = price >= 1650;
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
                  placeholder="Paket ara... (örn: Paris, safari, cruise)"
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
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors">
            Özel Paket Talebi
          </button>
        </div>
      </section>
    </div>
  );
}