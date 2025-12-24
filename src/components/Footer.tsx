import { Plane, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-8 h-8 text-blue-400" />
              <span className="text-blue-400">GNC Travel</span>
            </div>
            <p className="text-gray-400 mb-4">
              Dünya çapında unutulmaz seyahat deneyimleri için güvenilir partneriniz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <a href="/#destinations" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Destinasyonlar
                </a>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Tur Paketleri
                </Link>
              </li>
              <li>
                <Link to="/visa" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Vize Desteği
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Otel Rezervasyonu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Uçak Bileti
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Tur Rehberleri
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Seyahat Sigortası
                </a>
              </li>
              <li>
                <Link to="/visa" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Vize Desteği
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Side Mah. Yavuz Sultan Selim Blv. No:6 A-Z01 MANAVGAT / ANTALYA</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>+90 543 220 0543</span>
                  <span>+90 242 753 2827</span>
                </div>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@gnctravel.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Pazartesi – Cumartesi : 09:00 – 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 GNC Travel Agency. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}