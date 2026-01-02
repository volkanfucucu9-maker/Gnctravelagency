import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // E-posta gövdesini oluştur
    const emailBody = `
İletişim Formu - Yeni Mesaj

Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}
Konu: ${formData.subject}

Mesaj:
${formData.message}
    `.trim();

    // Mailto linki oluştur
    const mailtoLink = `mailto:gonca@gnctravel.com?subject=İletişim Formu - ${formData.subject}&body=${encodeURIComponent(emailBody)}`;
    
    // E-posta istemcisini aç
    window.location.href = mailtoLink;
    
    // Kullanıcıya bilgi ver
    setTimeout(() => {
      alert(t('contact.successMessage'));
    }, 500);
    
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
            <h1 className="text-white mb-4">{t('contact.getInTouch')}</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              {t('contact.getInTouchDesc')}
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
            <h3 className="text-gray-900 mb-2">{t('contact.address')}</h3>
            <p className="text-gray-600">
              {t('contact.addressText')}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">{t('contact.phone')}</h3>
            <div className="text-gray-600 space-y-1">
              <p>+90 543 220 05 43</p>
              <p>+90 242 753 2827</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-2">{t('contact.email')}</h3>
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
              <h3 className="text-gray-900 mb-1">{t('contact.workingHours')}</h3>
              <p className="text-gray-600">{t('contact.workingHoursText')}</p>
              <p className="text-gray-500">{t('contact.sundayClosed')}</p>
            </div>
          </div>
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-gray-900 mb-6">{t('contact.sendMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">{t('contact.name')} *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">{t('contact.email')} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">{t('contact.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.phonePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">{t('contact.subject')} *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                >
                  <option value="">{t('contact.subjectPlaceholder')}</option>
                  <option value="general">{t('contact.general')}</option>
                  <option value="tour">{t('contact.tourInquiry')}</option>
                  <option value="visa">{t('contact.visaSupport')}</option>
                  <option value="complaint">{t('contact.complaint')}</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">{t('contact.message')} *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('contact.send')}
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
          <h3 className="text-gray-900 mb-4 text-center">{t('contact.whyContact')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-blue-600 mb-2">✓</div>
              <h4 className="text-gray-900 mb-2">{t('contact.fastResponse')}</h4>
              <p className="text-gray-600">{t('contact.fastResponseDesc')}</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">✓</div>
              <h4 className="text-gray-900 mb-2">{t('contact.expertTeam')}</h4>
              <p className="text-gray-600">{t('contact.expertTeamDesc')}</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">✓</div>
              <h4 className="text-gray-900 mb-2">{t('contact.reliableService')}</h4>
              <p className="text-gray-600">{t('contact.reliableServiceDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}