import { MapPin, Calendar, Users, Star, CheckCircle, X, Plane, Hotel, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

export function KesfetTayland() {
  const tourDetails = {
    title: 'Keşfet Tayland Bangkok Pattaya Phuket Turu',
    duration: '9 Gün / 7 Gece',
    price: '€1499',
    rating: 5,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1080',
    location: 'Bangkok, Pattaya & Phuket, Tayland',
    groupSize: '10-25 kişi',
    departure: 'Belirli Tarihler'
  };

  const included = [
    'Mahan Havayolları ile İstanbul - Tahran-Bangkok-Tahran-İstanbul gidiş dönüş ekonomi sınıfı uçak biletleri',
    'Yerel Havayolları ile Pattaya-Phuket-Bangkok Gidiş Dönüş Uçak Biletleri',
    'Uçak içi ücretsiz ikramlar',
    'Havalimanı vergileri',
    'Bangkok Şehir Turu',
    'Havalimanı - Otel - Havalimanı Transferleri',
    'Bangkok 2 Gece + Pattaya 2 Gece + Phuket 3 Gece Oda Kahvaltı Konaklamalar',
    'Yerel Rehberlik hizmeti (İngilizce)',
    '+10 Kişi Olması durumunda Türkçe Rehberlik Hizmeti'
  ];

  const notIncluded = [
    'Yurtdışı çıkış harcı (150 TL)',
    'Seyahat sağlık ve Covid-19 sigortası (50 EUR)',
    'Kişisel harcamalar',
    'Extra Turlar',
    'Öğle ve akşam yemekleri',
    'Vize işlemleri'
  ];

  const program = [
    {
      day: 1,
      title: 'İstanbul - Tahran',
      description: 'İstanbul Yeni Havalimanı Dış Hatlar gidiş terminali Mahan Havayolları kontuarı önünde saat 08:15\'te buluşma. Bagaj ve pasaport işlemlerimizi takiben Mahan Havayollarının W5113 Sefer sayılı uçuşu ile saat 11:00\'te Tahran\'a hareket ediyoruz. Saat 14:30\'da Tahran\'a varış. Ardından Mahan Havayollarının W5051 tarifeli seferi ile Saat 21:40\'da Bangkok\'a hareket.',
      images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800']
    },
    {
      day: 2,
      title: 'Tahran - Bangkok',
      description: 'Sabah uçakta alacağımız kahvaltımızın ardından yerel saat ile 08:20\'de Bangkok Suvarnabhumi Havalimanına varış. Alanda bekleyen rehberimiz ile buluşma ve özel araçlarımız ile Bangkok şehir turu için hareket. Bangkok panoramik şehir turunda Altın Buddha tapınağı, çiçek pazarı, Çin mahallesi, parlamento binası, demokraki anıtı görülecek yerlerden bazılarıdır. Bu turumuz esnasında hem Bangkok\'un egzotik güzelliğini hem de Tayland\'ı derinden etkileyen Budizm\'i daha yakından tanıma fırsatımız olacaktır. Tur bitiminde otelimize transfer, oda dağılımı ve yerleşme. Akşam dileyen misafirlerimiz ekstra olarak Bangkok Kanallar Turu (25 EUR) veya Baiyoke Sky & Asiatique Riverfront Turu (50 EUR) katılabilirler.',
      images: ['https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800', 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800']
    },
    {
      day: 3,
      title: 'Bangkok Serbest Gün',
      description: 'Sabah kahvaltısının ardından serbest zaman. Dileyen misafirlerimiz gün içerisinde extra olarak düzenlenecek Yüzen Çarşı Turu (50 EUR) katılabilirler. Bu turumuzda Bangkok\'un dışına çıkarak yol üzerinde ilk önce dünyaca tanınmış Siam İkizlerinin doğduğu Samut Songkram kasabasında bir Hindistan cevizi çiftliğine uğruyoruz. Burada Hindistan cevizi ağacından Tay halkının nelerde faydalandıkları hakkında bilgi alıp, bu ağaçtan yapılmış hediyelik eşyaları görüyoruz. Akşam ise Chao Praya Dinner Cruise Turu (50 EUR) ile Uzakdoğu\'nun Venedik\'i olarak bilinen Bangkok\'un krallar nehri Chao Praya üzerinde canlı müzikli akşam yemeği keyfi.',
      images: ['https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800']
    },
    {
      day: 4,
      title: 'Bangkok - Pattaya',
      description: 'Sabah kahvaltımızın ardından Pattaya\'ya hareket ediyoruz. Kraliyet ailesine ait olan Dünyaca ünlü mücevher fabrikası ziyareti ve Tayland\'ın en ünlü eğlence beldesi olan Pattaya\'ya varış. Otelimize transfer ve serbest zaman. Dileyen misafirler ekstra olarak düzenlenecek Fil Safarisi Turu (35 EUR), Timsah Çiftliği Turu (20 EUR) veya akşam dünyaca ünlü Alcazar Show Turu (35 EUR) katılabilirler.',
      images: ['https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800']
    },
    {
      day: 5,
      title: 'Pattaya Serbest Gün',
      description: 'Sabah kahvaltımızın ardından serbest zaman. Arzu eden misafirlerimiz extra olarak düzenlenecek Mercan Kayalıkları ile ünlü MERCAN ADASI Turu (50 EUR) katılabilirler. Sinirsiz güneş ve okyanus keyfi... Pattaya sahilinden özel sürat teknelerimizle, palmiye ağaçları arasında mercan tozlarından oluşmuş beyaz kumsalı ile bütün gün turkuaz sularında yüzebileceğimiz Mercan adasına gidiyoruz. Öğle yemeği ızgara balık çoban salata ve tropik meyvelerden oluşuyor.',
      images: ['https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800']
    },
    {
      day: 6,
      title: 'Pattaya - Phuket',
      description: 'Sabah kahvaltısının ardından rehberimizin belirteceği saatte havalimanı transferimiz gerçekleşiyor. Bilet ve Bagaj işlerimizin ardından yerel havayolları ile Phuket\'e yaklaşık 1.5 saat sürecek keyifli yolculuğumuz başlıyor. Phuket\'e varış ve bizleri bekleyen özel aracımız ile otelimize transfer oluyoruz. Dileyen misafirlerimiz ile akşam Ekstra olarak düzenlenecek Siam Niramit Show Turu (Akşam Yemekli, 60 EUR) katılabilirsiniz. Tayland kültür ve tarihini eşsiz kareografilerle izleyicilerinin beğenisine sunan Siam Niramit Show, Guinness Rekorlar kitabında yerini almış devasa sahnesi, 150\'nin üzerindeki dansçı kadrosu ve dünya üzerindeki en son sahne teknolojisi ile unutulmaz bir akşam vadediyor.',
      images: ['https://images.unsplash.com/photo-1598466259189-534a05c874be?w=800']
    },
    {
      day: 7,
      title: 'Phuket - James Bond Adası',
      description: 'Sabah kahvaltısından sonra serbest zaman. Dileyen misafirlerimiz ekstra olarak 07.30 hareket ile yapılacak öğle yemekli James Bond Adası ve Kano gezintileri Turuna (70 EUR) katılabilirler. Otantik tekneler ile James Bond Adasına yapacağımız yolculuğumuz esnasında dünyanın en güzel jeolojik yapılarından olan kaya adacıklarını görme fırsatına sahip olacağız. Adaya varışımızı takiben James Bond filminin çevrildiği yerleri görme ve alışveriş yapma imkanını da bulacağız. Geceleme otelinizde.',
      images: ['https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800']
    },
    {
      day: 8,
      title: 'Phuket - Phi Phi Adası',
      description: 'Sabah kahvaltısından sonra serbest zaman. Dileyen misafirlerimiz extra olarak Phi Phi Adası Turu (70 EUR) katılabilirler. Tayland\'ın belki de en egzotik adasına özel sürat teknesi ile tam günlük bir gezi düzenliyoruz. Sürat teknelerimizle Phuket\'in yakınındaki iki cennet mercan adasından ilki Phi Phi Don\'a hızlı bir şekilde ulaşıyoruz. Maymun Plajı\'nda Makak maymunlarını görüyor ve binlerce renkli balık ile yüzme ve şnorkel imkanı buluyoruz. Palmiye ağaçları ile bezenmiş kumsalı ve tertemiz turkuaz rengi deniziyle Hollywood yıldızı Leonardo Di Caprio\'nun The Beach filminin bazı bölümlerinin çekildiği Maya Bay\'de denize girmek ve güneşlenmek için vaktimiz de var. Geceleme otelinizde.',
      images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800']
    },
    {
      day: 9,
      title: 'Phuket - Bangkok - Tahran - İstanbul',
      description: 'Sabah rehberimizin belirteceği saatte havalimanı transferimiz gerçekleşiyor. Bilet ve Bagaj işlerimizin ardından, Mahan Havayolları W5050 sefer sayılı tarifeli uçuşu ile saat 22:20\'de Tahran\'a hareket. Yerel saat ile 02:15\'de Tahran\'a varış. Sonrasında Mahan Havayollarının tarifeli uçuşu ile saat 06:30\'da İstanbul\'a hareket ediyoruz. 09:30\'da İstanbul Yeni Havalimanına varış ve turumuzun sonu.',
      images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800']
    }
  ];

  const highlights = [
    'Mahan Havayolları ile konforlu uçuş',
    'Bangkok panoramik şehir turu - Altın Buddha tapınağı',
    'Kraliyet ailesine ait mücevher fabrikası ziyareti',
    '3 Destinasyon: Bangkok + Pattaya + Phuket',
    'Bangkok 2 Gece + Pattaya 2 Gece + Phuket 3 Gece',
    'İç hat uçuşları dahil',
    'Tüm havalimanı transferleri',
    'Profesyonel rehberlik hizmeti'
  ];

  const extraTours = [
    { name: 'Bangkok Kanallar Turu', price: '25 EUR' },
    { name: 'Baiyoke Sky & Asiatique Riverfront', price: '50 EUR' },
    { name: 'Yüzen Çarşı Turu', price: '50 EUR' },
    { name: 'Chao Praya Dinner Cruise', price: '50 EUR' },
    { name: 'Fil Safarisi Turu', price: '35 EUR' },
    { name: 'Timsah Çiftliği Turu', price: '20 EUR' },
    { name: 'Alcazar Show Turu', price: '35 EUR' },
    { name: 'Mercan Adası Turu', price: '50 EUR' },
    { name: 'Siam Niramit Show (Akşam Yemekli)', price: '60 EUR' },
    { name: 'James Bond Adası & Kano (Öğle Yemekli)', price: '70 EUR' },
    { name: 'Phi Phi Adası Turu', price: '70 EUR' }
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
                    <p className="text-gray-600 mb-4">{day.description}</p>
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
                    <span className="text-gray-700">{tour.name}</span>
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
                <div className="text-sm text-gray-500 mb-2">'den başlayan fiyatlarla</div>
                <div className="text-sm text-gray-500">Tarihler hakkında bilgi alınız</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Mahan Havayolları</div>
                    <div className="text-xs text-gray-600">İç hat uçuşları dahil</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Hotel className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm">Konaklama</div>
                    <div className="text-xs text-gray-600">7 Gece - 3 Destinasyon</div>
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