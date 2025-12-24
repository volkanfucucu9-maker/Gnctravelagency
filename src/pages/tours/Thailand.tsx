import { TourTemplate } from '../../components/TourTemplate';

export function Thailand() {
  const packages = [
    {
      id: 1,
      title: 'Bangkok & Pattaya Turu',
      duration: '7 Gün / 6 Gece',
      price: '€699',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', 'Şehir Turları Dahil', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 2,
      title: 'Phuket Adası Turu',
      duration: '8 Gün / 7 Gece',
      price: '€799',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Phi Phi Adaları Turu', 'Plaj Keyfi', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 3,
      title: 'Krabi & Phi Phi Adaları',
      duration: '7 Gün / 6 Gece',
      price: '€749',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['James Bond Adası', 'Deniz Aktiviteleri', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 4,
      title: 'Chiang Mai Kültür Turu',
      duration: '6 Gün / 5 Gece',
      price: '€649',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1598367399734-ee7eb4e8d0a3?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Tapınak Gezileri', 'Fil Parkı', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 5,
      title: 'Koh Samui Adası',
      duration: '7 Gün / 6 Gece',
      price: '€779',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Balayı Paketleri', 'SPA ve Wellness', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 6,
      title: 'Bangkok & Phuket Kombine',
      duration: '10 Gün / 9 Gece',
      price: '€899',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1559941933-c5c347f64505?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['2 Destinasyon', 'Şehir ve Deniz', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 7,
      title: 'Ayutthaya Antik Kent',
      duration: '5 Gün / 4 Gece',
      price: '€599',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['UNESCO Mirası', 'Tapınak Turları', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 8,
      title: 'Koh Tao Dalış Turu',
      duration: '6 Gün / 5 Gece',
      price: '€729',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Dalış Eğitimi', 'Sualtı Dünyası', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 9,
      title: 'Hua Hin Plaj Tatili',
      duration: '7 Gün / 6 Gece',
      price: '€679',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Kraliyet Sarayı', 'Plaj Aktiviteleri', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 10,
      title: 'Kanchanaburi Doğa Turu',
      duration: '5 Gün / 4 Gece',
      price: '€629',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Kwai Nehri Köprüsü', 'Erawan Şelaleleri', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 11,
      title: 'Pattaya Eğlence Turu',
      duration: '6 Gün / 5 Gece',
      price: '€649',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Gece Hayatı', 'Plaj ve Eğlence', 'Türkçe Rehber'],
      detailUrl: '/packages'
    },
    {
      id: 12,
      title: 'Tayland Yoga Retreati',
      duration: '8 Gün / 7 Gece',
      price: '€849',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Yoga ve Meditasyon', 'Wellness', 'Türkçe Rehber'],
      detailUrl: '/packages'
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
