import { FileCheck, Clock, CheckCircle, Globe, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function VisaSupport() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [visaType, setVisaType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const visaProcess = [
    {
      icon: MessageSquare,
      step: 'Adım 1',
      title: 'Danışmanlık',
      description: 'Ücretsiz danışmanlık için bizimle iletişime geçin. Vize uzmanlarımız gereksinimlerinizi değerlendirir ve size rehberlik eder.',
    },
    {
      icon: FileCheck,
      step: 'Adım 2',
      title: 'Belge Hazırlığı',
      description: 'Vize başvurunuz için gerekli tüm belgeleri hazırlamanızda ve düzenlemenizde size yardımcı oluyoruz.',
    },
    {
      icon: Send,
      step: 'Adım 3',
      title: 'Başvuru Gönderimi',
      description: 'Başvurunuzu gözden geçiriyor ve sizin adınıza ilgili elçilik veya konsolosluğa gönderiyoruz.',
    },
    {
      icon: Clock,
      step: 'Adım 4',
      title: 'İşlem Süreci',
      description: 'Başvuru durumunuzu takip edin. Yetkililerle takip yapıyor ve süreç boyunca sizi bilgilendiriyoruz.',
    },
    {
      icon: CheckCircle,
      step: 'Adım 5',
      title: 'Vize Onayı',
      description: 'Onaylanmış vizenizi alın ve tam bir iç huzuruyla yolculuğunuza hazırlanın.',
    },
  ];

  const popularVisas = [
    {
      country: 'Amerika Birleşik Devletleri',
      flag: '🇺🇸',
      types: ['Turist, İş, Öğrenci'],
      processingTime: '2-4 hafta',
      price: '€245\'dan başlayan',
    },
    {
      country: 'Birleşik Krallık',
      flag: '🇬🇧',
      types: ['Turist, İş, Öğrenci'],
      processingTime: '3-6 hafta',
      price: '€285\'dan başlayan',
    },
    {
      country: 'Schengen Ülkeleri',
      flag: '🇪🇺',
      types: ['Turist, İş'],
      processingTime: '2-3 hafta',
      price: '€160\'dan başlayan',
    },
    {
      country: 'Kanada',
      flag: '🇨🇦',
      types: ['Turist, İş, Öğrenci'],
      processingTime: '3-5 hafta',
      price: '€225\'dan başlayan',
    },
    {
      country: 'Avustralya',
      flag: '🇦🇺',
      types: ['Turist, İş, Öğrenci'],
      processingTime: '2-4 hafta',
      price: '€265\'dan başlayan',
    },
    {
      country: 'Dubai (BAE)',
      flag: '🇦🇪',
      types: ['Turist, İş'],
      processingTime: '3-5 gün',
      price: '€120\'dan başlayan',
    },
  ];

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
            formType: 'visa',
            formData: {
              name,
              email,
              phone,
              country: selectedCountry,
              travelDate,
              notes,
            },
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
      alert('Teşekkürler! Vize destek ekibimiz 24 saat içinde sizinle iletişime geçecektir.');
      
      // Formu temizle
      setName('');
      setEmail('');
      setPhone('');
      setSelectedCountry('');
      setVisaType('');
      setTravelDate('');
      setNotes('');
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      alert('Email gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan gonca@gnctravel.com adresine email gönderin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="visa" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Globe className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-gray-900 mb-4">Vize Destek Hizmetleri</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vize başvurularınızda güvenle ilerleyin. Uzman ekibimiz süreci basitleştirir, belgeleri halleder ve başvurunuzun tüm gereksinimleri karşılayarak sorunsuz bir onay almasını sağlar.
          </p>
        </div>

        {/* Services Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-gray-900 mb-6 text-center">Neden Vize Hizmetlerimizi Tercih Etmelisiniz?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Yüksek Başarı Oranı</h4>
              <p className="text-gray-600">Uzman rehberliğimizle %98 vize onay oranı</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Hızlı İşlem</h4>
              <p className="text-gray-600">Öncelikli işlemlerle hızlı sonuçlanma süreleri</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Uzman Destek</h4>
              <p className="text-gray-600">7/24 kullanılabilir özel vize danışmanları</p>
            </div>
          </div>
        </div>

        {/* Visa Process */}
        <div className="mb-16">
          <h3 className="text-gray-900 mb-12 text-center">Vize Başvuru Sürecimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {visaProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                    <process.icon className="w-6 h-6" />
                  </div>
                  <div className="text-blue-600 mb-2">{process.step}</div>
                  <h4 className="text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < visaProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 text-blue-600">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Visa Categories */}
        <div className="mb-16">
          <h3 className="text-gray-900 mb-12 text-center">Popüler Vize Kategorileri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularVisas.map((visa, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{visa.flag}</span>
                  <div>
                    <h4 className="text-gray-900">{visa.country}</h4>
                    <div className="text-blue-600">Profesyonel Vize Danışmanlık</div>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FileCheck className="w-4 h-4" />
                    <span>Tipler: {visa.types.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>İşlem Süresi: {visa.processingTime}</span>
                  </div>
                </div>
                <Link 
                  to="/visa#form"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors block text-center"
                >
                  Başvuru Yap
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Info */}
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-white mb-4">Vize Başvurunuzu Başlatın</h3>
              <p className="text-white/90 mb-8">
                Formu doldurun, vize uzmanlarımız süreç boyunca size rehberlik etmek için 24 saat içinde sizinle iletişime geçecektir.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white mb-1">Ücretsiz Danışmanlık</div>
                    <p className="text-white/80">Hiçbir ücret ödemeden uzman tavsiyesi alın</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white mb-1">Belge Yardımı</div>
                    <p className="text-white/80">Gerekli tüm belgeleri hazırlamanızda yardımcı oluyoruz</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white mb-1">Başvuru Takibi</div>
                    <p className="text-white/80">Vize durumunuzu gerçek zamanlı olarak izleyin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Ad Soyad *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Adınızı ve soyadınızı girin"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">E-posta Adresi *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Telefon Numarası *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+90 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Hedef Ülke *</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                  >
                    <option value="">Bir ülke seçin</option>
                    <option value="usa">Amerika Birleşik Devletleri</option>
                    <option value="uk">Birleşik Krallık</option>
                    <option value="schengen">Schengen Ülkeleri</option>
                    <option value="canada">Kanada</option>
                    <option value="australia">Avustralya</option>
                    <option value="uae">Dubai (BAE)</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Vize Tipi *</label>
                  <select
                    value={visaType}
                    onChange={(e) => setVisaType(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                  >
                    <option value="">Vize tipi seçin</option>
                    <option value="tourist">Turist Vizesi</option>
                    <option value="business">İş Vizesi</option>
                    <option value="student">Öğrenci Vizesi</option>
                    <option value="work">Çalışma Vizesi</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Yolculuk Tarihi</label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Diğer Notlar</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows={4}
                    placeholder="Diğer notlarınızı buraya yazın"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Başvuru Talebini Gönder
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex gap-4">
            <div className="text-amber-600 flex-shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-gray-900 mb-2">Önemli Bilgiler</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Vize işlem süreleri ülke ve vize tipine göre değişiklik gösterebilir</li>
                <li>• Tüm ücretler elçilik gereksinimlerine göre değişebilir</li>
                <li>• Başvuru işlemi sırasında ek belgeler istenebilir</li>
                <li>• Vize onayını garanti etmiyoruz, ancak başarı şansınızı en üst düzeye çıkarıyoruz</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}