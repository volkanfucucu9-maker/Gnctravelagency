import { TourTemplate } from '../../components/TourTemplate';

export function VisaFree() {
  const packages = [
    {
      id: 1,
      title: 'Harikalar Diyarı Bali - Ubud Turu Rotası',
      duration: '8 Gün / 6 Gece',
      price: '€1499',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', 'Ubud + Bali', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bali-ubud-wonderland'
    },
    {
      id: 2,
      title: 'Bangkok - Pattaya Turu',
      duration: '9 Gün / 7 Gece',
      price: '€999',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', 'Tapınak Turları', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bangkok-pattaya'
    },
    {
      id: 3,
      title: 'Keşfet Tayland Bangkok Pattaya Phuket Turu',
      duration: '11 Gün / 9 Gece',
      price: '€1499',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', '3 Şehir Turu', 'Türkçe Rehber'],
      detailUrl: '/tour-details/kesfet-tayland'
    },
    {
      id: 4,
      title: 'Bangkok - Pattaya Turu 7 Gece Süper Promosyon',
      duration: '9 Gün / 7 Gece',
      price: '€1149',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', 'Extended Stay', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bangkok-pattaya-extended'
    }
  ];

  const highlights = [
    'Pasaport ile seyahat imkanı, vize işlemi gerektirmez',
    'Hızlı rezervasyon ve kolay giriş işlemleri',
    'Uygun fiyatlı paket seçenekleri',
    'Bütçenize uygun çeşitli destinasyonlar',
    'Son dakika kampanyaları ve erken rezervasyon indirimleri',
    'Deneyimli rehber kadrosu ile güvenli seyahat'
  ];

  const whyChoose = [
    '15+ Vizesiz Destinasyon',
    'En Uygun Fiyat Garantisi',
    '7/24 Müşteri Desteği',
    'Esnek İptal Koşulları'
  ];

  return (
    <TourTemplate
      title="Vizesiz Yurt Dışı Turları"
      description="Pasaportunuz yeter! Vize derdi olmadan keşfedilecek muhteşem destinasyonlar."
      heroImage="https://images.unsplash.com/photo-1741795858346-8dd215eb60d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWxlciUyMHBhc3Nwb3J0JTIwYWlycG9ydHxlbnwxfHx8fDE3NjY1ODcwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}