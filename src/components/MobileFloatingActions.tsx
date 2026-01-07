import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { trackContactClick } from './FacebookPixel';

export function MobileFloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const handlePhoneClick = () => {
    trackContactClick('phone', '+905432200543');
  };

  const handleWhatsAppClick = () => {
    trackContactClick('whatsapp', '+905432200543');
  };

  return (
    <>
      {/* Mobile Sticky CTA Bar - Only on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-600 shadow-2xl z-40">
        <div className="grid grid-cols-2 gap-0">
          <a
            href="tel:+905432200543"
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 px-4 hover:bg-blue-700 transition-all active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span className="font-bold text-sm">
              {language === 'tr' ? 'Hemen Ara' : language === 'en' ? 'Call Now' : 'Jetzt Anrufen'}
            </span>
          </a>
          
          <a
            href="https://wa.me/905432200543"
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white py-4 px-4 hover:bg-green-600 transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-bold text-sm">
              {language === 'tr' ? 'WhatsApp' : 'WhatsApp'}
            </span>
          </a>
        </div>
      </div>

      {/* Floating Action Button - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-20 right-4 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-90"
        aria-label="Quick Actions"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>

      {/* Quick Actions Menu - Mobile Only */}
      {isOpen && (
        <div className="lg:hidden fixed bottom-36 right-4 z-50 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
          <a
            href="tel:+905432200543"
            onClick={() => {
              handlePhoneClick();
              setIsOpen(false);
            }}
            className="flex items-center gap-3 px-6 py-4 hover:bg-blue-50 transition-colors border-b border-gray-100"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">
                {language === 'tr' ? 'Telefon' : language === 'en' ? 'Phone' : 'Telefon'}
              </p>
              <p className="text-xs text-gray-600">+90 543 220 05 43</p>
            </div>
          </a>

          <a
            href="https://wa.me/905432200543"
            onClick={() => {
              handleWhatsAppClick();
              setIsOpen(false);
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 hover:bg-green-50 transition-colors border-b border-gray-100"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">WhatsApp</p>
              <p className="text-xs text-gray-600">
                {language === 'tr' ? 'Hızlı Mesaj' : language === 'en' ? 'Quick Message' : 'Schnelle Nachricht'}
              </p>
            </div>
          </a>

          <a
            href="mailto:info@gnctravel.com"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-6 py-4 hover:bg-purple-50 transition-colors"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">
                {language === 'tr' ? 'E-posta' : language === 'en' ? 'Email' : 'E-Mail'}
              </p>
              <p className="text-xs text-gray-600">info@gnctravel.com</p>
            </div>
          </a>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
