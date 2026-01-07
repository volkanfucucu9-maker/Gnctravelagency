import { Search, MapPin, Calendar, Users, CheckCircle, Shield, Award, Users as UsersIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Tüm turlar için arama verisi
  const tourDestinations = [
    { name: 'Dubai Turları', path: '/tours/dubai', keywords: ['dubai', 'burj khalifa', 'çöl safarisi', 'alışveriş', 'lüks'] },
    { name: 'Mısır Turları', path: '/tours/egypt', keywords: ['mısır', 'piramit', 'kahire', 'nil', 'hurgada', 'sharm el sheikh'] },
    { name: 'Tayland Turları', path: '/tours/thailand', keywords: ['tayland', 'bangkok', 'phuket', 'pattaya', 'tapınak'] },
    { name: 'Bali Turları', path: '/tours/bali', keywords: ['bali', 'endonezya', 'ubud', 'adalar', 'tapınak'] },
    { name: 'Vizesiz Turlar', path: '/tours/visa-free', keywords: ['vizesiz', 'pasaport', 'kolay', 'sırbistan', 'gürcistan', 'kıbrıs'] },
    { name: 'Avrupa Kültür Turları', path: '/tours/europe-culture', keywords: ['avrupa', 'kültür', 'almanya', 'berlin', 'schwäbisch'] },
    { name: 'Asya Kültür Turları', path: '/tours/asia-culture', keywords: ['asya', 'kültür', 'bali', 'tayland', 'bangkok'] },
    { name: 'Orta Doğu Turları', path: '/tours/middle-east', keywords: ['orta doğu', 'dubai', 'burj khalifa'] }
  ];

  // Arama filtresi
  const filteredTours = destination.trim() 
    ? tourDestinations.filter(tour => {
        const searchTerm = destination.toLowerCase();
        return tour.name.toLowerCase().includes(searchTerm) ||
               tour.keywords.some(keyword => keyword.includes(searchTerm));
      })
    : [];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (filteredTours.length > 0) {
      // İlk eşleşen tura git
      navigate(filteredTours[0].path);
    } else if (destination.trim()) {
      // Eşleşme yoksa genel paketler sayfasına git
      navigate('/packages');
    }
  };

  const handleSuggestionClick = (path: string) => {
    navigate(path);
    setDestination('');
    setShowSuggestions(false);
  };

  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-32 md:pt-36 pb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjUxNjUxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* USP Badge - Above Title - Mobilde gizli */}
        <div className="hidden md:inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-lg">
          <Award className="w-4 h-4 md:w-5 md:h-5" />
          <span className="font-bold text-xs md:text-base">10 Yıl Tecrübe | 1,000+ Mutlu Müşteri | %98 Memnuniyet</span>
        </div>

        <h1 className="text-white mb-4 md:mb-6 font-bold text-3xl md:text-5xl">
          {t('hero.title')}
        </h1>
        <p className="text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          {t('hero.subtitle')}
        </p>

        {/* Search Card */}
        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-4xl mx-auto overflow-visible relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-visible">
            <div className="relative overflow-visible">
              <label className="block text-gray-700 mb-2 text-left">{t('hero.destination')}</label>
              <div className="relative overflow-visible">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder={t('hero.destinationPlaceholder')}
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                
                {/* Öneri listesi */}
                {showSuggestions && filteredTours.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto z-[100]">
                    {filteredTours.map((tour, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSuggestionClick(tour.path)}
                        className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors border-b last:border-b-0"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-700">{tour.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-2 text-left">{t('hero.date')}</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-2 text-left">{t('hero.guests')}</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                >
                  <option value="1">1 {t('hero.guest')}</option>
                  <option value="2">2 {t('hero.guest')}</option>
                  <option value="3">3 {t('hero.guest')}</option>
                  <option value="4">4 {t('hero.guest')}</option>
                  <option value="5+">5+ {t('hero.guest')}</option>
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                {t('hero.search')}
              </button>
            </div>
          </div>

          {/* Trust Badges - Below Search - Mobilde yuvarlak iconlar kaldırıldı */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="hidden md:block bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm font-bold text-gray-900">%100 Güvenli Ödeme</p>
                  <p className="text-xs text-gray-600">SSL Sertifikalı</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="hidden md:block bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm font-bold text-gray-900">TÜRSAB Üyesi</p>
                  <p className="text-xs text-gray-600">Yetkili Acente</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="hidden md:block bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <UsersIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm font-bold text-gray-900">7/24 Destek</p>
                  <p className="text-xs text-gray-600">Anında Yanıt</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}