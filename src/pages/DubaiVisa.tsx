import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  Phone,
  Mail,
  Shield,
  Zap,
  HeadphonesIcon,
  Lock,
  Calendar,
  CreditCard,
  ArrowRight,
  Check,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { trackFacebookEvent } from '../components/FacebookPixel';

export function DubaiVisa() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    entryDate: '',
    passengers: '1',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Backend'e form verilerini gönder
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d52997fc/send-email`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formType: 'dubai-visa',
            formData: formData,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error('Email gönderme hatası:', result);
        alert('Email gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan gonca@gnctravel.com adresine email gönderin.');
        setIsSubmitting(false);
        return;
      }

      console.log('Email başarıyla gönderildi:', result);
      
      // Facebook Pixel - SubmitApplication event'i track et
      trackFacebookEvent('SubmitApplication', {
        content_name: 'Dubai Visa Application',
        content_category: 'Visa',
        value: formData.visaType,
        visa_type: formData.visaType,
        passengers: formData.passengers
      });
      
      alert('Başvurunuz alındı! En kısa sürede size dönüş yapacağız.');
      
      // Formu temizle
      setFormData({
        name: '',
        email: '',
        phone: '',
        visaType: '',
        entryDate: '',
        passengers: '1',
        notes: '',
      });
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      alert('Email gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan gonca@gnctravel.com adresine email gönderin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const pricingPlans = [
    {
      name: 'Tek Giriş – 30 Gün',
      icon: '💼',
      type: 'Turistik',
      duration: '3–5 iş günü',
      price: '147',
      currency: 'USD',
      features: [
        'Tek giriş hakkı',
        '30 gün geçerlilik',
        'Uzatma yok',
        'Danışmanlık dahil'
      ],
      popular: false
    },
    {
      name: 'Çoklu Giriş – 30 Gün',
      icon: '🌟',
      type: 'Sık seyahat edenler için',
      duration: '3–5 iş günü',
      price: '393',
      currency: 'USD',
      features: [
        'Çoklu giriş hakkı',
        '30 gün geçerlilik',
        'İş seyahatleri için ideal',
        'Danışmanlık dahil'
      ],
      popular: false
    },
    {
      name: 'Tek Giriş – 90 Gün',
      icon: '✈️',
      type: 'Uzun süreli konaklama',
      duration: '3–5 iş günü',
      price: '467',
      currency: 'USD',
      features: [
        'Tek giriş hakkı',
        '90 gün geçerlilik',
        'Uzun tatiller için ideal',
        'Danışmanlık dahil'
      ],
      popular: true
    },
    {
      name: 'Çoklu Giriş – 90 Gün',
      icon: '⭐',
      type: 'Premium vize',
      duration: '3–5 iş günü',
      price: '716',
      currency: 'USD',
      features: [
        'Çoklu giriş hakkı',
        '90 gün geçerlilik',
        'Maksimum esneklik',
        'Danışmanlık dahil'
      ],
      popular: false
    }
  ];

  const dubaiTours = [
    {
      id: 'dubai-ajet',
      name: 'Dubai Turu 3 Gece AJet Havayolları',
      price: '€550',
      duration: '4 Gün / 3 Gece',
      image: 'https://images.unsplash.com/photo-1651284819032-42a925c1b114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80'
    },
    {
      id: 'dubai-masali',
      name: 'Bir Dubai Masalı - Dubai Şehir Turu Dahil',
      price: '€499',
      duration: '6 Gün / 5 Gece',
      image: 'https://images.unsplash.com/photo-1761341063556-80cb742411b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80'
    },
    {
      id: 'dubai-emirates',
      name: 'Muhteşem Dubai - Emirates Havayolları',
      price: '€899',
      duration: '5 Gün / 4 Gece',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-blue-500 shadow-2xl p-4 md:hidden">
        <Link
          to="/contact"
          className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg text-lg"
        >
          <strong>Hemen Başvur – $147'dan</strong>
        </Link>
      </div>

      {/* HERO SECTION - Above the Fold */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Animated shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Aciliyet Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-sm">3–5 iş gününde hızlı sonuç</span>
            </div>

            {/* Ana Başlık */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Dubai Vizenizi<br />
              <span className="text-yellow-300">3–5 İş Gününde</span> Online Alın
            </h1>

            {/* Alt Başlık */}
            <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              Türkiye'den başvuru yapanlar için hızlı, güvenilir ve %100 online Dubai vize hizmeti.
              <br />
              <strong className="text-white">Evrak karmaşası yok, konsolosluk randevusu yok.</strong>
            </p>

            {/* Güven Vurguları */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <CheckCircle2 className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <p className="text-sm">3–5 iş günü<br />sonuç</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <p className="text-sm">%100 online<br />başvuru</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Shield className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <p className="text-sm">Şeffaf fiyat<br />gizli ücret yok</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <HeadphonesIcon className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                <p className="text-sm">Uzman vize<br />danışmanlığı</p>
              </div>
            </div>

            {/* Ana CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-white text-blue-900 px-10 py-5 rounded-xl hover:bg-blue-50 transition-all shadow-2xl inline-flex items-center gap-3 text-xl hover:scale-105"
              >
                <FileText className="w-6 h-6" />
                <span>
                  <strong>Hemen Başvur</strong>
                  <span className="block text-sm text-blue-700">$147'dan Başlayan Fiyatlarla</span>
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+905432200543"
                className="bg-blue-800/50 backdrop-blur-sm text-white px-8 py-5 rounded-xl hover:bg-blue-700/50 transition-all inline-flex items-center gap-2 border-2 border-white/30"
              >
                <Phone className="w-5 h-5" />
                <span>+90 543 220 05 43</span>
              </a>
            </div>

            {/* Sosyal Kanıt */}
            <p className="mt-8 text-blue-100 text-sm">
              ⭐⭐⭐⭐⭐ Binlerce başarılı Dubai vizesi başvurusu
            </p>
          </div>
        </div>
      </section>

      {/* FİYATLAR SECTİON - Şeffaflık */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-900 px-6 py-2 rounded-full mb-4">
              <strong>ŞEFFAF FİYATLANDIRMA</strong>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Dubai Vize Fiyatları (2025)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tüm fiyatlara danışmanlık, başvuru ve takip hizmeti dahildir.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? 'border-4 border-blue-500' : 'border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 text-sm">
                    <strong>EN POPÜLER</strong>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <p className="text-blue-600 mb-4">{plan.type}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl text-blue-600">${plan.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mt-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{plan.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-4 rounded-xl transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <strong>Hemen Başvur</strong>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 bg-blue-50 inline-block px-6 py-3 rounded-lg border border-blue-200">
              ⚠️ Resmi vize harcı ve hizmet bedeli dahildir. <strong>Ek ücret yoktur.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR - Süreci Basitleştir */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Dubai Vizesi Nasıl Alınır?</h2>
            <p className="text-xl text-gray-600">3 adımda tamamlayın:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg">
                1
              </div>
              <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4 mt-4" />
              <h3 className="text-2xl mb-3">Online Formu Doldurun</h3>
              <p className="text-gray-600">
                Pasaport ve fotoğrafınızı yükleyin.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg">
                2
              </div>
              <CreditCard className="w-16 h-16 text-blue-600 mx-auto mb-4 mt-4" />
              <h3 className="text-2xl mb-3">Ödemenizi Yapın</h3>
              <p className="text-gray-600">
                Kredi kartı veya banka havalesi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg">
                3
              </div>
              <Mail className="w-16 h-16 text-blue-600 mx-auto mb-4 mt-4" />
              <h3 className="text-2xl mb-3">Vizeniz E-posta ile Gelsin</h3>
              <p className="text-gray-600">
                3–5 iş günü içinde PDF olarak teslim.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg text-lg"
            >
              <strong>Şimdi Başla</strong>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEDEN BİZ - Güven & Ayrışma */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Neden GNC Travel?</h2>
            <p className="text-xl text-gray-600">Binlerce başarılı başvurunun tercihi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">KVKK Uyumlu</h3>
              <p className="text-gray-600">
                Kişisel verileriniz KVKK uyumlu korunur
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Uzman Danışman</h3>
              <p className="text-gray-600">
                Uzman vize danışmanları tarafından kontrol
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-2">Hızlı İşlem</h3>
              <p className="text-gray-600">
                Hızlı işlem – gereksiz bekleme yok
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">Sürekli Destek</h3>
              <p className="text-gray-600">
                Başvuru sonrası destek
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
            <p className="text-2xl">
              ⭐ <strong>Binlerce başarılı Dubai vizesi başvurusu.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* GEREKLİ BELGELER */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Dubai Vizesi İçin Gerekli Belgeler</h2>
            <p className="text-xl text-gray-600">Sadece 3 belge yeterli!</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📘</span>
                </div>
                <h3 className="text-xl mb-2">Pasaport</h3>
                <p className="text-gray-600">(en az 6 ay geçerli)</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📸</span>
                </div>
                <h3 className="text-xl mb-2">Biyometrik Fotoğraf</h3>
                <p className="text-gray-600">Beyaz zemin</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🪪</span>
                </div>
                <h3 className="text-xl mb-2">Kimlik Kartı</h3>
                <p className="text-gray-600">Nüfus cüzdanı veya TC kimlik</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <p className="text-lg text-green-900">
                📌 <strong>Ek belge veya banka dökümü istenmez.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÖNERİLEN DUBAI TURLARI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Dubai Turlarımıza Göz Atın</h2>
            <p className="text-xl text-gray-600">
              Vizenizi aldıktan sonra hayalinizdeki Dubai tatilini planlayın
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dubaiTours.map((tour) => (
              <Link 
                key={tour.id}
                to={`/tour-details/${tour.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
                    <strong>{tour.price}</strong>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{tour.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 group-hover:gap-4 transition-all">
                    <span>Detayları İncele</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/tours/dubai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg"
            >
              Tüm Dubai Turlarını Gör
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ - Revize Edilmiş */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Sıkça Sorulan Sorular</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl mb-2 text-blue-900">
                <strong>Dubai vizesi kaç günde çıkar?</strong>
              </h3>
              <p className="text-gray-700">
                Genellikle <strong>3–5 iş günü</strong> içinde sonuçlanır. Belgeleriniz eksiksiz olduğunda süreç daha da hızlı ilerler.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl mb-2 text-blue-900">
                <strong>Dubai vizesi garantili mi?</strong>
              </h3>
              <p className="text-gray-700">
                Belgeleriniz uygun olduğu sürece <strong>yüksek onay oranı</strong> ile başvurunuz yapılır. Uzman ekibimiz tüm belgelerinizi kontrol ederek red riskini minimize eder.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl mb-2 text-blue-900">
                <strong>Vize reddi olursa ücret iadesi var mı?</strong>
              </h3>
              <p className="text-gray-700">
                Resmi vize harcı iade edilmez. Ancak belgeleriniz eksiksiz olduğunda red oranı çok düşüktür. Detaylı bilgi için bizimle iletişime geçin.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl mb-2 text-blue-900">
                <strong>Pasaport geçerlilik süresi ne olmalı?</strong>
              </h3>
              <p className="text-gray-700">
                Pasaportunuzun <strong>en az 6 ay geçerlilik süresi</strong> olması gerekmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAŞVURU FORMU */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full mb-4">
              <strong>HEMEN BAŞVURUN</strong>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Dubai Vize Başvuru Formu</h2>
            <p className="text-xl text-gray-600">
              Formu doldurun, <strong>en kısa sürede</strong> uzman ekibimiz sizinle iletişime geçsin.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-blue-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">
                  <strong>Ad Soyad *</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              
              <div>
                <label className="block mb-2">
                  <strong>E-posta *</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">
                  <strong>Telefon *</strong>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>
              
              <div>
                <label className="block mb-2">
                  <strong>Vize Türü *</strong>
                </label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="30-day-single">Tek Giriş – 30 Gün ($147)</option>
                  <option value="30-day-multiple">Çoklu Giriş – 30 Gün ($393)</option>
                  <option value="90-day-single">Tek Giriş – 90 Gün ($467)</option>
                  <option value="90-day-multiple">Çoklu Giriş – 90 Gün ($716)</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2">
                <strong>Tahmini Giriş Tarihi</strong>
              </label>
              <input
                type="date"
                name="entryDate"
                value={formData.entryDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2">
                <strong>Yolcu Sayısı</strong>
              </label>
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1">1 Yolcu</option>
                <option value="2">2 Yolcu</option>
                <option value="3">3 Yolcu</option>
                <option value="4">4 Yolcu</option>
                <option value="5">5 Yolcu</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2">
                <strong>Ek Bilgiler</strong>
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Varsa özel notlarınızı yazabilirsiniz..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-5 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg flex items-center justify-center gap-3 text-xl"
            >
              <FileText className="w-6 h-6" />
              <strong>Başvuruyu Gönder</strong>
            </button>
            
            <p className="text-sm text-gray-600 text-center mt-4">
              🔒 Bilgileriniz güvenle saklanır ve üçüncü şahıslarla paylaşılmaz.
            </p>
          </form>
        </div>
      </section>

      {/* SON CTA - Bottom Conversion */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl mb-4">
            Dubai Seyahatinizi Ertelemeyin
          </h2>
          <p className="text-2xl mb-8 text-blue-100">
            Dakikalar içinde başvurun, vizeniz e-posta ile gelsin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-white text-blue-900 px-10 py-5 rounded-xl hover:bg-blue-50 transition-all shadow-2xl inline-flex items-center gap-3 text-xl hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              <span>
                <strong>Hemen Dubai Vizesine Başvur</strong>
                <span className="block text-sm text-blue-700">$147'dan</span>
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:+905432200543"
              className="bg-blue-800/50 backdrop-blur-sm text-white px-8 py-5 rounded-xl hover:bg-blue-700/50 transition-all inline-flex items-center gap-2 border-2 border-white/30"
            >
              <Phone className="w-5 h-5" />
              <span>+90 543 220 05 43</span>
            </a>
          </div>

          <p className="mt-8 text-blue-100">
            ⭐⭐⭐⭐⭐ <strong>Binlerce mutlu müşteri</strong>
          </p>
        </div>
      </section>
    </div>
  );
}