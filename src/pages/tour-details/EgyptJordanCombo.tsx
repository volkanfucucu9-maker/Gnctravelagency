import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EgyptJordanCombo() {
  const tourDetails = {
    title: 'Mısır & Ürdün Kombine Tur',
    duration: '9 Gün / 8 Gece',
    price: '€640',
    rating: 5,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1080',
    location: 'Mısır & Ürdün',
    groupSize: '15-30 kişi',
    departure: 'Pazartesi, Perşembe'
  };

  const included = [
    'Uçak biletleri (İstanbul - Kahire, Amman - İstanbul)',
    'Havalimanı vergileri',
    'Kahire\'de 3 gece otel konaklaması',
    'Ürdün\'de 4 gece otel konaklaması',
    'Tüm transferler ve ulaşım',
    'Türkçe rehberlik hizmeti',
    'Sabah kahvaltıları',
    'Tüm geziler ve giriş ücretleri',
    'Petra antik kenti tam gün gezisi',
    'Seyahat sigortası'
  ];

  const notIncluded = [
    'Mısır vizesi (25 USD)',
    'Ürdün vizesi (60 USD veya ücretsiz Jordan Pass)',
    'Öğle ve akşam yemekleri',
    'Ekstra turlar',
    'Kişisel harcamalar',
    'Bahşişler'
  ];

  const highlights = [
    'Giza Piramitleri ve Sfenks',
    'Mısır Müzesi',
    'Petra Antik Kenti - Yeni Dünya Harikası',
    'Ölü Deniz - Dünyanın En Düşük Noktası',
    'Wadi Rum Çölü',
    'Amman Şehir Turu',
    'Jerash Antik Kenti',
    '2 Ülke Tek Turda',
    'Türkçe Rehberlik'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px] bg-gray-900">
        <img 
          src={tourDetails.image} 
          alt={tourDetails.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span>{tourDetails.location}</span>
            </div>
            <h1 className="text-5xl mb-4">{tourDetails.title}</h1>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{tourDetails.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{tourDetails.groupSize}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(tourDetails.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2">({tourDetails.reviews} değerlendirme)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl mb-6">Tur Özellikleri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl mb-6">Program Özeti</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">🇪🇬 Mısır Bölümü (3 gün)</h3>
                  <p className="text-gray-700 text-sm">Giza Piramitleri, Sfenks, Mısır Müzesi, Kahire şehir turu ve Khan El Khalili Çarşısı</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold mb-2">🇯🇴 Ürdün Bölümü (5 gün)</h3>
                  <p className="text-gray-700 text-sm">Petra Antik Kenti, Wadi Rum Çölü, Ölü Deniz, Jerash, Amman ve Madaba</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Fiyata Dahil
                </h2>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-xl mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-600" />
                  Fiyata Dahil Değil
                </h2>
                <ul className="space-y-3">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-600 mb-2">Kişi Başı</div>
                <div className="text-4xl text-blue-600 mb-2">{tourDetails.price}</div>
                <div className="text-sm text-gray-500">{tourDetails.departure}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Uçak Biletleri</div>
                    <div className="text-xs text-gray-600">İstanbul - Kahire - Amman</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Konaklama</div>
                    <div className="text-xs text-gray-600">8 Gece Otel</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Utensils className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Yemek</div>
                    <div className="text-xs text-gray-600">Sabah Kahvaltısı</div>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact"
                className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg hover:bg-blue-700 transition-colors mb-3"
              >
                Hemen Rezervasyon Yap
              </Link>
              
              <Link 
                to="/contact"
                className="block w-full border-2 border-blue-600 text-blue-600 text-center py-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Bilgi Al
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>📞 Telefon: +90 543 220 0543</p>
                  <p>📧 Email: gonca@gnctravel.com</p>
                  <p>⏰ Pzt-Cmt: 09:00 – 19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
