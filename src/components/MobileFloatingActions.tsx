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
      {/* Quick Actions Menu - Mobile Only */}
      {isOpen && (
        <div className="lg:hidden fixed bottom-24 right-4 z-50 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
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