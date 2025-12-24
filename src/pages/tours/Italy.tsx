import { TourTemplate } from '../../components/TourTemplate';

export function Italy() {
  const packages = [
    {
      id: 1,
      title: 'Roma & Floransa Klasikleri',
      duration: '7 Gün / 6 Gece',
      price: '€700',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      rating: 5,
      features: ['Vatikan', 'Colosseum', 'Uffizi Galerisi']
    },
    {
      id: 2,
      title: 'Venedik & Milano Turu',
      duration: '6 Gün / 5 Gece',
      price: '€650',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
      rating: 5,
      features: ['Gondol Turu', 'Duomo', 'Moda Başkenti']
    },
    {
      id: 3,
      title: 'Güney İtalya & Amalfi',
      duration: '8 Gün / 7 Gece',
      price: '€760',
      image: 'https://images.unsplash.com/photo-1534445538923-75f38c93c81f?w=800',
      rating: 5,
      features: ['Napoli', 'Amalfi Kıyıları', 'Capri Adası']
    },
    {
      id: 4,
      title: 'Toskana Bağ Rotası',
      duration: '5 Gün / 4 Gece',
      price: '€590',
      image: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=800',
      rating: 5,
      features: ['Şarap Turları', 'Chianti', 'Şirin Kasabalar']
    },
    {
      id: 5,
      title: 'İtalya Panorama',
      duration: '10 Gün / 9 Gece',
      price: '€900',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
      rating: 5,
      features: ['12 Şehir', 'Komple İtalya', 'Kültür & Sanat']
    },
    {
      id: 6,
      title: 'İtalya Balayı Özel',
      duration: '7 Gün / 6 Gece',
      price: '€840',
      image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=800',
      rating: 5,
      features: ['Romantik Oteller', 'Özel Turlar', 'Lüks Deneyim']
    }
  ];

  const highlights = [
    'Roma, Floransa, Venedik gibi efsanevi şehirler',
    'Rönesans sanatı ve antik Roma eserleri',
    'Dünyaca ünlü İtalyan mutfağı deneyimi',
    'Göz alıcı mimarisi ve tarihi yapılar',
    'Amalfi kıyıları ve Toskana bağları',
    'Profesyonel sanat tarihçisi rehberler'
  ];

  const whyChoose = [
    'Sanat Uzmanı Rehberler',
    'Müze Rezervasyonları',
    'Merkezi Lokasyonlar',
    'İtalyan Mutfağı Tadımları'
  ];

  return (
    <TourTemplate
      title="İtalya Turları"
      description="Sanatın, tarihin ve lezzetin başkenti İtalya'da unutulmaz anılar biriktirin."
      heroImage="https://images.unsplash.com/photo-1668882565110-317edcfa0ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFseSUyMHJvbWUlMjBjb2xvc3NldW18ZW58MXx8fHwxNzY1MTg4OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}