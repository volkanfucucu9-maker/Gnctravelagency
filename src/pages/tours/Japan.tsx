import { TourTemplate } from '../../components/TourTemplate';

export function Japan() {
  const packages = [
    {
      id: 1,
      title: 'Tokyo & Kyoto Klasik',
      duration: '8 Gün / 7 Gece',
      price: '€980',
      image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800',
      rating: 5,
      features: ['Shinkansen', 'Tapınaklar', 'Geleneksel Kültür']
    },
    {
      id: 2,
      title: 'Japonya Panorama',
      duration: '12 Gün / 11 Gece',
      price: '€1.300',
      image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800',
      rating: 5,
      features: ['5 Şehir', 'Fuji Dağı', 'Onsen Deneyimi']
    },
    {
      id: 3,
      title: 'Kiraz Çiçeği Sezonu',
      duration: '9 Gün / 8 Gece',
      price: '€1.100',
      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
      rating: 5,
      features: ['Sakura Sezonu', 'Özel Zamanlama', 'Bahçe Gezileri']
    },
    {
      id: 4,
      title: 'Osaka & Hiroshima',
      duration: '7 Gün / 6 Gece',
      price: '€850',
      image: 'https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?w=800',
      rating: 5,
      features: ['Sokak Yemekleri', 'Barış Parkı', 'Miyajima Adası']
    },
    {
      id: 5,
      title: 'Japonya Kültür Turu',
      duration: '10 Gün / 9 Gece',
      price: '€1.160',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800',
      rating: 5,
      features: ['Geleneksel Oteller', 'Çay Töreni', 'Sumo Gösterisi']
    },
    {
      id: 6,
      title: 'Hokkaido Kış Turı',
      duration: '6 Gün / 5 Gece',
      price: '€900',
      image: 'https://images.unsplash.com/photo-1624253321171-767c43dda98f?w=800',
      rating: 5,
      features: ['Kayak', 'Kar Festivali', 'Sıcak Su Kaynakları']
    }
  ];

  const highlights = [
    'Benzersiz Japon kültürü ve gelenekleri',
    'Modern teknoloji ile tarihin buluşması',
    'Nefis Japon mutfağı ve sushi deneyimi',
    'Zen tapınakları ve muhteşem bahçeler',
    'Hızlı tren (Shinkansen) deneyimi',
    'Güvenli ve temiz bir ülke'
  ];

  const whyChoose = [
    'Uzman Japonya Rehberleri',
    'JR Pass Dahil',
    'Otantik Deneyimler',
    'Küçük Grup Turları'
  ];

  return (
    <TourTemplate
      title="Japonya Turları"
      description="Gelenek ve modernliğin mükemmel uyumunu Japonya'da keşfedin."
      heroImage="https://images.unsplash.com/photo-1729864881494-d96345092845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMGt5b3RvJTIwdGVtcGxlfGVufDF8fHx8MTc2NTEyMTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}