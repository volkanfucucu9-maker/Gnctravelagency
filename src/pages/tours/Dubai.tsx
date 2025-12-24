import { TourTemplate } from '../../components/TourTemplate';

export function Dubai() {
  const packages = [
    {
      id: 1,
      title: 'Dubai Turu 3 Gece AJet Havayolları İle',
      duration: '4 Gün / 3 Gece',
      price: '€550',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1651284819032-42a925c1b114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGFqZXQlMjBhaXJsaW5lcyUyMGJ1cmolMjBraGFsaWZhJTIwY2l0eXxlbnwxfHx8fDE3NjYwNTA2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      features: ['AJet Havayolları', 'Dubai İkonları Şehir Turu', 'Türkçe Rehber'],
      detailUrl: '/tour-details/dubai-ajet'
    },
    {
      id: 2,
      title: 'Bir Dubai Masalı - Dubai Şehir Turu ve Abra Geçişi Dahil',
      duration: '6 Gün / 5 Gece',
      price: '€499',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1761341063556-80cb742411b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMG1hcmluYSUyMGFicmElMjBib2F0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzY2MDUyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      features: ['AJet Havayolları', 'Dubai Şehir Turu ve Abra', 'Türkçe Rehber'],
      detailUrl: '/tour-details/dubai-masali'
    },
    {
      id: 3,
      title: 'Muhteşem Dubai Turu - Dubai Şehir Turu ve Abra Geçişi Dahil',
      duration: '4 Gün / 3 Gece',
      price: '€1099',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1746731341048-efc3e864c6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWlyYXRlcyUyMGFpcmxpbmUlMjBkdWJhaSUyMGJ1cmolMjBraGFsaWZhfGVufDF8fHx8MTc2NjA1MzY1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      features: ['Emirates Havayolları', 'Dubai Şehir Turu ve Abra', 'Türkçe Rehber'],
      detailUrl: '/tour-details/dubai-emirates'
    }
  ];

  const highlights = [
    'Dünyanın en yüksek binası Burj Khalifa',
    'Lüks alışveriş merkezleri ve altın çarşısı',
    'Heyecan verici çöl safarisi deneyimi',
    'Modern mimari harikalarını keşfetme',
    'Dünya mutfağından lezzetler',
    'Güvenli ve konforlu tatil ortamı'
  ];

  const whyChoose = [
    'En İyi Otel Seçenekleri',
    'Türkçe Rehberlik',
    'VIP Hizmetler',
    'Özel Turlar'
  ];

  return (
    <TourTemplate
      title="Dubai Turları"
      description="Geleceğin şehri Dubai'de lüks ve heyecanı bir arada yaşayın."
      heroImage="https://images.unsplash.com/photo-1706798636444-d4eb076fb63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhfGVufDF8fHx8MTc2NTE5NjI2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}