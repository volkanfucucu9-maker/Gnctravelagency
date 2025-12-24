import { TourTemplate } from '../../components/TourTemplate';

export function MediterraneanTurkey() {
  const packages = [
    {
      id: 1,
      title: 'Antalya Tatil Paketi',
      duration: '5 Gün / 4 Gece',
      price: '€270',
      image: 'https://images.unsplash.com/photo-1669046632648-609242cd51e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbnRhbHlhJTIwTWVkaXRlcnJhbmVhbiUyMGNvYXN0fGVufDF8fHx8MTc2NTIwOTE3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      features: ['Kaleiçi', 'Düden Şelalesi', 'Her Şey Dahil']
    },
    {
      id: 2,
      title: 'Kaş & Kekova Turu',
      duration: '4 Gün / 3 Gece',
      price: '€320',
      image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800',
      rating: 5,
      features: ['Batık Şehir', 'Tekne Turu', 'Dalış']
    },
    {
      id: 3,
      title: 'Fethiye & Ölüdeniz',
      duration: '6 Gün / 5 Gece',
      price: '€395',
      image: 'https://images.unsplash.com/photo-1599577180661-f1e7c77bbc0a?w=800',
      rating: 5,
      features: ['Yamaç Paraşütü', 'Mavi Lagün', 'Saklıkent Kanyonu']
    },
    {
      id: 4,
      title: 'Akdeniz Sahil Turu',
      duration: '7 Gün / 6 Gece',
      price: '€480',
      image: 'https://images.unsplash.com/photo-1605555276855-f7c1c2fd2845?w=800',
      rating: 5,
      features: ['Alanya', 'Side', 'Aspendos']
    }
  ];

  const highlights = [
    'Turkuaz mavisi Akdeniz kıyıları',
    'Muhteşem antik kentler ve tiyatrolar',
    'Dünyaca ünlü Ölüdeniz ve Mavi Lagün',
    'Likya Yolu yürüyüş rotası',
    'Zengin deniz ürünleri mutfağı',
    'Yıl boyu güneşli hava'
  ];

  const whyChoose = [
    'En İyi Konaklama Yerleri',
    'Yerel Rehberler',
    'Küçük Grup Turları',
    'Özel Transfer Hizmeti'
  ];

  return (
    <TourTemplate
      title="Akdeniz Turları"
      description="Turkuaz deniz, antik kentler ve eşsiz doğal güzelliklerle Akdeniz kıyılarını keşfedin."
      heroImage="https://images.unsplash.com/photo-1669046632648-609242cd51e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbnRhbHlhJTIwTWVkaXRlcnJhbmVhbiUyMGNvYXN0fGVufDF8fHx8MTc2NTIwOTE3MHww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}