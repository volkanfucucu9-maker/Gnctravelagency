import { TourTemplate } from '../../components/TourTemplate';

export function EuropeCulture() {
  const packages = [
    {
      id: 1,
      title: 'Almanya Berlin',
      duration: '4 Gün / 3 Gece',
      price: '€599',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Brandenburg Kapısı', 'Berlin Duvarı', 'Müze Adası', 'Türkçe Rehber']
    },
    {
      id: 2,
      title: 'Güney Almanya Turu - Schwäbisch Kültür Turu',
      duration: '7 Gün / 6 Gece',
      price: '€899',
      priceNote: 'başlayan fiyatlarla',
      image: 'https://images.unsplash.com/photo-1595928069811-8e1c7f1ee1c3?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      features: ['Stuttgart', 'Schwäbisch Alb', 'Rothenburg', 'Neuschwanstein Şatosu', 'Türkçe Rehber']
    }
  ];

  const highlights = [
    'Avrupa\'nın en önemli müze ve galerileri',
    'Tarihi şatoları ve sarayları keşfetme',
    'Her ülkenin kendine özgü mutfağı',
    'Mimari şaheserleri ve anıtsal yapılar',
    'Profesyonel sanat tarihi rehberleri',
    'Konforlu otel ve ulaşım'
  ];

  const whyChoose = [
    'Sanat Tarihçisi Rehberler',
    'Schengen Vize Desteği',
    'Müze Öncelikli Giriş',
    'Merkezi Konaklama'
  ];

  return (
    <TourTemplate
      title="Avrupa Kültür Turları"
      description="Sanat, tarih ve kültürün kalbinde unutulmaz bir Avrupa deneyimi."
      heroImage="https://images.unsplash.com/photo-1738068991910-6c5c0d8573e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjBjdWx0dXJlJTIwdHJhdmVsfGVufDF8fHx8MTc2NTIwMjA1OHww&ixlib=rb-4.1.0&q=80&w=1080"
      packages={packages}
      highlights={highlights}
      whyChoose={whyChoose}
    />
  );
}