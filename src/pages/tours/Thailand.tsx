import { TourTemplate } from '../../components/TourTemplate';

export function Thailand() {
  const packages = [
    {
      id: 1,
      title: 'Bangkok - Pattaya Turu 7 Gece 9 Gün Süper Promosyon',
      duration: '9 Gün / 7 Gece',
      price: '€999',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Mahan Havayolları', 'Bangkok Şehir Turu Dahil', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bangkok-pattaya'
    },
    {
      id: 2,
      title: 'Keşfet Tayland Bangkok Pattaya Phuket Turu',
      duration: '9 Gün / 7 Gece',
      price: '€1499',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['3 Destinasyon', 'İç Hat Uçuşları Dahil', 'Türkçe Rehber'],
      detailUrl: '/tour-details/kesfet-tayland'
    },
    {
      id: 3,
      title: 'Bangkok - Pattaya Turu 7 Gece 9 Gün Süper Promosyon',
      duration: '9 Gün / 7 Gece',
      price: '€1149',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Mahan Havayolları', 'Pattaya 5 Gece', 'Bol Serbest Zaman'],
      detailUrl: '/tour-details/bangkok-pattaya-extended'
    }
  ];

  const highlights = [
    'Egzotik tapınaklar ve antik şehirler',
    'Kristal berraklığında plajlar ve adalar',
    'Dünyaca ünlü Tayland mutfağı',
    'Geleneksel Tayland masajı ve SPA',
    'Canlı gece hayatı ve sokak pazarları',
    'Dostane ve sıcakkanlı yerel halk'
  ];

  const whyChoose = [
    'Deneyimli Rehberler',
    'Konforlu Konaklama',
    'Özel Turlar',
    'En İyi Fiyat Garantisi'
  ];

  return (
    <TourTemplate
      title="Tayland Turları"
      description="Gülümseme ülkesi Tayland'da egzotik tapınaklar, kristal berraklığında denizler ve eşsiz mutfak deneyimi sizi bekliyor."
      heroImage="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}