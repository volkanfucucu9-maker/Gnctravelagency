import { FileText, Clock, CheckCircle2, Globe, Shield, Users, ArrowRight, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import exampleImage from 'figma:asset/3c41d0a7b0e544fca7dcadf3133a19df82439f0e.png';

export function Visa() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    passportStatus: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Başvurunuz alındı! En kısa sürede size dönüş yapacağız.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const visaServices = [
    {
      icon: FileText,
      title: 'Belge Hazırlama',
      description: 'Tüm vize başvuru belgelerinizi sizin için hazırlıyoruz. Eksik evrak konusunda destek sağlıyoruz.',
    },
    {
      icon: Clock,
      title: 'Hızlı İşlem',
      description: 'Vize başvurularınızı en hızlı şekilde tamamlıyor ve takip ediyoruz.',
    },
    {
      icon: CheckCircle2,
      title: 'Onay Garantisi',
      description: 'Yüksek onay oranı ile profesyonel vize danışmanlığı hizmeti sunuyoruz.',
    },
    {
      icon: Globe,
      title: 'Tüm Ülkeler',
      description: 'Dünyanın her ülkesi için vize başvuru desteği sağlıyoruz.',
    },
    {
      icon: Shield,
      title: 'Güvenli Süreç',
      description: 'Belgeleriniz güvenli bir şekilde işlenir ve gizliliğiniz korunur.',
    },
    {
      icon: Users,
      title: 'Uzman Ekip',
      description: 'Deneyimli vize danışmanlarımız her adımda yanınızda.',
    },
  ];

  const passportRequirements = [
    'Biyometrik 2 adet fotoğrafınız',
    'TC Kimlik Kartı veya nüfus cüzdanınız',
    'Varsa eski pasaportunuz',
    'Öğrenci belgesi (Harçsız pasaport talep edenler için)',
    'Ergin olmayanlar veya kısıtlılar için muvafakat belgesi',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-green-400"></div>
                <span className="tracking-wider">VİZE DANIŞMANLIĞI</span>
              </div>
              <h1 className="mb-6">
                Yurtdışı Vize Danışmanlığı
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Yurtdışı vize başvurularınız hakkında bilgiler. Vize işlemlerinizi profesyonel ekibimizle kolaylaştırın.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#form"
                  className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors inline-flex items-center gap-2"
                >
                  Hemen Başvur
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/30"
                >
                  Hizmetlerimiz
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1655722725332-9925c96dd627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMHZpc2ElMjB0cmF2ZWx8ZW58MXx8fHwxNzY1MTQ0OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vize Danışmanlığı"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yurtdışı vize başvuru işlemlerinizi başvurudan ülkeye göre birçok farklılık göstermektedir. 
              Profesyonel ekibimizle size en uygun çözümü sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passport Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1664101629382-1d0f78dc83d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwdHJhdmVsJTIwcGFzc3BvcnR8ZW58MXx8fHwxNzY1MTk0NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pasaport"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="mb-6">Pasaport Çıkarmak</h2>
              <p className="text-lg text-gray-600 mb-6">
                Pasaport başvurusunun yaş ayrımı gözetilmeksizin şahsen yapılması gerekmektedir. 
                2 Nisan 2018 tarihinden itibaren pasaport başvurusu Nüfus Müdürlüklerine yapılmaktadır.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Pasaport ücreti internetten veya bankalara yatırıp, yine internetten veya telefonla pasaport 
                randevusu aldıktan sonra, <strong>nüfus müdürlüklerine 2 adet biyometrik fotoğraf</strong> ve 
                <strong>TC Kimlik Kartınızla</strong> gitmeniz yeterlidir.
              </p>

              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="mb-6 text-blue-900">Pasaport İçin Gerekli Evraklar</h3>
                <ul className="space-y-4">
                  {passportRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Vize Sürecinizi Bizimle Kolaylaştırın</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            GNC Travel Vize Danışmanlık ile profesyonel ve kaliteli vize danışmanlık servisini 
            alarak eksiksiz bir başvuru yapıp, vize reddi riskini minimize edebilirsiniz.
          </p>
          <p className="text-lg mb-12 text-blue-200">
            Ülkelere göre vize bilgilenmesi almak ve detaylı vize başvuru sürecinizi öğrenmek için 
            <strong className="text-white"> +90 543 220 05 43</strong> numarasını arayın ya da 
            <strong className="text-white"> info@gnctravel.com</strong> adresine e-posta gönderin.
          </p>
          <a
            href="#form"
            className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-3 text-lg"
          >
            Ücretsiz Danışmanlık Alın
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Vize Başvuru Formu</h2>
            <p className="text-xl text-gray-600">
              Formu doldurun, uzman ekibimiz en kısa sürede sizinle iletişime geçsin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-gray-700 mb-2">
                  Gitmek İstediğiniz Ülke *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Örn: Amerika Birleşik Devletleri"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="passportStatus" className="block text-gray-700 mb-2">
                Pasaport Durumu *
              </label>
              <select
                id="passportStatus"
                name="passportStatus"
                required
                value={formData.passportStatus}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Seçiniz</option>
                <option value="var">Pasaportum Var</option>
                <option value="yok">Pasaportum Yok</option>
                <option value="suresi-dolmus">Pasaportum Var Ama Süresi Dolmuş</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Vize başvurunuz hakkında bilgi vermek isterseniz..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              Başvuruyu Gönder
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h3 className="mb-6 text-blue-900">Ülkemizde Pek Çok Vize Başvurusu</h3>
                <p className="text-gray-700 mb-4">
                  Ülkemizde pek çok vize başvurusu, yanlış ya da eksik doldurulmuş formlar, uygun olmayan 
                  belge sunumu, belgelerin gerektiği şekilde çevrilmemesi gibi nedenlerle geri çevrilmektedir.
                </p>
                <p className="text-gray-700 mb-6">
                  Akademik Yurtdışı Eğitim Danışmanlık'ın profesyonel ve kaliteli vize danışmanlık servisini 
                  alarak eksiksiz bir başvuru yapıp, vize reddi riskini minimize edebilirsiniz.
                </p>
                <div className="flex items-center gap-3 text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Profesyonel Vize Danışmanlığı</span>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1613244470181-e4ff087b4a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNhJTIwYXBwbGljYXRpb24lMjBkb2N1bWVudHN8ZW58MXx8fHwxNzY1MTk0NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vize Başvuruları"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h2>Vize Rehberi & Blog</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vize başvuru süreçleri hakkında detaylı bilgiler, gerekli belgeler ve uzman ipuçları
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Turist Vizesi */}
            <Link 
              to="/blog/turist-vizesi"
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1646870116973-a8aebc4d0dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwdmFjYXRpb24lMjBiZWFjaHxlbnwxfHx8fDE3NjUxOTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Turist Vizesi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Turist Vizesi</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 group-hover:text-blue-600 transition-colors">
                  Turist Vizesi Nasıl Alınır?
                </h3>
                <p className="text-gray-600 mb-4">
                  Yurtdışına turistik seyahat için gerekli belgeler, başvuru süreci ve dikkat edilmesi gereken noktalar.
                </p>
                <div className="flex items-center text-blue-600 group-hover:gap-3 gap-2 transition-all">
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Eğitim Vizesi */}
            <Link 
              to="/blog/egitim-vizesi"
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1602494834339-3d17099adf96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdW5pdmVyc2l0eSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjUxOTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Eğitim Vizesi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Eğitim Vizesi</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 group-hover:text-blue-600 transition-colors">
                  Öğrenci Vizesi Başvurusu
                </h3>
                <p className="text-gray-600 mb-4">
                  Yurtdışında eğitim görmek için öğrenci vizesi başvuru süreci, gerekli belgeler ve önemli detaylar.
                </p>
                <div className="flex items-center text-blue-600 group-hover:gap-3 gap-2 transition-all">
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* İş Vizesi */}
            <Link 
              to="/blog/is-vizesi"
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1642522029686-5485ea7e6042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzY1MTAxMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="İş Vizesi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">İş Vizesi</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 group-hover:text-blue-600 transition-colors">
                  İş Vizesi Başvuru Rehberi
                </h3>
                <p className="text-gray-600 mb-4">
                  Yurtdışında çalışmak için iş vizesi başvurusu, işveren sponsorluğu ve gerekli evraklar.
                </p>
                <div className="flex items-center text-blue-600 group-hover:gap-3 gap-2 transition-all">
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Tüm Blog Yazılarını Görüntüle
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}