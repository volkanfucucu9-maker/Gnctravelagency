import { TourTemplate } from '../../components/TourTemplate';

export function Balkans() {
  const packages = [
    {
      id: 1,
      title: 'Balkanların İncileri Turu',
      duration: '9 Gün / 8 Gece',
      price: '€600',
      image: 'https://images.unsplash.com/photo-1553991562-9f24b119ff51?w=800',
      rating: 5,
      features: ['6 Ülke', 'Kültür Rotası', 'Tarihi Kentler']
    },
    {
      id: 2,
      title: 'Bosna & Sırbistan Turu',
      duration: '7 Gün / 6 Gece',
      price: '€390',
      image: 'https://images.unsplash.com/photo-1551897683-f8b9c68c0c7f?w=800',
      rating: 5,
      features: ['Saraybosna', 'Belgrad', 'Yerel Lezzetler']
    },
    {
      id: 3,
      title: 'Arnavutluk & Makedonya',
      duration: '8 Gün / 7 Gece',
      price: '€480',
      image: 'https://images.unsplash.com/photo-1581974206819-a5389b530dcf?w=800',
      rating: 5,
      features: ['Ohrid Gölü', 'Tiran', 'Dağ Manzaraları']
    },
    {
      id: 4,
      title: 'Hırvatistan Sahil Turu',
      duration: '6 Gün / 5 Gece',
      price: '€530',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
      rating: 5,
      features: ['Dubrovnik', 'Split', 'Adriyatik']
    },
    {
      id: 5,
      title: 'Romanya Transilvanya',
      duration: '5 Gün / 4 Gece',
      price: '€360',
      image: 'https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?w=800',
      rating: 4,
      features: ['Drakula Kalesi', 'Bükreş', 'Gotik Mimari']
    },
    {
      id: 6,
      title: 'Balkan Ekspres',
      duration: '12 Gün / 11 Gece',
      price: '€760',
      image: 'https://images.unsplash.com/photo-1601461689308-6e4f7be7e968?w=800',
      rating: 5,
      features: ['8 Ülke', 'Komple Tur', 'Her Şey Dahil']
    }
  ];

  const highlights = [
    'Zengin tarihi ve kültürel mirasıyla Balkan ülkeleri',
    'Osmanlı izlerini taşıyan tarihi şehirler',
    'Doğal güzellikleri ve milli parkları',
    'Uygun fiyatlarla kapsamlı geziler',
    'Lezzetli yerel mutfak deneyimi',
    'Küçük grup turlarıyla samimi atmosfer'
  ];

  const whyChoose = [
    'Uzman Balkan Rehberleri',
    'Özenle Seçilmiş Rotalar',
    'Konforlu Ulaşım',
    'Kaliteli Konaklama'
  ];

  return (
    <TourTemplate
      title="Balkan Turları"
      description="Tarihin ve kültürün iç içe geçtiği Balkanlar'ı keşfedin."
      heroImage="https://images.unsplash.com/photo-1621872503559-c2d80fbb8a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxrYW5zJTIwdHJhdmVsfGVufDF8fHx8MTc2NTIwMjA1MXww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}