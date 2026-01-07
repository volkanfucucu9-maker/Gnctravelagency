import { Star, Quote, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SocialProof() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: 'Ayşe Yılmaz',
      location: 'İstanbul',
      tour: 'Dubai Masalı Turu',
      rating: 5,
      text: 'GNC Travel ile Dubai turu harikaydı! Otel seçimi mükemmel, rehberimiz çok bilgiliydi. Her şey organizede ve zamanındaydı. Kesinlikle tavsiye ediyorum!',
      date: 'Aralık 2024',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    {
      name: 'Mehmet Kaya',
      location: 'Ankara',
      tour: 'Mısır Kültür Turu',
      rating: 5,
      text: 'Piramitleri görmek hayalimdi ve GNC Travel sayesinde gerçek oldu. Rehberimiz tarih profesörü gibiydi, her detayı anlattı. Çok teşekkürler!',
      date: 'Kasım 2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      name: 'Elif Demir',
      location: 'İzmir',
      tour: 'Bali Paradise Turu',
      rating: 5,
      text: 'Bali turumuz kusursuzdu! Otel, transfer, rehber her şey harika organize edilmişti. GNC Travel\'e güvenle tatil rezervasyonu yapabilirsiniz.',
      date: 'Ekim 2024',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    },
    {
      name: 'Can Öztürk',
      location: 'Antalya',
      tour: 'Bangkok-Pattaya Turu',
      rating: 5,
      text: 'Tayland turumuz inanılmazdı! Her gün farklı bir macera yaşadık. GNC Travel ekibine sonsuz teşekkürler, profesyonelliklerinden çok memnun kaldık.',
      date: 'Eylül 2024',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
    },
    {
      name: 'Zeynep Arslan',
      location: 'Bursa',
      tour: 'Dubai Vize Hizmeti',
      rating: 5,
      text: 'Vize işlemlerimde GNC Travel çok yardımcı oldu. Hızlı, güvenilir ve profesyoneldi. Belgelerimi hazırladılar ve vizem 4 günde çıktı!',
      date: 'Aralık 2024',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'
    },
    {
      name: 'Ahmet Çelik',
      location: 'Adana',
      tour: 'Karadağ-Balkan Turu',
      rating: 5,
      text: 'Balkan turumuz harika geçti! Küçük bir grupla gittik, çok samimi bir ortamdı. Rehberimiz her yerde bize özel ilgi gösterdi. Kesinlikle tekrar gideceğim!',
      date: 'Ağustos 2024',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150'
    }
  ];

  const stats = [
    { number: '1,000+', label: language === 'tr' ? 'Mutlu Müşteri' : language === 'en' ? 'Happy Customers' : 'Zufriedene Kunden', icon: Award },
    { number: '10', label: language === 'tr' ? 'Yıl Tecrübe' : language === 'en' ? 'Years Experience' : 'Jahre Erfahrung', icon: TrendingUp },
    { number: '%98', label: language === 'tr' ? 'Memnuniyet Oranı' : language === 'en' ? 'Satisfaction Rate' : 'Zufriedenheitsrate', icon: Star },
    { number: '50+', label: language === 'tr' ? 'Destinasyon' : language === 'en' ? 'Destinations' : 'Reiseziele', icon: Award }
  ];

  // Partner logos (travel industry partners)
  const partners = [
    { name: 'TÜRSAB', logo: '🏛️' },
    { name: 'IATA', logo: '✈️' },
    { name: 'Puzzle Booking', logo: '🧩' },
    { name: 'Emirates', logo: '🇦🇪' },
    { name: 'Halal Booking', logo: '☪️' },
    { name: 'TripAdvisor', logo: '🦉' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            {language === 'tr' ? 'Müşterilerimiz Ne Diyor?' : language === 'en' ? 'What Our Customers Say' : 'Was Unsere Kunden Sagen'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'tr' 
              ? 'Binlerce mutlu müşterimizden gerçek yorumlar. Size en iyi hizmeti sunmak için çalışıyoruz.'
              : language === 'en'
              ? 'Real reviews from thousands of happy customers. We work to provide you with the best service.'
              : 'Echte Bewertungen von Tausenden zufriedenen Kunden. Wir arbeiten daran, Ihnen den besten Service zu bieten.'
            }
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">4.9/5.0</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <Quote className="w-10 h-10 text-blue-600/20 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.date}</p>
                  <p className="text-xs text-blue-600 mt-1">{testimonial.tour}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl text-center mb-8">
            {language === 'tr' ? 'Güvenilir Partnerlerimiz' : language === 'en' ? 'Our Trusted Partners' : 'Unsere Vertrauenswürdigen Partner'}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform">
                <div className="text-5xl mb-2 grayscale group-hover:grayscale-0 transition-all">
                  {partner.logo}
                </div>
                <p className="text-xs text-gray-600 font-semibold">{partner.name}</p>
              </div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">SSL Güvenlik</p>
                  <p className="text-xs text-gray-600">256-bit Şifreleme</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">TÜRSAB Onaylı</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">%98 Memnuniyet</p>
                  <p className="text-xs text-gray-600">1,000+ Müşteri</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-lg font-bold"
          >
            {language === 'tr' ? 'Ücretsiz Teklif Alın' : language === 'en' ? 'Get Free Quote' : 'Kostenloses Angebot Erhalten'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}