import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EgyptCairoNile() {
  const tourDetails = {
    title: 'Kahire & Nil Turu',
    duration: '7 Gün / 6 Gece',
    price: '€500',
    rating: 5,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1080',
    location: 'Kahire, Luxor & Aswan, Mısır',
    groupSize: '15-30 kişi',
    departure: 'Her gün'
  };

  const included = [
    'Uçak bileti (İstanbul - Kahire gidiş dönüş)',
    'Havalimanı vergileri',
    'Kahire\'de 3 gece otel konaklaması',
    '3 gece Nil Cruise gemisinde konaklama',
    'Tüm transferler (özel araç)',
    'Türkçe rehberlik hizmeti',
    'Sabah kahvaltıları',
    'Gemi konaklamasında her şey dahil sistem',
    'Tüm geziler ve giriş ücretleri',
    'Seyahat sigortası'
  ];

  const notIncluded = [
    'Yurtdışı Çıkış Harç Pulu',
    'Vize ücreti (Kapıda alınır - 25 USD)',
    'Kahire\'de öğle ve akşam yemekleri',
    'Ekstra turlar',
    'Kişisel harcamalar',
    'Bahşişler (rehber ve şoför)'
  ];

  const program = [
    {
      day: 1,
      title: 'İstanbul - Kahire',
      description: 'İstanbul Havalimanı\'nda buluşup bilet ve bagaj işlemlerinin ardından Kahire\'ye uçuyoruz. Kahire\'ye varışta havalimanı transferi ve otelimize yerleşme. Akşam serbest zaman.',
      hotel: 'Kahire 4* Otel',
      images: ['https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800']
    },
    {
      day: 2,
      title: 'Piramitler & Sfenks',
      description: 'Kahvaltının ardından Giza Piramitleri gezisi. Büyük Piramit (Khufu/Cheops), Khafre ve Menkaure piramitlerini ziyaret ediyoruz. Ünlü Sfenks\'i görüyoruz. Öğle yemeği sonrası Mısır Müzesi\'ni geziyoruz - Tutankhamun\'un hazineleri ve binlerce antik eser. Akşam Khan El Khalili Çarşısı\'nda alışveriş imkanı.',
      hotel: 'Kahire 4* Otel',
      images: ['https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800', 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800']
    },
    {
      day: 3,
      title: 'Kahire - Aswan - Cruise',
      description: 'Erken kahvaltı sonrası havalimanına transfer ve Aswan\'a uçuş. Aswan\'da cruise gemimize yerleşiyoruz. Öğle yemeği gemide. Öğleden sonra Philae Tapınağı ve Yüksek Baraj gezisi. Akşam yemeği ve konaklama gemide.',
      hotel: 'Nil Cruise Gemisi',
      images: ['https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800']
    },
    {
      day: 4,
      title: 'Abu Simbel (Opsiyonel) - Kom Ombo',
      description: 'Sabah erken saatlerde opsiyonel Abu Simbel Tapınakları gezisi (ek ücret). Gemimiz Kom Ombo\'ya doğru yelken açıyor. Kom Ombo Tapınağı gezisi - çift tanrılı eşsiz mimari. Akşam yemeği gemide, gece Luxor\'a seyir.',
      hotel: 'Nil Cruise Gemisi',
      images: ['https://images.unsplash.com/photo-1568390876842-cfccdef9d6a7?w=800']
    },
    {
      day: 5,
      title: 'Edfu - Luxor',
      description: 'Sabah Edfu\'da Horus Tapınağı gezisi - en iyi korunmuş antik Mısır tapınağı. Gemimiz Luxor\'a doğru devam ediyor. Öğleden sonra Karnak Tapınağı ve Luxor Tapınağı gezileri. Akşam yemeği ve konaklama gemide.',
      hotel: 'Nil Cruise Gemisi',
      images: ['https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800']
    },
    {
      day: 6,
      title: 'Luxor - Kahire',
      description: 'Kahvaltı sonrası Krallar Vadisi gezisi - Tutankhamun\'un mezarı dahil. Hatshepsut Tapınağı ve Memnon Heykelleri. Öğle yemeği sonrası havalimanına transfer ve Kahire\'ye uçuş. Kahire\'de otelimize yerleşme.',
      hotel: 'Kahire 4* Otel',
      images: ['https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800']
    },
    {
      day: 7,
      title: 'Kahire - İstanbul',
      description: 'Kahvaltı sonrası serbest zaman ve alışveriş. Uçuş saatine göre havalimanına transfer. İstanbul\'a dönüş uçuşu.',
      images: ['https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800']
    }
  ];

  const highlights = [
    'Giza Piramitleri ve Sfenks',
    'Mısır Müzesi - Tutankhamun',
    '3 gece lüks Nil Cruise',
    'Karnak ve Luxor Tapınakları',
    'Krallar Vadisi',
    'Philae ve Kom Ombo Tapınakları',
    'Edfu Horus Tapınağı',
    'Türkçe rehberlik',
    'Her şey dahil cruise sistem'
  ];

  const extraTours = [
    { name: 'Abu Simbel Tapınakları', price: '90 USD' },
    { name: 'Nil\'de Yelkenli Tekne (Felucca)', price: '30 USD' },
    { name: 'Ses ve Işık Gösterisi', price: '40 USD' },
    { name: 'Mısır Geleneksel Akşam Yemeği', price: '35 USD' }
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
                    <p className="text-gray-600 mb-2">{day.description}</p>
                    {day.hotel && (
                      <p className="text-sm text-blue-600 mb-4">🏨 Konaklama: {day.hotel}</p>
                    )}
                    {day.images && day.images.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        {day.images.map((img, idx) => (
                          <img 
                            key={idx} 
                            src={img} 
                            alt={`${day.title} ${idx + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Tours */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl mb-6">Ekstra Turlar (Opsiyonel)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extraTours.map((tour, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 text-sm">{tour.name}</span>
                    <span className="text-blue-600">{tour.price}</span>
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
                <div className="text-sm text-gray-500 mb-2">'dan başlayan fiyatlarla</div>
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
                    <div className="text-xs text-gray-600">3 Gece Otel + 3 Gece Cruise</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Utensils className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Yemek</div>
                    <div className="text-xs text-gray-600">Kahvaltı + Cruise Her Şey Dahil</div>
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
