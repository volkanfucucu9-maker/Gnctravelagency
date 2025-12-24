import { Plane, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';
<img src="/logognctravel.png" alt="GNC Travel Agency" className="h-20" />

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const location = useLocation();
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

  const languages = [
    { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  // Logo SVG
  const logoSVG = (
    <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="80" fill="white"/>
      <text x="20" y="35" fontFamily="Gotham, Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#1E40AF">
        GNC
      </text>
      <text x="20" y="55" fontFamily="Gotham, Arial, sans-serif" fontSize="12" fill="#64748B">
        TRAVEL AGENCY
      </text>
      <circle cx="170" cy="30" r="25" fill="#1E40AF" opacity="0.1"/>
      <text x="153" y="38" fontFamily="Gotham, Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1E40AF">
        10
      </text>
      <text x="148" y="50" fontFamily="Gotham, Arial, sans-serif" fontSize="8" fill="#1E40AF">
        YIL
      </text>
    </svg>
  );

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
              <img src="/logognctravel.png" alt="GNC Travel Agency" className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.home')}
              </Link>
              
              {/* Turlar Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setToursDropdownOpen(true)}
                onMouseLeave={() => setToursDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors py-2">
                  {t('header.tours')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {toursDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white shadow-lg rounded-lg py-4 px-6 min-w-[500px] grid grid-cols-2 gap-8">
                      {navItems.map((category, idx) => (
                        <div key={idx}>
                          <div className="text-blue-600 mb-3">{category.title}</div>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  to={item.path}
                                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex justify-between items-center"
                                >
                                  <span>{item.name}</span>
                                  <span className="text-gray-400 text-xs">({item.count})</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/visa" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.visa')}
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.blog')}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.about')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('header.contact')}
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                {t('header.bookNow')}
              </Link>

              {/* Language Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setLanguageDropdownOpen(true)}
                onMouseLeave={() => setLanguageDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors py-2">
                  <Globe className="w-4 h-4" />
                  {currentLanguage ? currentLanguage.flag : '🇹🇷'}
                </button>
                
                {languageDropdownOpen && (
                  <div className="absolute top-full right-0 pt-2 z-50">
                    <div className="bg-white shadow-lg rounded-lg py-2 min-w-[150px]">
                      {languages.map(lang => (
                        <button
                          key={lang.code}
                          className={`w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors flex items-center gap-2 ${language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                          onClick={() => setLanguage(lang.code)}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {t('header.home')}
                </Link>
                
                {/* Mobile Turlar */}
                <div>
                  <button 
                    onClick={() => setToursDropdownOpen(!toursDropdownOpen)}
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors w-full"
                  >
                    {t('header.tours')}
                    <ChevronDown className={`w-4 h-4 transition-transform ${toursDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {toursDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-3">
                      {navItems.map((category, idx) => (
                        <div key={idx}>
                          <div className="text-blue-600 mb-2 text-sm">{category.title}</div>
                          <ul className="space-y-1 ml-2">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  to={item.path} 
                                  className="text-gray-600 hover:text-blue-600 transition-colors text-xs flex justify-between"
                                >
                                  <span>{item.name}</span>
                                  <span className="text-gray-400">({item.count})</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/visa" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {t('header.visa')}
                </Link>
                <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {t('header.blog')}
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {t('header.about')}
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {t('header.contact')}
                </Link>
                
                {/* Mobile Language Selector */}
                <div className="border-t pt-4">
                  <div className="flex gap-2">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        className={`px-3 py-1 rounded transition-colors ${language === lang.code ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        onClick={() => setLanguage(lang.code)}
                      >
                        {lang.flag} {lang.code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  {t('header.bookNow')}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
