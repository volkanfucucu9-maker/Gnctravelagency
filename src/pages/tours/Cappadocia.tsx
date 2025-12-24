import { TourTemplate } from '../../components/TourTemplate';

export function Cappadocia() {
  const packages = [
    {
      id: 1,
      title: 'Kapadokya Balon Turu',
      duration: '3 Gün / 2 Gece',
      price: '€225',
      image: 'https://images.unsplash.com/photo-1641958308842-8bfb108a0b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXBwYWRvY2lhJTIwaG90JTIwYWlyJTIwYmFsbG9vbnxlbnwxfHx8fDE3NjUyMDkxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      features: ['Sıcak Hava Balonu', 'Peri Bacaları', 'Mağara Otel']
    },
    {
      id: 2,
      title: 'Kapadokya Özel Tur',
      duration: '4 Gün / 3 Gece',
      price: '€340',
      image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800',
      rating: 5,
      features: ['VIP Balon Turu', 'Yeraltı Şehri', 'ATV Safari']
    },
    {
      id: 3,
      title: 'Kapadokya Macera Turu',
      duration: '5 Gün / 4 Gece',
      price: '€420',
      image: 'https://images.unsplash.com/photo-1583905170345-1b8f0c7eb169?w=800',
      rating: 5,
      features: ['At Safari', 'Vadi Yürüyüşü', 'Fotoğraf Turları']
    },
    {
      id: 4,
      title: 'Kapadokya Romantik Paket',
      duration: '4 Gün / 3 Gece',
      price: '€480',
      image: 'https://images.unsplash.com/photo-1605555277606-0b77df49ebc9?w=800',
      rating: 5,
      features: ['Balayı Özel', 'Mağara Spa', 'Romantik Akşam Yemeği']
    }
  ];

  const highlights = [
    'Dünyaca ünlü sıcak hava balonu deneyimi',
    'Benzersiz peri bacaları ve kayalık oluşumlar',
    'Göreme Açık Hava Müzesi',
    'Tarihi yeraltı şehirleri',
    'Otantik mağara otellerde konaklama',
    'Eşsiz vadi manzaraları'
  ];

  const whyChoose = [
    'En İyi Konaklama Yerleri',
    'Yerel Rehberler',
    'Küçük Grup Turları',
    'Özel Transfer Hizmeti'
  ];

  return (
    <TourTemplate
      title="Kapadokya Turları"
      description="Peri bacaları, yeraltı şehirleri ve sıcak hava balonlarıyla büyülü Kapadokya deneyimi."
      heroImage="https://images.unsplash.com/photo-1641958308842-8bfb108a0b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXBwYWRvY2lhJTIwaG90JTIwYWlyJTIwYmFsbG9vbnxlbnwxfHx8fDE3NjUyMDkxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}