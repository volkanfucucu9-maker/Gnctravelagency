import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BaliParadise() {
  const tourDetails = {
    title: 'Bali Cennet Adası Turu',
    duration: '7 Gün / 6 Gece',
    price: '€960',
    rating: 5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
    location: 'Bali, Endonezya',
    groupSize: '8-15 kişi',
    departure: 'Her Cumartesi'
  };

  const included = [
    'Uçak bileti (gidiş-dönüş)',
    'Havalimanı transferleri',
    '3-4 yıldızlı otellerde konaklama',
    'Sabah kahvaltısı ve akşam yemeği',
    'Türkçe rehber eşliğinde turlar',
    'Tüm müze ve girişler',
    'Seyahat sigortası'
  ];

  const notIncluded = [
    'Öğle yemekleri',
    'Kişisel harcamalar',
    'İçecekler (bar hariç)',
    'Bahşişler'
  ];

  const program = [
    {
      day: 1,
      title: 'İstanbul - Bali',
      description: 'Havalimanında buluşma ve Bali\'ye hareket. Otel check-in ve serbest zaman.'
    },
    {
      day: 2,
      title: 'Ubud Kültür Turu',
      description: 'Ubud Saray\'ı, Maymun Ormanı, Tegalalang Pirinç Tarlaları gezisi. Geleneksel Bali dansı gösterisi.'
    },
    {
      day: 3,
      title: 'Tanah Lot Tapınağı & Plaj',
      description: 'Ünlü deniz tapınağı Tanah Lot ziyareti. Seminyak plajında serbest zaman ve gün batımı.'
    },
    {
      day: 4,
      title: 'Nusa Penida Adası Turu',
      description: 'Tekne ile Nusa Penida adasına geçiş. Kelingking Beach, Angel\'s Billabong, Broken Beach gezileri.'
    },
    {
      day: 5,
      title: 'Kintamani & Batur Volkanı',
      description: 'Kintamani bölgesi, Batur Volkanı manzarası, kahve plantasyonu ziyareti ve Bali kahvesi tadımı.'
    },
    {
      day: 6,
      title: 'Serbest Gün',
      description: 'Plajda dinlenme, spa, alışveriş veya isteğe bağlı aktiviteler için serbest zaman.'
    },
    {
      day: 7,
      title: 'Bali - İstanbul',
      description: 'Otel check-out ve havalimanına transfer. İstanbul\'a dönüş.'
    }
  ];

  const highlights = [
    'El değmemiş kumsallar ve kristal berraklığında deniz',
    'Ubud\'un mistik tapınakları ve pirinç tarlaları',
    'Nusa Penida adasının eşsiz manzaraları',
    'Geleneksel Bali kültürü ve dansları',
    'Konforlu 3-4 yıldız otel konaklaması',
    'Türkçe rehber eşliğinde güvenli seyahat'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Highlights */}
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

            {/* Program */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl mb-6">Günlük Program</h2>
              <div className="space-y-6">
                {program.map((day) => (
                  <div key={day.day} className="border-l-4 border-blue-600 pl-6 pb-6 last:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {day.day}
                      </div>
                      <h3 className="text-lg">{day.title}</h3>
                    </div>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Not Included */}
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-600 mb-2">Kişi Başı</div>
                <div className="text-4xl text-blue-600 mb-2">{tourDetails.price}</div>
                <div className="text-sm text-gray-500">Kalkış: {tourDetails.departure}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Uçak Bileti</div>
                    <div className="text-xs text-gray-600">Dahil</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Konaklama</div>
                    <div className="text-xs text-gray-600">3-4 Yıldız Otel</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Utensils className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Yemek</div>
                    <div className="text-xs text-gray-600">Her Şey Dahil</div>
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
                  <p>📞 Telefon: +90 543 220 05 43</p>
                  <p>📧 Email: info@gnctravel.com</p>
                  <p>⏰ 7/24 Müşteri Desteği</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}