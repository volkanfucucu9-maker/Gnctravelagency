import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EgyptCulture() {
  const tourDetails = {
    title: 'Mısır Kültür Turu',
    duration: '8 Gün / 7 Gece',
    price: '€570',
    rating: 5,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1080',
    location: 'Kahire, Luxor, Aswan & Abu Simbel',
    groupSize: '15-30 kişi',
    departure: 'Salı, Cuma'
  };

  const included = [
    'Uçak biletleri (İstanbul - Kahire, iç hatlar dahil)',
    'Havalimanı vergileri',
    '7 gece 5* otel konaklaması',
    'Tüm transferler (özel klimalı araç)',
    'Türkçe profesyonel rehberlik',
    'Sabah kahvaltıları',
    'Tüm tapınak ve müze giriş ücretleri',
    'Abu Simbel gezisi',
    'Nil kenarı yemekleri (3 öğün)',
    'Seyahat sigortası'
  ];

  const notIncluded = [
    'Mısır vizesi (25 USD)',
    'Bazı öğle ve akşam yemekleri',
    'Mumya odası girişi (ekstra 200 EGP)',
    'Kişisel harcamalar',
    'Ekstra aktiviteler',
    'Bahşişler (rehber ve şoför)'
  ];

  const highlights = [
    'Giza Piramitleri Kompleksi',
    'Mısır Müzesi - En Büyük Koleksiyon',
    'Abu Simbel Tapınakları',
    'Karnak Tapınağı - En Büyük Tapınak',
    'Luxor Tapınağı',
    'Krallar Vadisi',
    'Hatshepsut Tapınağı',
    'Philae Tapınağı',
    'Edfu Horus Tapınağı',
    'Kom Ombo Çift Tapınağı',
    'Nil Kenarı Deneyimi',
    'Tüm Önemli Tapınaklar'
  ];

  const program = [
    { day: 1, title: 'İstanbul - Kahire', desc: 'Gece yarısı kalkış, Kahire varış ve otel.' },
    { day: 2, title: 'Piramitler & Mısır Müzesi', desc: 'Giza, Sfenks ve Tutankhamun hazineleri.' },
    { day: 3, title: 'Kahire - Aswan', desc: 'Uçuşla Aswan, Philae Tapınağı ve Yüksek Baraj.' },
    { day: 4, title: 'Abu Simbel', desc: 'Erken kalkış ile Abu Simbel dev tapınakları gezisi.' },
    { day: 5, title: 'Kom Ombo & Edfu', desc: 'Çift tanrılı Kom Ombo ve en iyi korunmuş Edfu tapınakları.' },
    { day: 6, title: 'Luxor Doğu Yakası', desc: 'Karnak ve Luxor tapınakları, gece Luxor.' },
    { day: 7, title: 'Luxor Batı Yakası - Kahire', desc: 'Krallar Vadisi, Hatshepsut, akşam Kahire uçuşu.' },
    { day: 8, title: 'Kahire - İstanbul', desc: 'Serbest zaman ve dönüş uçuşu.' }
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
                    <div className="text-sm">Uçak Bileti</div>
                    <div className="text-xs text-gray-600">Gidiş - Dönüş + İç Hat</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Konaklama</div>
                    <div className="text-xs text-gray-600">7 Gece 5* Otel</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Utensils className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Yemek</div>
                    <div className="text-xs text-gray-600">Kahvaltı + Bazı Öğünler</div>
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
