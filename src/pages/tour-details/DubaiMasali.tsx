import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DubaiMasali() {
  const tourDetails = {
    title: 'Bir Dubai Masalı - Dubai Şehir Turu ve Abra Geçişi Dahil',
    duration: '6 Gün / 5 Gece',
    price: '€499',
    rating: 5,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1761341063556-80cb742411b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMG1hcmluYSUyMGFicmElMjBib2F0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzY2MDUyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Dubai, BAE',
    groupSize: '10-20 kişi',
    departure: 'Her Hafta Cuma'
  };

  const included = [
    'İstanbul (SAW)- Sharjah- İstanbul (SAW) Ajet Hava Yolları Ekonomi Sınıfı Uçak bileti',
    'Seçilecek Oteller kategorilerinde 5 gece oda kahvaltı konaklama',
    'Havaalanı – Otel – Havaalanı Transferleri',
    'Dubai Şehir Turu ve Abra geçişi turu',
    'Resmi Kokartlı Profesyonel Türkçe Rehberlik hizmetleri',
    'TÜRSAB mesleki sorumluluk sigortası'
  ];

  const notIncluded = [
    'Yurtdışı çıkış harcı',
    'Tüm Türkiye ve Ercan İç Hat Bağlantısı',
    'Tüm Müze ve Ören yeri giriş ücretleri',
    'Dubai vizesi (100 Euro) - Yeşil Pasaport sahiplerine vize gerekmemektedir',
    'Paket fiyatına dahil olduğu açıkça belirtilmemiş her türlü hizmet',
    'Tüm ekstra turlar ve misafirlerin şahsi ekstra harcamaları',
    'Tourism Dirham / Şehir konaklama vergisi (Otel kategorisine göre 10-20 AED/gece)',
    'Yemeklerde alınan içecekler ve öğle/akşam yemekleri'
  ];

  const program = [
    {
      day: 1,
      title: 'İstanbul - Dubai',
      description: 'İstanbul Sabiha Gökçen Dış Hatlar gidiş terminali Ajet Havayolları kontuarı önünde saat 18:30\'da buluşma. Bagaj ve bilet işlemlerinin ardından Ajet Hava Yolları VF 221 sayılı tarifeli seferi ile saat 21:30\'da Sharjah\'a uçuş.'
    },
    {
      day: 2,
      title: 'Dubai Şehir Turu - Za\'abeel Palace - Dubai Marina - Abra Geçişi',
      description: 'Dubai yerel saati ile 03:35\'de iniş. Pasaport ve bagaj işlemlerinin ardından konforlu otobusümüze binerek serbest kahvaltı için hareket. Dubai Emiri Sheikh Mohammed Bin Rashid Al Maktoum\'un kışlık sarayı Za\'abeel Palace ziyareti. Dubai Marina\'da dünya\'nın en büyük insan yapımı yat limanını görme. Abra tekneleri ile Deira (Eski Şehir) bölgesini keşif. Old Souk ve Gold Souk çarşılarında alışveriş. Al Seef bölgesinde kahve molası. Burj Al Arab önünde fotoğraf molası. Palmiye Adası ziyareti. Emirates Towers, Sheikh Palace ve Gökdelenler Caddesi panoramik tur. Otel check-in ve geceleme.'
    },
    {
      day: 3,
      title: 'Serbest Gün',
      description: 'Sabah kahvaltısının ardından tüm gün serbest zaman. İsteğe bağlı ekstra turlar: Dhow Cruise Marina Turu (80 Euro), JBR Walk ve Blue Waters (55 Euro), Akşam Yemekli Çöl Safari Turu (90 Euro). Geceleme otelimizde.'
    },
    {
      day: 4,
      title: 'Serbest Gün',
      description: 'Sabah kahvaltısının ardından tüm gün serbest zaman. İsteğe bağlı ekstra turlar: Öğle Yemekli Abu Dhabi & Sheikh Zayed Camii & Yas Adası & Ferrari World (95 Euro), Madinat Jumeirah, Souk Madinat, Burj Khalifa, Dubai Mall ve Fountain Show Turu (55 Euro - Burj Khalifa giriş ücreti dahil değildir). Geceleme otelimizde.'
    },
    {
      day: 5,
      title: 'Serbest Gün',
      description: 'Sabah kahvaltısının ardından odaların boşaltılması ve buluşma saatine kadar serbest zaman. İsteğe bağlı ekstra tur: Dubai Frame & Miracle Garden & Outlet Mall Turu (80 Euro). Dubai Frame fotoğraf molası, Miracle Garden\'da 250 milyon bitki ve 50 milyon çiçek arasında gezinti, Outlet Mall\'da alışveriş.'
    },
    {
      day: 6,
      title: 'Dubai - İstanbul',
      description: 'Serbest zamanın ardından havalimanına transfer. Bagaj ve check-in işlemlerinin tamamlanmasının ardından Ajet Hava Yolları\'nın VF222 sayılı tarifeli seferi ile 04:55\'de İstanbul Sabiha Gökçen Havalimanına hareket. Yerel saat ile 09:30\'da İstanbul\'a varış ve turumuzun sonu.'
    }
  ];

  const highlights = [
    'AJet Havayolları ile konforlu uçuş',
    'Dubai şehir turu ve Abra geçişi dahil',
    'Za\'abeel Palace - Emirin kışlık sarayı',
    'Dubai Marina - Dünyanın en büyük yat limanı',
    'Palmiye Adası ve ünlülerin villaları',
    'Burj Al Arab - 7 yıldızlı otel dış görünüm',
    'Gold Souk ve Old Souk çarşıları',
    'Türkçe rehber eşliğinde güvenli seyahat'
  ];

  const extraTours = [
    {
      title: 'Avantajlı Maxi Ekstra Tur Paketi',
      price: '455 Euro',
      originalPrice: '499 Euro',
      tours: [
        'Dhow Cruise Turu',
        'JBR Walk ve Blue Waters',
        'Akşam Yemekli Çöl Safari Turu',
        'Öğle Yemekli Abu Dhabi & Sheikh Zayed Camii & Yas Adası & Ferrari World',
        'Madinat Jumeirah, Souk Madinat, Burj Khalifa, Dubai Mall ve Fountain Show Turu',
        'Dubai Frame & Miracle Garden & Outlet Mall Turu'
      ]
    },
    {
      title: 'Avantajlı Mini Ekstra Tur Paketi',
      price: '320 Euro',
      originalPrice: '350 Euro',
      tours: [
        'Dhow Cruise Turu (80 Euro)',
        'Öğle Yemekli Abu Dhabi & Sheikh Zayed Camii & Yas Adası & Ferrari World (95 Euro)',
        'Akşam Yemekli Çöl Safari Turu (90 Euro)',
        'Madinat Jumeirah, Souk Madinat, Burj Khalifa, Dubai Mall ve Fountain Show Turu (70 Euro)'
      ]
    }
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

            {/* Extra Tours */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl mb-6">Ekstra Tur Paketleri</h2>
              <div className="space-y-6">
                {extraTours.map((pkg, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl">{pkg.title}</h3>
                      <div className="text-right">
                        <div className="text-2xl text-blue-600">{pkg.price}</div>
                        <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {pkg.tours.map((tour, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-sm">{tour}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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