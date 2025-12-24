import { TourTemplate } from '../../components/TourTemplate';

export function AegeanTurkey() {
  const packages = [
    {
      id: 1,
      title: 'Ege Kıyıları Turu',
      duration: '5 Gün / 4 Gece',
      price: '€295',
      image: 'https://images.unsplash.com/photo-1656506598002-9a5138c3a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFcGhlc3VzJTIwVHVya2V5JTIwYW5jaWVudHxlbnwxfHx8fDE3NjUyMDkxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      features: ['Efes Antik Kenti', 'Pamukkale', 'Kuşadası']
    },
    {
      id: 2,
      title: 'Ege\'nin İncileri',
      duration: '7 Gün / 6 Gece',
      price: '€445',
      image: 'https://images.unsplash.com/photo-1605640576461-cfa0f7a1dc5c?w=800',
      rating: 5,
      features: ['Çeşme', 'Alaçatı', 'İzmir']
    },
    {
      id: 3,
      title: 'Bodrum & Datça Turu',
      duration: '6 Gün / 5 Gece',
      price: '€380',
      image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800',
      rating: 5,
      features: ['Bodrum Kalesi', 'Datça Yarımadası', 'Plaj Keyfi']
    },
    {
      id: 4,
      title: 'Ege Kültür Rotası',
      duration: '8 Gün / 7 Gece',
      price: '€520',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
      rating: 5,
      features: ['Bergama', 'Pergamon', 'Antik Kentler']
    }
  ];

  const highlights = [
    'Efes Antik Kenti ve tarihi kalıntılar',
    'Pamukkale\'nin beyaz travertenleri',
    'Muhteşem Ege sahilleri',
    'Alaçatı ve Çeşme\'nin özel atmosferi',
    'Bodrum\'un canlı gece hayatı',
    'Zengin Antik Yunan ve Roma mirası'
  ];

  const whyChoose = [
    'En İyi Konaklama Yerleri',
    'Yerel Rehberler',
    'Küçük Grup Turları',
    'Özel Transfer Hizmeti'
  ];

  return (
    <TourTemplate
      title="Ege Turları"
      description="Antik kentler, kristal berraklığında deniz ve muhteşem koylarıyla Ege bölgesini keşfedin."
      heroImage="https://images.unsplash.com/photo-1656506598002-9a5138c3a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFcGhlc3VzJTIwVHVya2V5JTIwYW5jaWVudHxlbnwxfHx8fDE3NjUyMDkxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}