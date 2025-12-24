import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Teşekkürler! Mesajınız alındı. En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-4">Bizimle İletişime Geçin</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya destek talepleriniz için bize ulaşın. Ekibimiz size yardımcı olmak için burada.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Adresimiz</h3>
            <p className="text-gray-600">
              Side Mah. Yavuz Sultan Selim Blv. No:6 A-Z01 MANAVGAT / ANTALYA
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Telefon</h3>
            <div className="text-gray-600 space-y-1">
              <p>+90 543 220 0543</p>
              <p>+90 242 753 2827</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-2">E-posta</h3>
            <p className="text-gray-600">info@gnctravel.com</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Çalışma Saatlerimiz</h3>
              <p className="text-gray-600">Pazartesi – Cumartesi : 09:00 – 19:00</p>
              <p className="text-gray-500">Pazar günleri kapalıyız</p>
            </div>
          </div>
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-gray-900 mb-6">Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Ad Soyad *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınızı ve soyadınızı girin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">E-posta Adresi *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ornek@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Telefon Numarası</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+90 (555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Konu *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                >
                  <option value="">Konu seçin</option>
                  <option value="general">Genel Bilgi</option>
                  <option value="tour">Tur Paketleri</option>
                  <option value="visa">Vize Desteği</option>
                  <option value="booking">Rezervasyon</option>
                  <option value="complaint">Şikayet</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Mesajınız *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Mesajı Gönder
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.7849275895966!2d31.437!3d36.767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ2JzAxLjIiTiAzMcKwMjYnMTMuMiJF!5e0!3m2!1str!2str!4v1234567890!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GNC Travel Agency Konum"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-gray-900 mb-4 text-center">Neden Bize Ulaşmalısınız?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-blue-600 mb-2">✓</div>
              <h4 className="text-gray-900 mb-2">Hızlı Yanıt</h4>
              <p className="text-gray-600">Tüm sorularınıza 24 saat içinde yanıt veriyoruz</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">✓</div>
              <h4 className="text-gray-900 mb-2">Uzman Ekip</h4>
              <p className="text-gray-600">Deneyimli seyahat danışmanlarımız size yardımcı olur</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">✓</div>
              <h4 className="text-gray-900 mb-2">Güvenilir Hizmet</h4>
              <p className="text-gray-600">Profesyonel ve güvenilir destek garantisi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
