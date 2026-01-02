import { TourTemplate } from '../../components/TourTemplate';

export function Egypt() {
  const packages = [
    {
      id: 1,
      title: 'Kahire & Nil Turu',
      duration: '7 Gün / 6 Gece',
      price: '€1.100',
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
      rating: 5,
      features: ['Piramitler', 'Nil Cruise', 'Luxor & Aswan']
    },
    {
      id: 2,
      title: 'Mısır Klasik Tur',
      duration: '5 Gün / 4 Gece',
      price: '€1.100',
      image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
      rating: 5,
      features: ['Kahire', 'Piramitler', 'Müze Gezisi']
    },
    {
      id: 3,
      title: 'Mısır & Ürdün Kombine',
      duration: '9 Gün / 8 Gece',
      price: '€1.100',
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
      rating: 5,
      features: ['2 Ülke', 'Petra', 'Ölü Deniz']
    },
    {
      id: 5,
      title: 'Mısır Kültür Turu',
      duration: '8 Gün / 7 Gece',
      price: '€1.100',
      image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800',
      rating: 5,
      features: ['Tüm Tapınaklar', 'Nil Kenarı', 'Abu Simbel']
    },
    {
      id: 6,
      title: 'Mısır Ekonomik Paket',
      duration: '4 Gün / 3 Gece',
      price: '€899',
      image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
      rating: 4,
      features: ['Bütçe Dostu', 'Piramitler', 'Kahire Gezisi']
    }
  ];

  const highlights = [
    '5000 yıllık muhteşem Mısır medeniyeti',
    'Giza Piramitleri ve Sfenks',
    'Nil Nehri üzerinde unutulmaz gemi gezisi',
    'Antik tapınaklar ve firavun mezarları',
    'Kahire Müzesi\'nde benzersiz eserler',
    'Uygun fiyatlarla tarihi keşif'
  ];

  const whyChoose = [
    'Arkeolog Rehberler',
    'Güvenli Organizasyon',
    'Tarihi Bilgi',
    'Nitelikli Konaklama'
  ];

  return (
    <TourTemplate
      title="Mısır Turları"
      description="Firavunların ülkesinde tarihin gizemli sayfalarını açın."
      heroImage="https://images.unsplash.com/photo-1600520611035-84157ad4084d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdCUyMHB5cmFtaWRzfGVufDF8fHx8MTc2NTA4ODI4MHww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}