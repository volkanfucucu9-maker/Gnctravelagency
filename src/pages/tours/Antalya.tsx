import { TourTemplate } from '../../components/TourTemplate';

export function Antalya() {
  const packages = [
    {
      id: 1,
      title: 'Antalya Klasik Tur',
      duration: '4 Gün / 3 Gece',
      price: '€220',
      image: 'https://images.unsplash.com/photo-1648644769787-6e4f77f26703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbnRhbHlhJTIwVHVya2V5JTIwYmVhY2h8ZW58MXx8fHwxNzY1MjA5NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      features: ['Kaleiçi', 'Düden Şelalesi', 'Plaj Keyfi']
    },
    {
      id: 2,
      title: 'Antalya Her Şey Dahil',
      duration: '7 Gün / 6 Gece',
      price: '€450',
      image: 'https://images.unsplash.com/photo-1669046632648-609242cd51e8?w=800',
      rating: 5,
      features: ['5 Yıldız Otel', 'Her Şey Dahil', 'Aqua Park']
    },
    {
      id: 3,
      title: 'Antalya & Side Turu',
      duration: '5 Gün / 4 Gece',
      price: '€320',
      image: 'https://images.unsplash.com/photo-1605555276855-f7c1c2fd2845?w=800',
      rating: 5,
      features: ['Side Antik Kenti', 'Aspendos Tiyatrosu', 'Manavgat Şelalesi']
    },
    {
      id: 4,
      title: 'Antalya Macera Paketi',
      duration: '6 Gün / 5 Gece',
      price: '€380',
      image: 'https://images.unsplash.com/photo-1599577180661-f1e7c77bbc0a?w=800',
      rating: 5,
      features: ['Rafting', 'Jeep Safari', 'Tekne Turu']
    }
  ];

  const highlights = [
    'Turkuaz mavisi Akdeniz sahilleri',
    'Tarihi Kaleiçi ve Hadrian Kapısı',
    'Muhteşem Düden ve Kurşunlu Şelaleleri',
    'Side ve Aspendos antik kentleri',
    'Lüks her şey dahil oteller',
    'Yıl boyu güneşli hava ve tertemiz plajlar'
  ];

  const whyChoose = [
    'En İyi Konaklama Yerleri',
    'Yerel Rehberler',
    'Küçük Grup Turları',
    'Özel Transfer Hizmeti'
  ];

  return (
    <TourTemplate
      title="Antalya Turları"
      description="Akdeniz'in incisi Antalya'da unutulmaz bir tatil deneyimi yaşayın."
      heroImage="https://images.unsplash.com/photo-1648644769787-6e4f77f26703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbnRhbHlhJTIwVHVya2V5JTIwYmVhY2h8ZW58MXx8fHwxNzY1MjA5NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}