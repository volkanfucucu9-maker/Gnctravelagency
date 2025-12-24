import { TourTemplate } from '../../components/TourTemplate';

export function FarEast() {
  const packages = [
    {
      id: 1,
      title: 'Japonya & Güney Kore',
      duration: '11 Gün / 10 Gece',
      price: '₺56.999',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      rating: 5,
      features: ['2 Ülke', 'Teknoloji', 'Gelenekler']
    },
    {
      id: 2,
      title: 'Çin & Hong Kong',
      duration: '10 Gün / 9 Gece',
      price: '₺48.500',
      image: 'https://images.unsplash.com/photo-1517817748493-49ec54a32465?w=800',
      rating: 5,
      features: ['Pekin', 'Şangay', 'Hong Kong']
    },
    {
      id: 3,
      title: 'Singapur & Malezya',
      duration: '8 Gün / 7 Gece',
      price: '₺38.000',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      rating: 5,
      features: ['Marina Bay', 'Kuala Lumpur', 'Langkawi']
    },
    {
      id: 4,
      title: 'Tayvan Keşfi',
      duration: '7 Gün / 6 Gece',
      price: '₺42.000',
      image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800',
      rating: 5,
      features: ['Taipei', 'Doğal Güzellikler', 'Tapınaklar']
    },
    {
      id: 5,
      title: 'Filipinler Tatil',
      duration: '9 Gün / 8 Gece',
      price: '₺35.500',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
      rating: 5,
      features: ['Manila', 'Palawan', 'Plajlar']
    },
    {
      id: 6,
      title: 'Uzak Doğu Ekspres',
      duration: '16 Gün / 15 Gece',
      price: '₺68.000',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      rating: 5,
      features: ['5 Ülke', 'Kapsamlı Tur', 'Kültür & Doğa']
    }
  ];

  const highlights = [
    'Gelişmiş teknoloji ve geleneksel kültür',
    'Muhteşem gökdelenler ve modern mimari',
    'Tropikal adalar ve doğal güzellikler',
    'Eşsiz Uzak Doğu mutfağı',
    'Tapınaklar ve manastırlar',
    'Güvenli ve temiz şehirler'
  ];

  const whyChoose = [
    'Uzak Doğu Uzmanları',
    'Kapsamlı Rehberlik',
    'Özel Turlar',
    'Modern Ulaşım'
  ];

  return (
    <TourTemplate
      title="Uzak Doğu Turları"
      description="Modernlik ve geleneğin iç içe geçtiği Uzak Doğu\'yu keşfedin."
      heroImage="https://images.unsplash.com/photo-1553469110-444801758239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXIlMjBlYXN0JTIwYXNpYSUyMHRyYXZlbHxlbnwxfHx8fDE3NjUyMDIwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}
