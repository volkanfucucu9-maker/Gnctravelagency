import { TourTemplate } from '../../components/TourTemplate';

export function Bali() {
  const packages = [
    {
      id: 1,
      title: 'Bali Cenneti - Ubud & Seminyak',
      duration: '8 Gün / 7 Gece',
      price: '€899',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', 'Tapınak Turları', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bali-paradise'
    },
    {
      id: 2,
      title: 'Bali Balayı Paketİ',
      duration: '7 Gün / 6 Gece',
      price: '€1199',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Romantik Villalar', 'SPA Paketleri', 'Özel Akşam Yemeği'],
      detailUrl: '/packages'
    },
    {
      id: 3,
      title: 'Nusa Penida Adası Turu',
      duration: '6 Gün / 5 Gece',
      price: '€799',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Kelingking Beach', 'Şnorkelle Deniz Kaplumbağaları', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 4,
      title: 'Ubud Kültür Turu',
      duration: '5 Gün / 4 Gece',
      price: '€749',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Pirinç Terasları', 'Maymun Ormanı', 'Yoga Seansları'],
      detailUrl: '/packages'
    },
    {
      id: 5,
      title: 'Bali Macera Paketi',
      duration: '7 Gün / 6 Gece',
      price: '€849',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1555400082-3b0cd61304a7?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Rafting', 'ATV Safari', 'Dalış'],
      detailUrl: '/packages'
    },
    {
      id: 6,
      title: 'Seminyak Plaj Tatili',
      duration: '6 Gün / 5 Gece',
      price: '€779',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Plaj Kulüpleri', 'Gün Batımı Kokteylleri', 'Alışveriş'],
      detailUrl: '/packages'
    },
    {
      id: 7,
      title: 'Bali Yoga Retreati',
      duration: '8 Gün / 7 Gece',
      price: '€999',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Günlük Yoga', 'Meditasyon', 'Organik Beslenme'],
      detailUrl: '/packages'
    },
    {
      id: 8,
      title: 'Tanah Lot & Uluwatu',
      duration: '5 Gün / 4 Gece',
      price: '€699',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Deniz Tapınakları', 'Kecak Dansı', 'Gün Batımı'],
      detailUrl: '/packages'
    },
    {
      id: 9,
      title: 'Bali Wellness Paketi',
      duration: '7 Gün / 6 Gece',
      price: '€949',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['SPA Terapileri', 'Detoks Programı', 'Balinese Masajı'],
      detailUrl: '/packages'
    },
    {
      id: 10,
      title: 'Canggu Sörf Kampı',
      duration: '6 Gün / 5 Gece',
      price: '€729',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Sörf Dersleri', 'Plaj Hayatı', 'Gece Hayatı'],
      detailUrl: '/packages'
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
