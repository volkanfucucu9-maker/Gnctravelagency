import { TourTemplate } from '../../components/TourTemplate';

export function Bali() {
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
    }
  ];

  const highlights = [
    'Muhteşem tapınaklar ve mistik atmosfer',
    'Dünyaca ünlü pirinç terasları',
    'Kristal berraklığında plajlar ve dalış noktaları',
    'Geleneksel Balinese kültürü ve sanatı',
    'Lüks villalar ve wellness merkezleri',
    'Egzotik mutfak ve tropikal meyveler'
  ];

  const whyChoose = [
    'Lüks Villa Konaklama',
    'Türkçe Rehberlik',
    'Özel Turlar',
    'SPA ve Wellness'
  ];

  return (
    <TourTemplate
      title="Bali (Endonezya) Turları"
      description="Tanrıların adası Bali'de mistik tapınaklar, yeşil pirinç terasları ve kristal berraklığında plajlar sizi bekliyor."
      heroImage="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}