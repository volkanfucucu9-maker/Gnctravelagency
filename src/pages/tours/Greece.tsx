import { TourTemplate } from '../../components/TourTemplate';

export function Greece() {
  const packages = [
    {
      id: 1,
      title: 'Atina & Santorini',
      duration: '7 Gün / 6 Gece',
      price: '€580',
      image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800',
      rating: 5,
      features: ['Akropolis', 'Beyaz Evler', 'Gün Batımı']
    },
    {
      id: 2,
      title: 'Yunan Adaları Turu',
      duration: '9 Gün / 8 Gece',
      price: '€700',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
      rating: 5,
      features: ['Mykonos', 'Santorini', 'Girit', 'Rodos']
    },
    {
      id: 3,
      title: 'Klasik Yunanistan',
      duration: '6 Gün / 5 Gece',
      price: '€490',
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
      rating: 5,
      features: ['Atina', 'Delphi', 'Meteora']
    },
    {
      id: 4,
      title: 'Santorini Balayı',
      duration: '5 Gün / 4 Gece',
      price: '€640',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
      rating: 5,
      features: ['Cave Hotel', 'Romantik', 'Özel Turlar']
    },
    {
      id: 5,
      title: 'Mykonos Party',
      duration: '5 Gün / 4 Gece',
      price: '€530',
      image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800',
      rating: 5,
      features: ['Beach Clubs', 'Gece Hayatı', 'Plaj Keyfi']
    },
    {
      id: 6,
      title: 'Yunanistan Panorama',
      duration: '12 Gün / 11 Gece',
      price: '€840',
      image: 'https://images.unsplash.com/photo-1504918630739-cf5ea9f3ab5f?w=800',
      rating: 5,
      features: ['Kara & Adalar', 'Komple Tur', 'Antik Kentler']
    }
  ];

  const highlights = [
    'Dünyaca ünlü Santorini\'nin mavi kubbeleri',
    'Antik Yunan medeniyeti ve mitolojisi',
    'Eşsiz Ege denizi ve muhteşem plajlar',
    'Lezzetli Yunan mutfağı ve mezeleri',
    'Her adada farklı bir deneyim',
    'Romantik gün batımları'
  ];

  const whyChoose = [
    'Deneyimli Ada Rehberleri',
    'Ferry Rezervasyonları',
    'Merkezi Konaklamalar',
    'Özel Plaj Turları'
  ];

  return (
    <TourTemplate
      title="Yunanistan Turları"
      description="Mitolojinin ve maviliğin ülkesi Yunanistan\'da rüya gibi bir tatil."
      heroImage="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlY2UlMjBzYW50b3Jpbml8ZW58MXx8fHwxNzY1MTkyMzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}