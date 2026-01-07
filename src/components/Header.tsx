import { Plane, Menu, X, ChevronDown, Globe, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { trackSearch } from './FacebookPixel';
import logo from '../assets/logognctravel.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [visaDropdownOpen, setVisaDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 21,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setToursDropdownOpen(false);
    setVisaDropdownOpen(false);
  }, [location]);

  const navItems = [
    {
      title: t('tours.abroad'),
      items: [
        { name: t('tours.visaFree'), count: 4, path: '/tours/visa-free' },
        { name: t('tours.dubai'), count: 3, path: '/tours/dubai' },
        { name: t('tours.egypt'), count: 6, path: '/tours/egypt' },
        { name: t('tours.thailand'), count: 3, path: '/tours/thailand' },
        { name: t('tours.bali'), count: 1, path: '/tours/bali' }
      ]
    },
    {
      title: t('tours.culture'),
      items: [
        { name: t('tours.europeCulture'), count: 2, path: '/tours/europe-culture' },
        { name: t('tours.asiaCulture'), count: 4, path: '/tours/asia-culture' },
        { name: t('tours.middleEast'), count: 3, path: '/tours/middle-east' }
      ]
    }
  ];

  const visaItems = [
    { name: t('visa.all'), path: '/visa' },
    { name: t('visa.dubai'), path: '/dubai-visa' }
  ];

  const languages = [
    { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Track Facebook Pixel Search event
      trackSearch(searchQuery, 'header_search');
      
      // Navigate to tours page with search query
      navigate(`/tours/all?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-blue-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="font-medium">{t('header.announcement')}</span>
            <div className="flex items-center gap-2">
              <div className="bg-white text-blue-600 rounded px-2 py-1 min-w-[40px] text-center">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span>:</span>
              <div className="bg-white text-blue-600 rounded px-2 py-1 min-w-[40px] text-center">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span>:</span>
              <div className="bg-white text-blue-600 rounded px-2 py-1 min-w-[40px] text-center">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
            <div className="hidden md:flex gap-2 text-xs">
              <span>{t('header.hours')}</span>
              <span className="ml-6">{t('header.minutes')}</span>
              <span className="ml-4">{t('header.seconds')}</span>
            </div>
          </div>
          <Link 
            to="/packages"
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            {t('header.checkOffers')}
          </Link>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="GNC Travel Agency" className="h-14 md:h-20" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.home')}
              </Link>
              
              {/* Tours Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setToursDropdownOpen(true)}
                onMouseLeave={() => setToursDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
                  {t('header.tours')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {toursDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-96 bg-white rounded-lg shadow-xl border border-gray-100 py-4">
                      <div className="grid grid-cols-2 gap-4 px-4">
                        {navItems.map((category, idx) => (
                          <div key={idx}>
                            <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    to={item.path}
                                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-between group"
                                  >
                                    <span>{item.name}</span>
                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                      {item.count}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 px-4">
                        <Link
                          to="/tours/all"
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                        >
                          {t('home.viewAllTours')}
                          <span className="text-lg">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Visa Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setVisaDropdownOpen(true)}
                onMouseLeave={() => setVisaDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
                  {t('header.visa')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {visaDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                      {visaItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.about')}
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.blog')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.contact')}
              </Link>

              {/* Language Selector */}
              <div 
                className="relative group"
                onMouseEnter={() => setLanguageDropdownOpen(true)}
                onMouseLeave={() => setLanguageDropdownOpen(false)}
              >
                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage?.flag}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {languageDropdownOpen && (
                  <div className="absolute top-full right-0 pt-2 z-50">
                    <div className="w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors flex items-center gap-2 ${
                            language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu & Search Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('header.home')}
                </Link>
                
                <div>
                  <button 
                    onClick={() => setToursDropdownOpen(!toursDropdownOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>{t('header.tours')}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${toursDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {toursDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {navItems.map((category, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="font-semibold text-gray-900 text-sm">{category.title}</p>
                          {category.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={item.path}
                              className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name} ({item.count})
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link
                        to="/tours/all"
                        className="block text-blue-600 hover:text-blue-700 font-medium text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t('home.viewAllTours')} →
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    onClick={() => setVisaDropdownOpen(!visaDropdownOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>{t('header.visa')}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${visaDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {visaDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {visaItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('header.about')}
                </Link>
                <Link 
                  to="/blog" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('header.blog')}
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('header.contact')}
                </Link>

                {/* Language Selector Mobile */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-500 text-sm mb-2">Dil / Language</p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          language === lang.code 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {lang.flag} {lang.code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{t('header.search')}</h3>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearch} className="mt-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('header.searchPlaceholder')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('header.search')}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}