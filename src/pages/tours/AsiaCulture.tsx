import { TourTemplate } from '../../components/TourTemplate';

export function AsiaCulture() {
  const packages = [
    {
      id: 1,
      title: 'Harikalar Diyarı Bali - Ubud Turu Rotası',
      duration: '8 Gün / 6 Gece',
      price: '€1499',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', 'Ubud + Bali', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bali-ubud-wonderland'
    },
    {
      id: 2,
      title: 'Bangkok - Pattaya Turu',
      duration: '9 Gün / 7 Gece',
      price: '€999',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', 'Tapınak Turları', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bangkok-pattaya'
    },
    {
      id: 3,
      title: 'Keşfet Tayland Bangkok Pattaya Phuket Turu',
      duration: '11 Gün / 9 Gece',
      price: '€1499',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', '3 Şehir Turu', 'Türkçe Rehber'],
      detailUrl: '/tour-details/kesfet-tayland'
    },
    {
      id: 4,
      title: 'Bangkok - Pattaya Turu 7 Gece Süper Promosyon',
      duration: '9 Gün / 7 Gece',
      price: '€1149',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Türk Havayolları', 'Extended Stay', 'Türkçe Rehber'],
      detailUrl: '/tour-details/bangkok-pattaya-extended'
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