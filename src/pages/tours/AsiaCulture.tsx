import { TourTemplate } from '../../components/TourTemplate';

export function AsiaCulture() {
  const packages = [
    {
      id: 1,
      title: 'Çin Kültür Turu',
      duration: '10 Gün / 9 Gece',
      price: '₺42.999',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
      rating: 5,
      features: ['Çin Seddi', 'Terracotta', 'Pekin']
    },
    {
      id: 2,
      title: 'Hindistan Klasik',
      duration: '9 Gün / 8 Gece',
      price: '₺36.500',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
      rating: 5,
      features: ['Tac Mahal', 'Delhi', 'Jaipur', 'Agra']
    },
    {
      id: 3,
      title: 'Vietnam & Kamboçya',
      duration: '11 Gün / 10 Gece',
      price: '₺38.000',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
      rating: 5,
      features: ['Angkor Wat', 'Halong Körfezi', 'Ho Chi Minh']
    },
    {
      id: 4,
      title: 'Güney Kore Keşfi',
      duration: '8 Gün / 7 Gece',
      price: '₺44.000',
      image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800',
      rating: 5,
      features: ['Seul', 'Geleneksel Köyler', 'K-pop Kültürü']
    },
    {
      id: 5,
      title: 'Sri Lanka Turu',
      duration: '7 Gün / 6 Gece',
      price: '₺32.500',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      rating: 5,
      features: ['Çay Bahçeleri', 'Budist Tapınakları', 'Safari']
    },
    {
      id: 6,
      title: 'İpek Yolu Rotası',
      duration: '14 Gün / 13 Gece',
      price: '₺55.000',
      image: 'https://images.unsplash.com/photo-1570211776045-af3a51026f4a?w=800',
      rating: 5,
      features: ['Özbekistan', 'Kırgızistan', 'Tarihi Yol']
    }
  ];

  const highlights = [
    'Binlerce yıllık Asya medeniyetleri',
    'UNESCO Dünya Mirası tapınaklar ve anıtlar',
    'Geleneksel kültürleri yakından tanıma',
    'Egzotik mutfaklar ve yerel lezzetler',
    'Renkli festivaller ve törenler',
    'Modern ve geleneksel yaşamın karışımı'
  ];

  const whyChoose = [
    'Asya Uzmanı Rehberler',
    'Kültürel Deneyimler',
    'Yerel Rehberlik',
    'Özel Turlar'
  ];

  return (
    <TourTemplate
      title="Asya Kültür Turları"
      description="Gizemli Doğu\'nun kadim kültürlerini keşfedin."
      heroImage="https://images.unsplash.com/photo-1734304152830-88004e38dbd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwY3VsdHVyZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjUyMDIwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}
