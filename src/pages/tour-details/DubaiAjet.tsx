import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DubaiAjet() {
  const tourDetails = {
    title: 'Dubai Turu 3 Gece AJet Havayolları İle',
    duration: '4 Gün / 3 Gece',
    price: '€550',
    rating: 5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1651284819032-42a925c1b114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGFqZXQlMjBhaXJsaW5lcyUyMGJ1cmolMjBraGFsaWZhJTIwY2l0eXxlbnwxfHx8fDE3NjYwNTA2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Dubai, BAE',
    groupSize: '10-20 kişi',
    departure: 'Her Hafta Cuma'
  };

  const included = [
    'Emirates Havayolları ile İstanbul (IST) - Dubai (DXB) - İstanbul (IST) ekonomik sınıf gidiş dönüş uçak bileti',
    'Havalimanı vergileri',
    'Seçilen otelde 3 gece konaklama - kahvaltı',
    'Alan - Otel - Alan transferleri',
    'Panoramik Dubai şehir turu',
    'Profesyonel Türkçe rehberlik hizmeti',
    'TÜRSAB mesleki sorumluluk sigortası',
    'Seyahat Sağlık Sigortası'
  ];

  const notIncluded = [
    'Yurt dışı çıkış harcı bedeli',
    'Dubai Vizesi',
    'Öğle ve akşam yemekleri',
    'Yemeklerde alınan içecekler',
    '2 gün serbest olarak alınacak olan şehir sabah kahvaltısı',
    'Her türlü kişisel harcamalar ve otel ekstraları',
    'Tur programında belirtilmeyen tüm geziler',
    'Müze ve ören yerleri girişleri',
    'Covid-19 Seyahat & Sağlık Sigortası',
    'Şoför tipleri 5-10 USD / kişi başı (isteğe bağlı)',
    'Şehir Konaklama Vergisi (otel kategorisine göre 10-20 AED/gece)'
  ];

  const program = [
    {
      day: 1,
      title: 'İstanbul - Dubai',
      description: 'AJet Havayolları ile Dubai\'ye hareket. Havalimanında karşılama ve otel transferi. Otel check-in. Akşam serbest zaman.'
    },
    {
      day: 2,
      title: 'Dubai İkonları Şehir Turu',
      description: 'Sabah kahvaltı sonrası Dubai şehir turu. Burj Khalifa ziyareti (124-125. kat), Dubai Mall, Dubai Fountain, Jumeirah Plajı, Burj Al Arab dış görünüm, Palm Jumeirah ve Atlantis Hotel.'
    },
    {
      day: 3,
      title: 'Serbest Gün',
      description: 'Sabah kahvaltı sonrası serbest zaman. İsteğe bağlı turlar: Çöl Safari, Abu Dhabi turu, Dubai Miracle Garden, Global Village veya alışveriş.'
    },
    {
      day: 4,
      title: 'Dubai - İstanbul',
      description: 'Sabah kahvaltı sonrası otel check-out. Havalimanına transfer ve AJet Havayolları ile İstanbul\'a dönüş.'
    }
  ];

  const highlights = [
    'AJet Havayolları ile konforlu uçuş',
    'Dünyanın en yüksek binası Burj Khalifa',
    'Dubai Mall - Dünyanın en büyük alışveriş merkezi',
    'Palm Jumeirah ve Atlantis oteli',
    'Burj Al Arab - 7 yıldızlı otel dış görünüm',
    'Alan - Otel Transferleri',
    'Türkçe rehber eşliğinde güvenli seyahat',
    '4 yıldızlı otel konaklaması'
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
                <div className="text-sm text-gray-500 mb-2">'den başlayan fiyatlarla</div>
                <div className="text-sm text-gray-500">Tarihler hakkında bilgi alınız</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">AJet Havayolları</div>
                    <div className="text-xs text-gray-600">Dahil</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Konaklama</div>
                    <div className="text-xs text-gray-600">3 ve 4 Yıldızlı Oteller</div>
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
                  <p>📞 Telefon: +90 212 123 45 67</p>
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