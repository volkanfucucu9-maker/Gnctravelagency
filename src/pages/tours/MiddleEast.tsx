import { TourTemplate } from '../../components/TourTemplate';

export function MiddleEast() {
  const packages = [
    {
      id: 1,
      title: 'Ürdün Klasik Tur',
      duration: '6 Gün / 5 Gece',
      price: '₺26.999',
      image: 'https://images.unsplash.com/photo-1576485290814-1c72aa4ba5b3?w=800',
      rating: 5,
      features: ['Petra', 'Wadi Rum', 'Ölü Deniz']
    },
    {
      id: 2,
      title: 'İran Kültür Turu',
      duration: '9 Gün / 8 Gece',
      price: '₺34.500',
      image: 'https://images.unsplash.com/photo-1567097202003-a56d4c7c6ea3?w=800',
      rating: 5,
      features: ['İsfahan', 'Şiraz', 'Pers Medeniyeti']
    },
    {
      id: 3,
      title: 'Umman Keşfi',
      duration: '7 Gün / 6 Gece',
      price: '₺29.000',
      image: 'https://images.unsplash.com/photo-1544428072-f654a5fead20?w=800',
      rating: 5,
      features: ['Muskat', 'Çöl', 'Kaleler']
    },
    {
      id: 4,
      title: 'Katar & Bahreyn',
      duration: '5 Gün / 4 Gece',
      price: '₺24.500',
      image: 'https://images.unsplash.com/photo-1560881634-3b42cd2f0fde?w=800',
      rating: 5,
      features: ['Doha', 'Modern Mimarisi', 'Lüks']
    },
    {
      id: 5,
      title: 'Lübnan Turu',
      duration: '6 Gün / 5 Gece',
      price: '₺27.500',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800',
      rating: 4,
      features: ['Beyrut', 'Baalbek', 'Cedrus Ormanları']
    },
    {
      id: 6,
      title: 'Orta Doğu Ekspres',
      duration: '12 Gün / 11 Gece',
      price: '₺42.000',
      image: 'https://images.unsplash.com/photo-1590074072674-3fb6c68c4f8e?w=800',
      rating: 5,
      features: ['4 Ülke', 'Kapsamlı Tur', 'Tarihi Rotalar']
    }
  ];

  const highlights = [
    'Orta Doğu\'nun zengin tarihi ve kültürü',
    'Antik şehirler ve UNESCO mirası alanları',
    'Çöl ve vadi manzaraları',
    'Geleneksel misafirperverlik',
    'Lezzetli Orta Doğu mutfağı',
    'Modern ve antik\'in buluşması'
  ];

  const whyChoose = [
    'Bölge Uzmanı Rehberler',
    'Güvenli Organizasyon',
    'Özel İzinler',
    'Kültürel Deneyimler'
  ];

  return (
    <TourTemplate
      title="Orta Doğu Turları"
      description="Medeniyetlerin beşiği Orta Doğu\'da tarihi bir yolculuk."
      heroImage="https://images.unsplash.com/photo-1552930210-e6a606743743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwdHJhdmVsfGVufDF8fHx8MTc2NTIwMjA1OXww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}
