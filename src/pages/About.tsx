import { Plane, MapPin, Users, Clock, Award, Shield, Heart, Globe2, Ship, Briefcase, MapPinned, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: 'Yerel Rehberler',
      description: 'Yerel uzmanlarla seyahat edin',
    },
    {
      icon: Users,
      title: 'Grup Turları',
      description: 'Benzer düşünen gezginlerle unutulmaz anlar yaratın',
    },
    {
      icon: Clock,
      title: '7/24 Destek',
      description: 'Nerede olursanız olun her zaman yanınızdayız',
    },
    {
      icon: Award,
      title: 'Ödüllü Hizmet',
      description: 'Hizmet kalitemiz sürekli olarak mükemmellik için takdir edilmektedir',
    },
    {
      icon: Shield,
      title: 'Güvenli Seyahat',
      description: 'Güvenliğiniz bizim en önemli önceliğimizdir',
    },
    {
      icon: Heart,
      title: 'Tutkuyla Hizmet',
      description: 'Seyahat etmeyi seven bir ekip tarafından oluşturuldu',
    },
  ];

  const services = [
    {
      icon: Plane,
      title: 'Uçak Biletleri',
      description: 'Seyahat acentemiz müşterilerimize en iyi uçak bileti fırsatlarını sunma konusunda uzmanlaşmıştır',
      image: 'https://images.unsplash.com/photo-1639034741369-1e0c771adaeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJsaW5lJTIwdGlja2V0cyUyMGJvb2tpbmd8ZW58MXx8fHwxNzY1MTkwOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: FileText,
      title: 'Vize Hizmetleri',
      description: 'Vize başvuru sürecinizde size yardımcı oluyor, tüm belge işlemlerini kolaylaştırıyoruz',
      image: 'https://images.unsplash.com/photo-1758928807847-ed94f9ed3cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNhJTIwcGFzc3BvcnQlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzY1MTkyNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Globe2,
      title: 'Ulaşım Araçları',
      description: 'Seyahat acentemiz hedefinize güvenli bir şekilde varmanızı sağlamak için çeşitli ulaşım seçenekleri sunar',
      image: 'https://images.unsplash.com/photo-1503220954697-e02095e8e0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMHRyYXZlbCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjUxMTcxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Briefcase,
      title: 'Seyahat Programları',
      description: 'Uzman ekibimiz tüm planlama ve lojistik konularında size detaylı bir program sunacaktır',
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NTE5MDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Shield,
      title: 'Seyahat Sigortası',
      description: 'Seyahat sigortası her gezinin önemli bir parçasıdır, huzur ve koruma sağlar',
      image: 'https://images.unsplash.com/photo-1650821414031-cf7291ce938c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NTE5MDk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: MapPinned,
      title: 'Yerel Rehber',
      description: 'Sizi şehirlerini gezdirip en iyi yolu gösterecek rehberlerle sizi buluşturabiliriz',
      image: 'https://images.unsplash.com/photo-1759252973843-957dc1b5e0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHRvdXIlMjBndWlkZXxlbnwxfHx8fDE3NjUxNzk0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const testimonials = [
    {
      name: 'Ayşe Yılmaz',
      location: 'İstanbul',
      image: 'https://images.unsplash.com/photo-1664312572933-0563f14484a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MTkwNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Bu seyahat acentesi sayesinde hayatımın en muhteşem tatilini yaşadım. Uçuşlardan konaklama yerlerine kadar her şeyle ilgilendiler ve seyahat planımı bile yapmama yardımcı oldular. Kesinlikle tavsiye ediyorum.',
    },
    {
      name: 'Mehmet Kaya',
      location: 'Ankara',
      image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc2NTE0MDQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Profesyonel yaklaşım ve müşteri memnuniyeti odaklı hizmet anlayışları beni çok etkiledi. Her detayı düşünmüşler. Bir sonraki tatilim için kesinlikle tekrar onları tercih edeceğim.',
    },
    {
      name: 'Zeynep Demir',
      location: 'İzmir',
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NTE5MDU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Aile olarak gittiğimiz Maldivler tatilinde her şey kusursuzdu. Çocuklarımız çok mutluydu ve biz de rahat bir tatil geçirdik. Teşekkürler GNC Travel!',
    },
  ];

  const stats = [
    { number: '10+', label: 'Yıllık Deneyim' },
    { number: '50K+', label: 'Mutlu Müşteri' },
    { number: '500+', label: 'Destinasyon' },
    { number: '98%', label: 'Memnuniyet Oranı' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503220954697-e02095e8e0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMHRyYXZlbCUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjUxMTcxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-white mb-6 font-bold">Hakkımızda</h1>
            <p className="text-white/90 max-w-3xl mx-auto">
              Dünyanın her köşesini keşfetmenize yardımcı oluyoruz, her seferinde bir macera.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 mb-4" style={{ fontFamily: 'Reenie Beanie, cursive', fontSize: '30px' }}>
                Dünyayı bizimle keşfedin, her seferinde bir macera.
              </p>
              <h2 className="text-gray-900 mb-6 font-bold">
                Mükemmel <span className="text-blue-600">tatil</span> hayallerimiz Seyahat Acentemizle gerçek oluyor
              </h2>
              <p className="text-gray-600 mb-4">
                Müşterilerimiz için unutulmaz seyahat deneyimleri planlamak ve organize etmek konusunda uzmanlaşmış 
                deneyimli seyahat uzmanları ekibiyiz.
              </p>
              <p className="text-gray-600 mb-6">
                Uçuş rezervasyonları, otel rezervasyonları, tur paketleri, vize desteği ve daha fazlasını içeren 
                geniş bir seyahat hizmetleri yelpazesi sunuyoruz.
              </p>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900">Yerel seyahat rehberleri</span>
                  <span className="text-gray-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                DAHA FAZLA BİLGİ
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2NTExOTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Travel" 
                    className="rounded-2xl w-full h-32 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjUxNjUxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Travel" 
                    className="rounded-2xl w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjUxNzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Travel" 
                    className="rounded-2xl w-full h-40 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY1MTAwODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Travel" 
                    className="rounded-2xl w-full h-24 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzY1MTUyMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Travel" 
                    className="rounded-2xl w-full h-20 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-2 font-bold" style={{ fontSize: '48px' }}>
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4" style={{ fontFamily: 'Reenie Beanie, cursive', fontSize: '30px' }}>
              Bir sonraki maceranızı planlamanıza yardımcı olalım
            </p>
            <h2 className="text-gray-900 mb-4 font-bold">
              Mükemmel <span className="text-blue-600">Tatil</span> Gerçek Oluyor
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Seyahat sektöründeki bilgi ve uzmanlığımızla, dünyanın dört bir yanındaki çeşitli destinasyonlara 
              yolculuğunuzun tercihlerinize ve bütçenize göre uyarlandığından emin oluruz ve onu bir ömür boyu 
              sürecek bir deneyim haline getiririz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1577949619851-db947ef972af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbnMlMjBjb2xsYWdlfGVufDF8fHx8MTc2NTE5MDU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-white mb-2">Özel seyahat fırsatları</p>
            <h2 className="text-white mb-8 font-bold">
              Hayalinizdeki tatili bugün rezerve edin!
            </h2>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
              DAHA FAZLA BİLGİ
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4 font-bold">
              Müşterilerimizden <span className="text-blue-600">Hikayeler</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Müşterilerimizin deneyimleri bizim için en değerli geri bildirimlerdir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-900 font-bold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Bizimle Yolculuğunuza Başlayın</h2>
          <p className="text-gray-600 mb-8">
            Hayalinizdeki tatili planlamak için profesyonel ekibimizle iletişime geçin
          </p>
          <Link to="/iletisim">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors">
              İletişime Geç
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}