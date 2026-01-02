import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BaliUbudWonderland() {
  const tourDetails = {
    title: 'Harikalar Diyarı Bali - Ubud Turu Rotası',
    duration: '8 Gün / 6 Gece',
    price: '€1499',
    rating: 5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1080',
    location: 'Bali & Ubud, Endonezya',
    groupSize: '10-25 kişi',
    departure: 'Belirli Tarihler'
  };

  const included = [
    'Türk Havayolları ile İstanbul – Denpasar ekonomi sınıf uçak bileti',
    'Havalimanı vergileri',
    'Bali\'de seçilen otel kategorisinde 4 gece oda kahvaltı konaklama',
    'Ubud\'da seçilen otel kategorisinde 2 gece oda kahvaltı konaklama',
    'Havalimanı-otel-havalimanı transferleri',
    'Türkçe rehberlik ve asistanlık hizmetleri',
    'Otel ve şehir vergileri',
    'TURSAB zorunlu mesleki sorumluluk sigortası',
    'Seyahat ve sağlık sigortası (65 yaş üzeri sürprim uygulanır)'
  ];

  const notIncluded = [
    'Yurtdışı Çıkış Harç Pulu',
    'Programda belirtilmeyen tüm yemekler',
    'Bali Giriş Vergisi (10 USD)',
    'Ekstra turlar ve programda belirtilmeyen yemekler',
    'Vize ücreti (Kapıda Vize - 35 USD)',
    'Covid-19 Sigortası',
    'Şoför tipleri 5-10 USD / kişi başı (isteğe bağlı)'
  ];

  const program = [
    {
      day: 1,
      title: 'İstanbul - Bali - Ubud',
      description: 'İstanbul Havalimanı Dış Hatlar Gidiş Terminali\'nde buluşup, bilet, bagaj ve biniş işlemlerinin ardından Türk Havayolları\'na ait tarifeli sefer ile Bali uçuşumuza başlıyoruz. Yerel saat ile akşam vaktine doğru Bali\'ye varıyor ve bizi bekleyen özel aracımız ile Ubud\'daki otelimize transfer oluyoruz.',
      hotel: 'Element Ubud Hotel 4* Vb',
      images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800']
    },
    {
      day: 2,
      title: 'Ubud - Kintamani Volkanı (Opsiyonel)',
      description: 'Kahvaltının ardından serbest gün. Dileyen misafirlerimiz opsiyonel olarak düzenlenecek Kintamani (Volkan) Turuna (Öğle Yemekli - 95 USD) katılabilirler. Bu turumuzda ilk olarak Bali\'nin yerel dansı olan "Barong Dansını" izlemek üzere Batubulan köyüne hareket ediyoruz. İyi ile kötünün mücadelesinin anlatıldığı bu güzel performansın ardından sanatçılar köyü Celuk\'a hareket ediyoruz. Celuk\'ta gümüş ve ahşabın maharetli ellerde nasıl birer sanat eserine dönüştüğünü görme imkanı bulacağız. Ardından Batur Volkanı\'nın eşsiz güzelliğini görmek ve krater gölü manzarası eşliğinde öğle yemeğimizi almak üzere Kintamani\'ye gidiyoruz. Yemeğin ardından Kutsal Su Tapınağı olarak da bilinen Tirta Empul tapınağını ziyaret ediyoruz. Tapınak gezimiz sonrası Gunung Kawi Kraliyet anıtlarını ziyaret ediyoruz. Gezilerimizin ardından Tegalalang pirinç teraslarını görme imkanı buluyoruz.',
      hotel: 'Element Ubud Hotel 4* Vb',
      images: ['https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800']
    },
    {
      day: 3,
      title: 'Ubud - Kutsal Maymun Ormanı - Bali',
      description: 'Kahvaltının ardından odalarımızı boşaltıyor ve Bali\'de bulunan otelimize doğru hareket edeceğiz. Dileyen misafirlerimiz opsiyonel olarak düzenlenecek Kutsal Maymun Ormanı ve Tapınaklar turuna (Öğle Yemekli – 95 USD) katılabilirler. Turumuzda öncelikle Bali sanatını daha yakından tanımak üzere Singapadu köyüne gidiyoruz. Ardından Pura Dalem Agung Padangtegal tapınağını ve ölü yakma seramonilerinin de gerçekleştiği kutsal bahar hamamı tapınağını ziyaret etmek üzere Kutsal Maymun Ormanı\'na doğru yola çıkıyoruz. Ziyaretlerimizi gerçekleştirip yemeğimizi almak üzere yerel bir restorana gidiyoruz. Yemek sonrasında eşsiz güzellikteki mimarisi ile ünlü Pura Saraswati tapınağını ziyaret ediyoruz. Bu turların ardından bize görsel bir şölen sunan Kanto Lampo Şelalesini ziyaret edeceğiz. Ardından farklı hediyelik eşya seçenekleri bulabileceğiniz Ubud Pazarına gidiyoruz.',
      hotel: 'Sol By Melia Kuta Bali 4* Vb',
      images: ['https://images.unsplash.com/photo-1545389336-cf090694435e?w=800']
    },
    {
      day: 4,
      title: 'Bali - Serbest Gün / Bali Esintileri (Opsiyonel)',
      description: 'Kahvaltının ardından serbest gün. Tüm gün denizin keyfini çıkarıyoruz. Dileyen misafirlerimiz opsiyonel olarak düzenlenecek "Bali Esintileri" (Öğle Yemekli – 95 USD) turuna katılabilirler. Otelimizden Klungkung bölgesine doğru hareket ediyoruz. İlk ziyaret noktamız Kerta Gosa antik mahkeme binası. Ziyaretimiz sonrası yolculuğumuza eşsiz manzaralar eşliğinde Bukit Jambul bölgesine doğru devam ediyoruz. Bali Hinduizmi\'nin Ana Tanrıçası Besakih tapınağını ziyaret edip, Hinduizm ile ilgili detaylı bilgi ediniyoruz. Yerel bir restoranda alacağımız yemeğin ardından meşhur Luwak kahvesinin ve Endonezya baharatlarının yetiştiği tarlaları ziyaret ediyoruz. Ardından Bali\'nin en güzel tapınaklarından olan, Bangli Krallığı\'nın merkez tapınağı Kehen\'i ziyaret ediyoruz. Son durağımız geleneksel kapıları ile ünlü Penglipuran Köyü olacak.',
      hotel: 'Sol By Melia Kuta Bali 4* Vb',
      images: ['https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800']
    },
    {
      day: 5,
      title: 'Bali - Beach Club & Tanah Lot (Opsiyonel)',
      description: 'Kahvaltının ardından serbest gün. Dileyen misafirlerimiz opsiyonel olarak düzenlenecek Beach Club & Tanah Lot Turu\'na (95 USD) katılabilirler. Sabah otelimizden kısa bir yolculukla ulaşacağımız ve gün boyu Bali\'nin eşsiz okyanus keyfinden faydalanabileceğimiz Beach Klübümüzde, gün içinde Su kaydırağı, çeşitli su sporları gibi aktivitelerden de faydalabilirsiniz. Beach Klübe giriş esnasında plaj havlusu ve barda kullanabileceğiniz 10$ karşılığı kredi kuponları verilecektir. Öğleden sonra rehberimizin belirleyeceği saatte buluşuyor ve güneşin okyanus üzerinde batışını izlemek için Tanah Lot Tapınağına gideceğiz. Denizle çevrili Tanah Lot tapınağında gün batımının ve nefes kesen doğa manzarası tadını çıkardıktan sonra dinlenmek üzere otelimize dönüyoruz.',
      hotel: 'Sol By Melia Kuta Bali 4* Vb',
      images: ['https://images.unsplash.com/photo-1532186651327-6ac23687d189?w=800']
    },
    {
      day: 6,
      title: 'Bali - Nusa Penida Adası (Opsiyonel)',
      description: 'Kahvaltının ardından serbest gün. Dileyen misafirlerimiz opsiyonel olarak düzenlenecek olan Nusa Penida Adası Turuna (75 USD) katılabilirler. Turumuz boyunca adanın güney bölgesinde bulunan muhteşem plajlara ve doğasına şahit olacaksınız. Kelingking Plajı, Nusa Penida Adası\'nın güneybatı kıyısındaki Bunga Mekar köyünde tenha ve doğal bir plajdır. Adanın en popüler yerlerinden biri, devasa dalgaların çarptığı bitkilerle kaplı kireçtaşı bir burundur. Ardından Broken Beach\'e devam ediyoruz. Broken Beach, Nusa Penida\'nın güneybatı kenarındaki başka bir doğal kıyı oluşumudur. Ve son uğrayacağımız yer sonsuzluk havuzu olarak da bilinen Angel Billabong. Geziniz boyunca dolambaçlı sokaklar ve doğal kırsal bir manzara size eşlik edecek.',
      hotel: 'Sol By Melia Kuta Bali 4* Vb',
      images: ['https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800']
    },
    {
      day: 7,
      title: 'Bali - Uluwatu Tapınağı (Opsiyonel) - İstanbul',
      description: 'Kahvaltının ardından serbest zamanınız olacak. Dileyen misafirlerimiz ile havalimanı transferine kadar "Uluwatu Tapınağı" (55 USD) turuna katılabilirler. Uluwatu Tapınağı\'na gitmek üzere hareket edeceğiz. Deniz seviyesinden 100 mt yüksekte bulunan, etrafı ormanlarla çevrili bu güzel tapınağı gezdikten sonra Denpasar havalimanına transfer oluyoruz. Havalimanına varışımızı takiben check-in işlemlerimizi gerçekleştiriyoruz.',
      images: ['https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800']
    },
    {
      day: 8,
      title: 'İstanbul Varış',
      description: 'Türk Havayolları tarifeli seferi ile İstanbul\'a hareket ediyoruz. İstanbul\'a varış ve Turumuzun sonu, bir sonraki turumuzda görüşmek üzere.',
      images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800']
    }
  ];

  const highlights = [
    'Türk Havayolları ile konforlu uçuş',
    'Ubud 2 Gece + Bali 4 Gece konaklama',
    'Barong Dansı gösterisi',
    'Batur Volkanı ve Krater Gölü',
    'Kutsal Maymun Ormanı',
    'Tegalalang Pirinç Terasları',
    'Tanah Lot ve Uluwatu Tapınakları',
    'Nusa Penida Adası imkanı',
    'Türkçe rehberlik hizmeti'
  ];

  const extraTours = [
    { name: 'Kintamani Volkan Turu (Öğle Yemekli)', price: '95 USD' },
    { name: 'Kutsal Maymun Ormanı & Tapınaklar (Öğle Yemekli)', price: '95 USD' },
    { name: 'Bali Esintileri Turu (Öğle Yemekli)', price: '95 USD' },
    { name: 'Beach Club & Tanah Lot Turu', price: '95 USD' },
    { name: 'Nusa Penida Adası Turu', price: '75 USD' },
    { name: 'Uluwatu Tapınağı Turu', price: '55 USD' }
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
                <div className="text-sm text-gray-500">Tarihler hakkında bilgi alınız</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Türk Havayolları</div>
                    <div className="text-xs text-gray-600">Gidiş - Dönüş</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Konaklama</div>
                    <div className="text-xs text-gray-600">6 Gece - Ubud & Bali</div>
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