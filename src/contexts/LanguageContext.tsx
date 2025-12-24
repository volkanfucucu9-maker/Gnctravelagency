import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'tr' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, any> = {
  tr: {
    header: {
      home: 'Ana Sayfa',
      tours: 'Turlar',
      destinations: 'Destinasyonlar',
      visa: 'Vize Desteği',
      blog: 'Blog',
      about: 'Hakkımızda',
      contact: 'İletişim',
      bookNow: 'Hemen Rezervasyon',
      announcement: 'Erken Rezervasyon Fırsatlarında Son Gün Bugün!',
      checkOffers: 'Fırsatları İncele →',
      hours: 'Saat',
      minutes: 'Dakika',
      seconds: 'Saniye'
    },
    hero: {
      title: 'Hayalinizdeki Tatili Keşfedin',
      subtitle: 'Dünya çapında 100+ destinasyonla unutulmaz anılar yaratın',
      explorePackages: 'Paketleri İncele',
      contactUs: 'Bize Ulaşın'
    },
    tours: {
      international: 'Yurt Dışı Turları',
      culture: 'Kültür Turları',
      turkey: 'Türkiye Turları',
      visaFree: 'Vizesiz Yurt Dışı',
      montenegro: 'Karadağ',
      balkans: 'Balkan Turları',
      italy: 'İtalya',
      dubai: 'Dubai',
      japan: 'Japonya',
      egypt: 'Mısır',
      thailand: 'Tayland',
      bali: 'Bali (Endonezya)',
      greece: 'Yunanistan',
      europeCulture: 'Avrupa Kültür Turları',
      asiaCulture: 'Asya Kültür Turları',
      middleEast: 'Orta Doğu Turları',
      holyLands: 'Kutsal Topraklar',
      farEast: 'Uzak Doğu',
      antalya: 'Antalya Turları',
      cappadocia: 'Kapadokya Turları',
      aegean: 'Ege Turları',
      mediterranean: 'Akdeniz Turları'
    },
    destinations: {
      title: 'Popüler Destinasyonlar',
      subtitle: 'En çok tercih edilen tatil noktalarını keşfedin',
      tours: 'Tur'
    },
    packages: {
      title: 'Öne Çıkan Paketler',
      subtitle: 'Size özel hazırlanmış tur paketlerimizi inceleyin',
      viewAll: 'Tüm Turları İncele',
      from: 'dan itibaren',
      perPerson: 'kişi başı',
      viewDetails: 'Detayları İncele',
      days: 'Gün'
    },
    features: {
      title: 'Neden Bizi Seçmelisiniz?',
      bestPrices: 'En İyi Fiyatlar',
      bestPricesDesc: 'Piyasadaki en rekabetçi fiyatlarla kaliteli tatil deneyimi',
      expertGuides: 'Uzman Rehberler',
      expertGuidesDesc: 'Deneyimli ve yerel rehberlerimizle unutulmaz geziler',
      support: '7/24 Destek',
      supportDesc: 'Her zaman yanınızdayız, sorunlarınıza anında çözüm'
    },
    footer: {
      description: '17 yıldır size en iyi tatil deneyimini sunuyoruz.',
      quickLinks: 'Hızlı Bağlantılar',
      contactInfo: 'İletişim Bilgileri',
      followUs: 'Bizi Takip Edin',
      allRightsReserved: 'Tüm hakları saklıdır.'
    },
    visa: {
      title: 'Vize Destek Hizmetleri',
      subtitle: 'Vize sürecinizde yanınızdayız',
      description: 'Profesyonel ekibimizle vize başvuru sürecinizi kolaylaştırıyoruz.'
    },
    about: {
      title: 'Hakkımızda',
      subtitle: '17 yıllık tecrübemizle yanınızdayız'
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Size nasıl yardımcı olabiliriz?',
      getInTouch: 'Bizimle İletişime Geçin',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-posta',
      sendMessage: 'Mesaj Gönder',
      name: 'Adınız',
      message: 'Mesajınız',
      send: 'Gönder'
    }
  },
  en: {
    header: {
      home: 'Home',
      tours: 'Tours',
      destinations: 'Destinations',
      visa: 'Visa Support',
      blog: 'Blog',
      about: 'About Us',
      contact: 'Contact',
      bookNow: 'Book Now',
      announcement: 'Last Day for Early Booking Offers!',
      checkOffers: 'Check Offers →',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds'
    },
    hero: {
      title: 'Discover Your Dream Vacation',
      subtitle: 'Create unforgettable memories with 100+ destinations worldwide',
      explorePackages: 'Explore Packages',
      contactUs: 'Contact Us'
    },
    tours: {
      international: 'International Tours',
      culture: 'Cultural Tours',
      turkey: 'Turkey Tours',
      visaFree: 'Visa-Free Destinations',
      montenegro: 'Montenegro',
      balkans: 'Balkan Tours',
      italy: 'Italy',
      dubai: 'Dubai',
      japan: 'Japan',
      egypt: 'Egypt',
      thailand: 'Thailand',
      bali: 'Bali (Indonesia)',
      greece: 'Greece',
      europeCulture: 'European Cultural Tours',
      asiaCulture: 'Asian Cultural Tours',
      middleEast: 'Middle East Tours',
      holyLands: 'Holy Lands',
      farEast: 'Far East',
      antalya: 'Antalya Tours',
      cappadocia: 'Cappadocia Tours',
      aegean: 'Aegean Tours',
      mediterranean: 'Mediterranean Tours'
    },
    destinations: {
      title: 'Popular Destinations',
      subtitle: 'Discover the most preferred vacation spots',
      tours: 'Tour'
    },
    packages: {
      title: 'Featured Packages',
      subtitle: 'Explore our specially curated tour packages',
      viewAll: 'View All Tours',
      from: 'from',
      perPerson: 'per person',
      viewDetails: 'View Details',
      days: 'Days'
    },
    features: {
      title: 'Why Choose Us?',
      bestPrices: 'Best Prices',
      bestPricesDesc: 'Quality vacation experience with the most competitive prices in the market',
      expertGuides: 'Expert Guides',
      expertGuidesDesc: 'Unforgettable tours with our experienced and local guides',
      support: '24/7 Support',
      supportDesc: 'We are always with you, instant solutions to your problems'
    },
    footer: {
      description: 'We have been providing you with the best vacation experience for 17 years.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved.'
    },
    visa: {
      title: 'Visa Support Services',
      subtitle: 'We are with you in your visa process',
      description: 'We make your visa application process easier with our professional team.'
    },
    about: {
      title: 'About Us',
      subtitle: 'We are with you with 17 years of experience'
    },
    contact: {
      title: 'Contact',
      subtitle: 'How can we help you?',
      getInTouch: 'Get In Touch',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      sendMessage: 'Send Message',
      name: 'Your Name',
      message: 'Your Message',
      send: 'Send'
    }
  },
  de: {
    header: {
      home: 'Startseite',
      tours: 'Touren',
      destinations: 'Reiseziele',
      visa: 'Visum-Unterstützung',
      blog: 'Blog',
      about: 'Über Uns',
      contact: 'Kontakt',
      bookNow: 'Jetzt Buchen',
      announcement: 'Letzter Tag für Frühbuchungsangebote!',
      checkOffers: 'Angebote Prüfen →',
      hours: 'Stunden',
      minutes: 'Minuten',
      seconds: 'Sekunden'
    },
    hero: {
      title: 'Entdecken Sie Ihren Traumurlaub',
      subtitle: 'Schaffen Sie unvergessliche Erinnerungen mit über 100 Reisezielen weltweit',
      explorePackages: 'Pakete Erkunden',
      contactUs: 'Kontaktieren Sie Uns'
    },
    tours: {
      international: 'Internationale Touren',
      culture: 'Kulturreisen',
      turkey: 'Türkei Touren',
      visaFree: 'Visumfreie Reiseziele',
      montenegro: 'Montenegro',
      balkans: 'Balkan Touren',
      italy: 'Italien',
      dubai: 'Dubai',
      japan: 'Japan',
      egypt: 'Ägypten',
      thailand: 'Thailand',
      bali: 'Bali (Indonesien)',
      greece: 'Griechenland',
      europeCulture: 'Europäische Kulturreisen',
      asiaCulture: 'Asiatische Kulturreisen',
      middleEast: 'Naher Osten Touren',
      holyLands: 'Heilige Länder',
      farEast: 'Ferner Osten',
      antalya: 'Antalya Touren',
      cappadocia: 'Kappadokien Touren',
      aegean: 'Ägäis Touren',
      mediterranean: 'Mittelmeer Touren'
    },
    destinations: {
      title: 'Beliebte Reiseziele',
      subtitle: 'Entdecken Sie die beliebtesten Urlaubsorte',
      tours: 'Tour'
    },
    packages: {
      title: 'Empfohlene Pakete',
      subtitle: 'Entdecken Sie unsere speziell kuratierten Tourpakete',
      viewAll: 'Alle Touren Ansehen',
      from: 'ab',
      perPerson: 'pro Person',
      viewDetails: 'Details Ansehen',
      days: 'Tage'
    },
    features: {
      title: 'Warum Uns Wählen?',
      bestPrices: 'Beste Preise',
      bestPricesDesc: 'Qualitatives Urlaubserlebnis zu den wettbewerbsfähigsten Preisen',
      expertGuides: 'Experten-Guides',
      expertGuidesDesc: 'Unvergessliche Touren mit unseren erfahrenen und lokalen Guides',
      support: '24/7 Support',
      supportDesc: 'Wir sind immer für Sie da, sofortige Lösungen für Ihre Probleme'
    },
    footer: {
      description: 'Seit 17 Jahren bieten wir Ihnen das beste Urlaubserlebnis.',
      quickLinks: 'Schnelllinks',
      contactInfo: 'Kontaktinformationen',
      followUs: 'Folgen Sie Uns',
      allRightsReserved: 'Alle Rechte vorbehalten.'
    },
    visa: {
      title: 'Visum-Support-Services',
      subtitle: 'Wir begleiten Sie bei Ihrem Visumsprozess',
      description: 'Mit unserem professionellen Team erleichtern wir Ihren Visumsantragsprozess.'
    },
    about: {
      title: 'Über Uns',
      subtitle: 'Wir sind mit 17 Jahren Erfahrung an Ihrer Seite'
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Wie können wir Ihnen helfen?',
      getInTouch: 'Kontaktieren Sie Uns',
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      sendMessage: 'Nachricht Senden',
      name: 'Ihr Name',
      message: 'Ihre Nachricht',
      send: 'Senden'
    }
  }
};