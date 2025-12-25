import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EgyptBudget() {
  const tourDetails = {
    title: 'Mısır Ekonomik Paket',
    duration: '4 Gün / 3 Gece',
    price: '€270',
    rating: 4,
    reviews: 176,
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1080',
    location: 'Kahire & Giza, Mısır',
    groupSize: '15-30 kişi',
    departure: 'Her gün'
  };

  const included = [
    'Uçak bileti (İstanbul - Kahire gidiş dönüş)',
    'Havalimanı vergileri',
    '3 gece 4* otel konaklaması',
    'Havalimanı-otel transferleri',
    'Türkçe rehberlik hizmeti',
    'Sabah kahvaltıları',
    'Piramitler gezisi ve giriş ücreti',
    'Mısır Müzesi girişi',
    'Seyahat sigortası'
  ];

  const notIncluded = [
    'Mısır vizesi (25 USD - kapıda)',
    'Öğle ve akşam yemekleri',
    'Piramit içi girişler (ekstra)',
    'Ekstra turlar ve aktiviteler',
    'Kişisel harcamalar',
    'Bahşişler'
  ];

  const highlights = [
    'Giza Piramitleri',
    'Büyük Sfenks',
    'Mısır Müzesi',
    'Kahire Panorama',
    'Khan El Khalili Çarşısı',
    'Ekonomik Fiyat',
    'Türkçe Rehber',
    'Merkezi Otel',
    'Her Gün Kalkış'
  ];

  const program = [
    {
      day: 1,
      title: 'İstanbul - Kahire',
      desc: 'Havalimanında buluşma, Kahire\'ye uçuş. Varışta karşılama ve otele transfer. Akşam serbest.'
    },
    {
      day: 2,
      title: 'Piramitler ve Sfenks',
      desc: 'Kahvaltı sonrası Giza Piramitleri gezisi - Khufu, Khafre ve Menkaure. Büyük Sfenks. Panoramik fotoğraflar. Öğleden sonra serbest zaman veya opsiyonel turlar.'
    },
    {
      day: 3,
      title: 'Mısır Müzesi & Çarşı',
      desc: 'Kahvaltı ardından Mısır Müzesi - Tutankhamun hazineleri ve mumyalar. Öğleden sonra Khan El Khalili geleneksel çarşısında alışveriş. Akşam Nil manzarası.'
    },
    {
      day: 4,
      title: 'Kahire - İstanbul',
      desc: 'Kahvaltı sonrası serbest zaman. Uçuş saatine göre havalimanına transfer. İstanbul\'a dönüş.'
    }
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
              <h2 className="text-2xl mb-6">Günlük Program</h2>
              <div className="space-y-4">
                {program.map((day) => (
                  <div key={day.day} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{day.title}</h3>
                      <p className="text-gray-600 text-sm">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="font-semibold text-blue-900 mb-2">💰 Bütçe Dostu Seçenek</h3>
              <p className="text-blue-800 text-sm">
                Bu ekonomik paket, Mısır'ın en önemli yerlerini görmenizi sağlayan bütçe dostu bir seçenektir. 
                Kısa sürede maksimum deneyim! Daha uzun süre kalmak isterseniz, premium paketlerimize göz atın.
              </p>
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
                <div className="text-sm text-green-600 font-semibold mb-2">En Uygun Fiyat!</div>
                <div className="text-sm text-gray-500">Her gün kalkışlar</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Uçak Bileti</div>
                    <div className="text-xs text-gray-600">Gidiş - Dönüş</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Konaklama</div>
                    <div className="text-xs text-gray-600">3 Gece 4* Otel</div>
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
