import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Tüm turlar için arama verisi
  const allTours = [
    // Yurt Dışı Turları
    { name: 'Vizesiz Yurt Dışı', path: '/tours/visa-free', keywords: ['vizesiz', 'vize', 'pasaport', 'bali', 'tayland', 'maldivler', 'gürcistan', 'kıbrıs'] },
    { name: 'Karadağ', path: '/tours/montenegro', keywords: ['karadağ', 'montenegro', 'kotor', 'budva', 'adriyatik'] },
    { name: 'Balkan Turları', path: '/tours/balkans', keywords: ['balkan', 'balkanlar', 'bosna', 'sırbistan', 'hırvatistan', 'makedonya', 'arnavutluk', 'romanya'] },
    { name: 'İtalya', path: '/tours/italy', keywords: ['italya', 'roma', 'floransa', 'venedik', 'milano', 'toskana', 'napoli', 'amalfi'] },
    { name: 'Dubai', path: '/tours/dubai', keywords: ['dubai', 'bae', 'birleşik arap emirlikleri', 'burj khalifa', 'abu dhabi'] },
    { name: 'Japonya', path: '/tours/japan', keywords: ['japonya', 'tokyo', 'kyoto', 'osaka', 'hiroshima', 'fuji'] },
    { name: 'Mısır', path: '/tours/egypt', keywords: ['mısır', 'kahire', 'piramit', 'nil', 'luxor', 'aswan'] },
    { name: 'Sharm El Sheikh', path: '/tours/sharm-el-sheikh', keywords: ['sharm', 'şarm', 'kırmızı deniz', 'dalış', 'mısır'] },
    { name: 'Yunanistan', path: '/tours/greece', keywords: ['yunanistan', 'santorini', 'mykonos', 'atina', 'girit', 'rodos'] },
    
    // Kültür Turları
    { name: 'Avrupa Kültür Turları', path: '/tours/europe-culture', keywords: ['avrupa', 'kültür', 'paris', 'londra', 'viyana', 'prag', 'budapeşte', 'ispanya'] },
    { name: 'Asya Kültür Turları', path: '/tours/asia-culture', keywords: ['asya', 'kültür', 'çin', 'hindistan', 'vietnam', 'kamboçya', 'güney kore', 'sri lanka'] },
    { name: 'Orta Doğu Turları', path: '/tours/middle-east', keywords: ['orta doğu', 'ürdün', 'petra', 'iran', 'umman', 'katar', 'lübnan'] },
    { name: 'Kutsal Topraklar', path: '/tours/holy-lands', keywords: ['kutsal', 'kudüs', 'israil', 'filistin', 'betlehem', 'nasıra'] },
    { name: 'Uzak Doğu', path: '/tours/far-east', keywords: ['uzak doğu', 'singapur', 'malezya', 'tayvan', 'filipinler', 'hong kong'] },
    
    // Türkiye Turları
    { name: 'Antalya Turları', path: '/tours/antalya', keywords: ['antalya', 'türkiye', 'lara', 'kaleiçi', 'düden', 'konyaaltı', 'akdeniz'] },
    { name: 'Kapadokya Turları', path: '/tours/cappadocia', keywords: ['kapadokya', 'türkiye', 'balon', 'peri bacası', 'göreme', 'nevşehir'] },
    { name: 'Ege Turları', path: '/tours/aegean-turkey', keywords: ['ege', 'türkiye', 'efes', 'kuşadası', 'çeşme', 'bodrum', 'pamukkale'] },
    { name: 'Akdeniz Turları', path: '/tours/mediterranean-turkey', keywords: ['akdeniz', 'türkiye', 'antalya', 'kaş', 'fethiye', 'kemer', 'alanya'] }
  ];

  // Arama filtresi
  const filteredTours = destination.trim() 
    ? allTours.filter(tour => {
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
    <section id="home" className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1682308999971-208126ba75ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHJlc29ydHxlbnwxfHx8fDE3NjUxNjUxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white mb-6 font-bold">
          Bir Sonraki Maceranızı Keşfedin
        </h1>
        <p className="text-white/90 mb-12 max-w-2xl mx-auto">
          Özenle seçilmiş tur paketlerimiz ve uzman rehberlerimizle dünyanın muhteşem destinasyonlarını keşfedin
        </p>

        {/* Search Card */}
        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label className="block text-gray-700 mb-2 text-left">Destinasyon</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nereye?"
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
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
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
              <label className="block text-gray-700 mb-2 text-left">Tarih</label>
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
              <label className="block text-gray-700 mb-2 text-left">Misafir Sayısı</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                >
                  <option value="1">1 Misafir</option>
                  <option value="2">2 Misafir</option>
                  <option value="3">3 Misafir</option>
                  <option value="4">4 Misafir</option>
                  <option value="5+">5+ Misafir</option>
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Ara
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}