import { TourTemplate } from '../../components/TourTemplate';

export function HolyLands() {
  const packages = [
    {
      id: 1,
      title: 'Kutsal Topraklar Klasik',
      duration: '7 Gün / 6 Gece',
      price: '₺32.999',
      image: 'https://images.unsplash.com/photo-1544381190-ebe9b47f5daf?w=800',
      rating: 5,
      features: ['Kudüs', 'Betlehem', 'Nasıra']
    },
    {
      id: 2,
      title: 'İsrail & Filistin Turu',
      duration: '8 Gün / 7 Gece',
      price: '₺36.500',
      image: 'https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=800',
      rating: 5,
      features: ['Tel Aviv', 'Ağlama Duvarı', 'Mescid-i Aksa']
    },
    {
      id: 3,
      title: 'Ürdün & Kutsal Yerler',
      duration: '9 Gün / 8 Gece',
      price: '₺38.000',
      image: 'https://images.unsplash.com/photo-1590939459017-e5c58f0b8fee?w=800',
      rating: 5,
      features: ['Petra', 'Şeria Nehri', 'Madaba']
    },
    {
      id: 4,
      title: 'Dini Turlar Özel',
      duration: '6 Gün / 5 Gece',
      price: '₺29.500',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      rating: 5,
      features: ['İbadet Yerleri', 'Manevi Tur', 'Rehberli']
    },
    {
      id: 5,
      title: 'Kudüs & Çevresi',
      duration: '5 Gün / 4 Gece',
      price: '₺27.000',
      image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800',
      rating: 5,
      features: ['Eski Şehir', 'Üç Din', 'Tarihi Mekanlar']
    },
    {
      id: 6,
      title: 'Kapsamlı Kutsal Tur',
      duration: '11 Gün / 10 Gece',
      price: '₺45.000',
      image: 'https://images.unsplash.com/photo-1569128255710-68dc1cd00ddf?w=800',
      rating: 5,
      features: ['Detaylı Program', 'Tüm Kutsal Yerler', 'Uzman Rehber']
    }
  ];

  const highlights = [
    'Üç semavi dinin kutsal mekanları',
    'Kudüs\'ün tarihi eski şehri',
    'Hz. İsa\'nın yaşadığı kutsal yerler',
    'Ağlama Duvarı ve Mescid-i Aksa',
    'Dini ve tarihi rehberlik',
    'Manevi bir yolculuk deneyimi'
  ];

  const whyChoose = [
    'Dini Tur Uzmanları',
    'Özel İzinler',
    'Kutsal Mekanlara Erişim',
    'Manevi Rehberlik'
  ];

  return (
    <TourTemplate
      title="Kutsal Topraklar Turları"
      description="Semavi dinlerin kutsal mekanlarında manevi bir yolculuğa çıkın."
      heroImage="https://images.unsplash.com/photo-1605592233358-9ffd27610516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXJ1c2FsZW0lMjBob2x5JTIwbGFuZHxlbnwxfHx8fDE3NjUyMDIwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}
