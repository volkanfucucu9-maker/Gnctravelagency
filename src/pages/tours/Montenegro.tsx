import { TourTemplate } from '../../components/TourTemplate';

export function Montenegro() {
  const packages = [
    {
      id: 1,
      title: 'Karadağ Kotor & Budva Turu',
      duration: '5 Gün / 4 Gece',
      price: '€340',
      image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=800',
      rating: 5,
      features: ['UNESCO Kotor Körfezi', 'Plaj Keyfi', 'Doğal Güzellikler']
    },
    {
      id: 2,
      title: 'Karadağ Tatil Paketi',
      duration: '7 Gün / 6 Gece',
      price: '€450',
      image: 'https://images.unsplash.com/photo-1502471265170-8f3c6bbfb3e3?w=800',
      rating: 5,
      features: ['Her Şey Dahil', 'Tekne Turu', 'Skadar Gölü']
    },
    {
      id: 3,
      title: 'Karadağ Balayı Özel',
      duration: '6 Gün / 5 Gece',
      price: '€560',
      image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=800',
      rating: 5,
      features: ['Romantik Oteller', 'Özel Turlar', 'Balayı Süiti']
    },
    {
      id: 4,
      title: 'Karadağ Doğa Turu',
      duration: '4 Gün / 3 Gece',
      price: '€270',
      image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=800',
      rating: 4,
      features: ['Dağ Manzaraları', 'Trekking', 'Milli Parklar']
    }
  ];

  const highlights = [
    'Muhteşem Adriyatik kıyıları ve berrak denizi',
    'UNESCO Dünya Mirası Kotor Körfezi',
    'Ortaçağ kasabaları ve tarihi mekanlar',
    'Uygun fiyatlarla lüks tatil imkanı',
    'Türk mutfağına benzer lezzetli yemekler',
    'Kısa uçuş süresi ve kolay ulaşım'
  ];

  const whyChoose = [
    'En İyi Konaklama Yerleri',
    'Yerel Rehberler',
    'Küçük Grup Turları',
    'Özel Transfer Hizmeti'
  ];

  return (
    <TourTemplate
      title="Karadağ Turları"
      description="Adriyatik'in incisi Karadağ'da unutulmaz bir tatil deneyimi sizi bekliyor."
      heroImage="https://images.unsplash.com/photo-1715685484548-714978a82166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZW5lZ3JvJTIwa290b3IlMjBiYXl8ZW58MXx8fHwxNzY1MjAyMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}