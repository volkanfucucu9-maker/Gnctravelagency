import { TourTemplate } from '../../components/TourTemplate';

export function EuropeCulture() {
  const packages = [
    {
      id: 1,
      title: 'Paris & Londra Klasik',
      duration: '8 Gün / 7 Gece',
      price: '€780',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      rating: 5,
      features: ['Eyfel Kulesi', 'Big Ben', 'Müze Gezileri']
    },
    {
      id: 2,
      title: 'Orta Avrupa Başkentleri',
      duration: '10 Gün / 9 Gece',
      price: '€700',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
      rating: 5,
      features: ['Viyana', 'Prag', 'Budapeşte']
    },
    {
      id: 3,
      title: 'İspanya Kültür Turu',
      duration: '9 Gün / 8 Gece',
      price: '€650',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
      rating: 5,
      features: ['Barcelona', 'Madrid', 'Sevilla', 'Granada']
    },
    {
      id: 4,
      title: 'Almanya & Avusturya',
      duration: '7 Gün / 6 Gece',
      price: '€590',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
      rating: 5,
      features: ['Münih', 'Salzburg', 'Alpler']
    },
    {
      id: 5,
      title: 'Benelüks Ülkeleri',
      duration: '6 Gün / 5 Gece',
      price: '€520',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
      rating: 5,
      features: ['Amsterdam', 'Brüksel', 'Lüksemburg']
    },
    {
      id: 6,
      title: 'Avrupa Ekspres',
      duration: '14 Gün / 13 Gece',
      price: '€1.040',
      image: 'https://images.unsplash.com/photo-1493707553966-283afb8c7aac?w=800',
      rating: 5,
      features: ['9 Ülke', '15 Şehir', 'Komple Avrupa']
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